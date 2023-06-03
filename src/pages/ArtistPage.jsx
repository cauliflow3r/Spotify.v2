import React, { useContext, useEffect, useState } from "react";
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
import { useDownLoad } from "../context/DownloadContexProvider";
import { useAuth } from "../context/AuthContextProvider";
import { usePlayer } from "../context/PlayerContextProvider/PlayerContextProvider";
import { api } from "../api/api";
import TrackRow from "../components/modules/TrackRow";
import TrackList from "../components/modules/TrackList";

const ArtistPage = () => {
  const { currentUser } = useAuth();
  const { id } = useParams();

  const [artistInfo, setArtistInfo] = useState(null);

  const { trackList, setTrackList } = usePlayer();

  useEffect(() => {
    const getArtistTrackListAndSet = async () => {
      const artist = await api.getArtist(id);
      setArtistInfo(artist);
      setTrackList(artist.songs);
    };

    getArtistTrackListAndSet(id);
  }, []);

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
      {artistInfo ? (
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
                      {trackList.length}{" "}
                    </h5>
                  </div>
                </div>
                <TrackList trackList={trackList} />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </MainLayout>
  );
};

export default ArtistPage;
