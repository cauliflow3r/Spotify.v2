import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import album from "../style/AlbumPage.module.css";
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
import { useAuth } from "../context/AuthContextProvider";
import { useProducts } from "../context/ProductContextProvider";
import TrackRow from "../components/modules/TrackRow";
import TrackList from "../components/modules/TrackList";

const PlayListPage = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  // const navigate = useNavigate();
  const { getFavorites, getDownload } = useDownLoad();

  const { sendRating, setSelectedRating } = useProducts();

  useEffect(() => {
    getFavorites();
  }, []);
  useEffect(() => {
    getDownload();
  }, []);

  // !downloads
  // !----------------
  const { getALbumTrack, trackList, AlbumInfo } = useContext(songsContext);
  console.log("trackList", trackList);
  console.log("AlbumInfo", AlbumInfo);

  // todo -------------------
  const { id } = useParams();
  console.log("Это будет айди ", id);

  useEffect(() => {
    getALbumTrack(id);
    sendRating(id);
  }, []);

  useEffect(() => {}, []);

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
                  User&nbsp; : &nbsp;{currentUser} : Quantity :
                  {trackList.length}
                </h5>
                <div>
                  <div>
                    <div>
                      <input
                        type="radio"
                        id="r-01"
                        name="r"
                        value="1"
                        onChange={(e) => setSelectedRating(e.target.value)}
                        onBlur={() => sendRating(id)}
                      />
                      <label htmlFor="r-01">★</label>
                      <input
                        type="radio"
                        id="r-02"
                        name="r"
                        value="2"
                        onChange={(e) => setSelectedRating(e.target.value)}
                        onBlur={() => sendRating(id)}
                      />
                      <label htmlFor="r-02">★</label>
                      <input
                        type="radio"
                        id="r-03"
                        name="r"
                        value="3"
                        onChange={(e) => setSelectedRating(e.target.value)}
                        onBlur={() => sendRating(id)}
                      />
                      <label htmlFor="r-03">★</label>
                      <input
                        type="radio"
                        id="r-04"
                        name="r"
                        value="4"
                        onChange={(e) => setSelectedRating(e.target.value)}
                        onBlur={() => sendRating(id)}
                      />
                      <label htmlFor="r-04">★</label>
                      <input
                        type="radio"
                        id="r-05"
                        name="r"
                        value="5"
                        onChange={(e) => setSelectedRating(e.target.value)}
                        onBlur={() => sendRating(id)}
                      />
                      <label htmlFor="r-05">★</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <TrackList trackList={trackList} />
            <div></div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PlayListPage;
