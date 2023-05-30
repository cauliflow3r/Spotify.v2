import axios from "axios";
import { async } from "q";
import React, { createContext, useContext, useState } from "react";
import { API } from "./AuthContextProvider";
import { API_ALBUMS } from "./ProductContextProvider";

export const songsContext = createContext();
export const useSong = () => useContext(songsContext);
export const API_SONGS = "http://34.125.252.214/songs/";
console.log(API);
const SongContextProvider = ({ children }) => {
  const [track, setTrack] = useState("");
  const [trackList, setTrackList] = useState([]);
  const [Counter, setCounter] = useState(3);
  const [AlbumBlock, setAlbumBlock] = useState([]);

  async function getSongs() {
    try {
      const res = await axios.get(API_SONGS);
      setTrackList(res.data.results);
      setTrack(res.data.results[Counter].audio_file);
    } catch (error) {
      console.log("error");
    }
  }

  // todo - получение данных по id
  async function getALbumTrack(id) {
    let res = await axios.get(`${API_ALBUMS}/albums/${id}/`);

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
  };
  return (
    <songsContext.Provider value={values}>{children}</songsContext.Provider>
  );
};

export default SongContextProvider;
