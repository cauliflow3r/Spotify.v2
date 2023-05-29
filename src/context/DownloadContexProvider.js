import { stringify } from "json5";
import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
export const downloadContext = createContext();
export const useDownLoad = () => useContext(downloadContext);
const DownloadContextProvider = ({ children }) => {
  const [downloads, setDownloads] = useState(
    JSON.parse(localStorage.getItem("downloads"))
  );
  //   !===========================
  function getDownload() {
    let downloads = JSON.parse(localStorage.getItem("downloads"));
    if (!downloads) {
      localStorage.setItem(
        "downloads",
        JSON.stringify({
          tracks: [],
        })
      );
      downloads = {
        tracks: [],
      };
    }
    setDownloads(downloads);
  }

  //   !========================
  function AddDownload(track) {
    let downloads = JSON.parse(localStorage.getItem("downloads"));
    if (!downloads) {
      downloads = { tracks: [] };
    }
    console.log(track);
    let newTrack = track;

    let productToFind = downloads.tracks.filter((elem) => elem.id === track.id);
    console.log(productToFind);
    if (productToFind.length === 0) {
      downloads.tracks.push(newTrack);
    } else {
      downloads.tracks = downloads.tracks.filter((elem) => elem.id != track.id);
    }
    localStorage.setItem("downloads", JSON.stringify(downloads));
    setDownloads(downloads);
  }
  //   ! -------------------------------------
  const deleteTrack = (id) => {
    let downloads = JSON.parse(localStorage.getItem("downloads"));

    downloads.tracks = downloads.tracks.filter((elem) => elem.id !== id);
    localStorage.setItem("downloads", JSON.stringify(downloads));
    setDownloads(downloads);
  };

  const values = { getDownload, AddDownload, downloads, deleteTrack };
  return (
    <downloadContext.Provider value={values}>
      {children}
    </downloadContext.Provider>
  );
};

export default DownloadContextProvider;
