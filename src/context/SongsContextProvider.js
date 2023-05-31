import axios from "axios";
import { async } from "q";
import React, { createContext, useContext, useState } from "react";
import { API } from "./AuthContextProvider";


export const songsContext = createContext();
export const useSong = () => useContext(songsContext);
export const API_SONGS = "http://34.125.252.214/songs/";

const SongContextProvider = ({ children }) => {
  const [track, setTrack] = useState("");
  const [trackList, setTrackList] = useState([]);
  const [Counter, setCounter] = useState(3);
  const [AlbumBlock, setAlbumBlock] = useState([]);
  const [artistSongs, setArtistSongs] = useState([]);

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
    try {
      let res = await axios.get(`http://34.125.87.211/albums/${id}/`);
      setAlbumBlock(res.data.songs);
    } catch (error) {
      console.log(error);
    }
  }
  
  async function getArtistSongs(id) {
    try {
      let res = await axios.get(`${API}/artists/${id}/`);
      setArtistSongs(res.data.songs)
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  getArtistSongs()



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
    artistSongs,
    getArtistSongs
  };
  return (
    <songsContext.Provider value={values}>{children}</songsContext.Provider>
  );
};

export default SongContextProvider;
