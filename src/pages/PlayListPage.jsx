import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import album from "../style/AlbumPage.module.css";
import { useDownLoad } from "../context/DownloadContexProvider";
import { useAuth } from "../context/AuthContextProvider";
import { useProducts } from "../context/ProductContextProvider";

import TrackList from "../components/modules/TrackList";
import { useFeedDataLists } from "../context/FeedContextProvider/FeedContextProvider";
import { usePlayer } from "../context/PlayerContextProvider/PlayerContextProvider";

const PlayListPage = ({ trackList }) => {
  console.log("trackList", trackList);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  // const navigate = useNavigate();
  const { getFavorites, getDownload } = useDownLoad();

  const { sendRating, setSelectedRating } = useProducts();
  const { getFeedDataListsAndSet, playlists } = useFeedDataLists();
  const { setTrackList } = usePlayer();
  console.log(playlists);

  useEffect(() => {
    getFavorites();
  }, []);
  useEffect(() => {
    getDownload();
  }, []);

  // todo -------------------
  const { id } = useParams();
  console.log("Это будет айди ", id);

  useEffect(() => {
    getFeedDataListsAndSet();
    sendRating(id);
    setTrackList(id);
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
                <img src={playlists.cover_photo} width={250} alt="" />
              </div>
              <div className={album.TopInfo_Right}>
                <h5>Плейлист</h5>
                <h2>{playlists.title} </h2>
                <h5>
                  User&nbsp; : &nbsp;{currentUser} : Quantity :
                  {playlists.length}
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
