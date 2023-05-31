import axios from "axios";
import { async } from "q";
import React, { createContext, useContext, useState } from "react";
import { API } from "./AuthContextProvider";

export const songsContext = createContext();
export const useSong = () => useContext(songsContext);
export const API_SONGS = "http://34.125.252.214/songs/";

const SongContextProvider = ({ children }) => {
  const [trackInfo, setTrackInfo] = useState({});
  const [trackList, setTrackList] = useState([]);
  const [Counter, setCounter] = useState(3);
  const [AlbumBlock, setAlbumBlock] = useState([]);
  const [AlbumInfo, setAlbumInfo] = useState({});

  // todo - получение данных по id
  async function getALbumTrack(id) {
    let res = await axios.get(`${API}/albums/${id}/`);
    console.log(res.data);
    setAlbumBlock(res.data.songs);
    try {
    } catch (error) {
      console.log(error);
    }
  }
  // todo - получение данных по id
  const values = {
    getSongs,
    Counter,
    setCounter,
    track,
    setTrack,
    trackList,
    setTrackList,
    getALbumTrack,
    AlbumBlock,
    AlbumInfo,
    currentTrack,
    setCurrentTrack,
    artistSongs,
    getArtistSongs,
  };
  return (
    <songsContext.Provider value={values}>{children}</songsContext.Provider>
  );
};

export default SongContextProvider;
