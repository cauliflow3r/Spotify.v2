import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
export const downloadContext = createContext();
export const useDownLoad = () => useContext(downloadContext);
const DownloadContextProvider = ({ children }) => {
  const [downloads, setDownloads] = useState(
    JSON.parse(localStorage.getItem("downloads"))
  );
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

  const values = { getDownload };
  return (
    <downloadContext.Provider value={values}>
      {children}
    </downloadContext.Provider>
  );
};

export default DownloadContextProvider;
