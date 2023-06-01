import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import album from "../style/AlbumPage.module.css";
import heart from "../assets/Vector.svg";
import play_btn from "../assets/Play.svg";
import download from "../assets/Line=empty, Name=download.svg";
import undownload from "../assets/UN_Line=empty, Name=download.svg";
import search from "../assets/Line=bold, Name=search.svg";
import drop from "../assets/fi-ss-caret-down.svg";
import clock from "../assets/Line=Clock.svg";
import like_song from "../assets/like_song_icon.svg";
import unlike_song from "../assets/unlike _song_icon.svg";
import { useDownLoad } from "../context/DownloadContexProvider";
import { songsContext } from "../context/SongsContextProvider";
import { useProducts } from "../context/ProductContextProvider";
import { useAuth } from "../context/AuthContextProvider";

const AlbumPage = () => {
  const { currentUser } = useAuth();
  // const navigate = useNavigate();
  const {
    getFavorites,
    AddFavorites,
    AddDownload,
    getDownload,
    checkTracks,
    checkTracksDown,
  } = useDownLoad();

  const { saveEditedProduct } = useProducts();

  useEffect(() => {
    getFavorites();
  }, []);
  useEffect(() => {
    getDownload();
  }, []);
  // !downloads
  // !----------------
  const {
    getALbumTrack,
    AlbumBlock,
    AlbumInfo,
    currentTrack,
    setCurrentTrack,
  } = useContext(songsContext);

  // todo -------------------
  const { id } = useParams();
  // console.log("Это будет айди ", id);

  useEffect(() => {
    getALbumTrack(id);
  }, []);
  // todo -------------------

  return (
    <MainLayout>
      <div className={album.container}>
        <div className={album.contentWrapper}>
          <div>
            <div className={album.TopInfo}>
              <div className={album.TopInfo_Left}>
                <img src={AlbumInfo.cover_photo} width={250} alt="" />
              </div>
              <div className={album.TopInfo_Right}>
                <h5>Плейлист</h5>
                <h2>{AlbumInfo.title} </h2>
                <h5>
                  User&nbsp; : &nbsp;{currentUser} : Quantity :{" "}
                  {AlbumBlock.length}
                </h5>
              </div>
            </div>
            <div className={album.track_block}>
              <div className={album.track_props}>
                <div className={album.track_props_left}>
                  <img src={play_btn} alt="" />
                  <img src={download} alt="" />
                </div>
                <div className={album.track_props_right}>
                  <img src={search} alt="" style={{ width: "25px" }} />
                  <span>Дата добавления </span>
                  <img src={drop} alt="" />
                </div>
              </div>
              <div className={album.track_line_head}>
                <div className={album.container_grid}>
                  <div className={album.number}>
                    <h4>#</h4>
                  </div>
                  <div>
                    <h4>Name</h4>
                  </div>
                  <div>
                    <h4>Album</h4>
                  </div>
                  <div>
                    <h4>Date </h4>
                  </div>
                  <div>
                    <img src={clock} alt="" />
                  </div>
                  <div className={album.number}>
                    <img src={download} alt="" />
                  </div>
                  <div className={album.number}>
                    <img src={like_song} alt="" />
                  </div>
                </div>

                {AlbumBlock.map((elem, index) => {
                  return (
                    <div className={album.track_line} key={elem.id}>
                      <div
                        onClick={() => {
                          setCurrentTrack(index);
                        }}
                      >
                        {" "}
                        <img src={play_btn} alt="" />
                      </div>
                      <div className={album.track_line_section}>
                        <img src={elem.cover_photo} width={48} alt="" />
                        <div className={album.track_line_section_name}>
                          <h4> {elem.title} </h4>
                          <h5> {elem.artist[1]} </h5>
                        </div>
                      </div>
                      <div className={album.album}>{AlbumInfo.title}</div>
                      <button>Edit</button>
                      <div className={album.dateAdd}>1 day ago</div>
                      <div className={album.time}>3:22</div>
                      <div
                        className={album.time}
                        onClick={() => {
                          AddDownload(elem);
                        }}
                      >
                        {checkTracksDown(elem.id) ? (
                          <img src={undownload} alt="" />
                        ) : (
                          <img src={download} alt="" />
                        )}
                      </div>
                      <div
                        className={album.favorites}
                        onClick={() => {
                          AddFavorites(elem);
                        }}
                      >
                        {checkTracks(elem.id) ? (
                          <img src={unlike_song} alt="" />
                        ) : (
                          <img src={like_song} alt="" />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AlbumPage;
