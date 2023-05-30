import axios from "axios";
import React, { createContext, useContext, useState } from "react";

export const songsContext = createContext();
export const useSong = () => useContext(songsContext);
export const API_SONGS = "http://34.125.252.214/songs/";
const SongContextProvider = ({ children }) => {
  const [track, setTrack] = useState("");
  const [trackList, setTrackList] = useState([]);
  const [Counter, setCounter] = useState(3);

  async function getSongs() {
    try {
      const res = await axios.get(API_SONGS);
      // console.log(res.data.results);
      setTrackList(res.data.results);
      setTrack(res.data.results[Counter].audio_file);
    } catch (error) {
      console.log("error");
    }
  }

  const values = {
    getSongs,
    Counter,
    setCounter,
    track,
    setTrack,
    trackList,
    setTrackList,
  };
  return (
    <songsContext.Provider value={values}>{children}</songsContext.Provider>
  );
};

export default SongContextProvider;
