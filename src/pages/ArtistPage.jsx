import React, { useContext, useEffect } from "react";
import MainLayout from "../layouts/MainLayout/MainLayout";
import classes from "../style/Main.module.css";
import { useParams } from "react-router-dom";
import downloads from "../style/Artists.module.css";
import play from "../assets/Play.svg";
import download from "../assets/Line=empty, Name=download.svg";
import undownload from "../assets/UN_Line=empty, Name=download.svg";
import search from "../assets/Line=bold, Name=search.svg";
import drop from "../assets/fi-ss-caret-down.svg";
import clock from "../assets/Line=Clock.svg";
import like_song from "../assets/like_song_icon.svg";
import unlike_song from "../assets/unlike _song_icon.svg";
import { songsContext } from "../context/SongsContextProvider";
import { useDownLoad } from "../context/DownloadContexProvider";
import { useAuth } from "../context/AuthContextProvider";

const ArtistPage = () => {
  const { currentUser } = useAuth();
  const { id } = useParams();

  const { getArtistSongs, artistSongs, setCurrentTrack, artistInfo } =
    useContext(songsContext);

  useEffect(() => {
    getArtistSongs(id);
  }, []);

  // console.log(artistInfo);

  // todo ----------------------------------
  const {
    getFavorites,
    AddFavorites,
    AddDownload,
    getDownload,
    checkTracks,
    checkTracksDown,
  } = useDownLoad();
  useEffect(() => {
    getFavorites();
  }, []);
  useEffect(() => {
    getDownload();
  }, []);
  // todo ----------------------------------

  return (
    <MainLayout>
      <div className={classes.container}>
        <div className={classes.contentWrapper}>
          <div>
            <div className={downloads.download_container}>
              <div className={downloads.TopInfo}>
                <div className={downloads.TopInfo_Left}>
                  <img src={artistInfo.photo} width={250} alt="" />
                </div>
                <div className={downloads.TopInfo_Right}>
                  <h5>Плейлист</h5>
                  <h2>{artistInfo.full_name}</h2>
                  <h5>
                    {" "}
                    User&nbsp; : &nbsp;{currentUser} : Quantity :{" "}
                    {artistSongs.length}{" "}
                  </h5>
                </div>
              </div>
              <div className={downloads.track_block}>
                <div className={downloads.track_props}>
                  <div className={downloads.track_props_left}>
                    <img src={play} alt="" />
                  </div>
                  <div className={downloads.track_props_right}>
                    <img src={search} alt="" style={{ width: "25px" }} />
                    <span>Дата добавления </span>
                    <img src={drop} alt="" />
                  </div>
                </div>
                <div className={downloads.track_line_head}>
                  <div className={downloads.container_grid}>
                    <div>
                      <h4>#</h4>
                    </div>
                    <div>
                      <h4>Name</h4>
                    </div>
                    <div>
                      <h4>Add</h4>
                    </div>
                    <div>
                      <h4>Date publick</h4>
                    </div>
                    <div>
                      <img src={clock} alt="" />
                    </div>
                    <div>
                      <img src={download} alt="" />
                    </div>
                  </div>
                  {artistSongs.map((item, index) => (
                    <div className={downloads.track_line} key={item.id}>
                      <div
                        onClick={() => {
                          setCurrentTrack(index);
                        }}
                      >
                        <img src={play} alt="" />
                      </div>

                      <div className={downloads.track_line_section}>
                        <img src={artistInfo.photo} width={48} alt="" />
                        <div className={downloads.track_line_section_name}>
                          <h4> {item.title} </h4>
                          <h5> {item.artist[1]} </h5>
                        </div>
                      </div>
                      <div>{item.downloads}</div>
                      <div>{item.release_date}</div>
                      <div>3:22</div>
                      <div
                        // className={downloads.time}
                        onClick={() => {
                          AddDownload(item);
                        }}
                      >
                        {checkTracksDown(item.id) ? (
                          <img src={undownload} alt="" />
                        ) : (
                          <img src={download} alt="" />
                        )}
                      </div>
                      <div
                        className={downloads.favorites}
                        onClick={() => {
                          AddFavorites(item);
                        }}
                      >
                        {checkTracks(item.id) ? (
                          <img src={unlike_song} alt="" />
                        ) : (
                          <img src={like_song} alt="" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ArtistPage;
