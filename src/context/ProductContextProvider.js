import axios from "axios";
import React, { createContext, useContext, useState } from "react";

export const productContext = createContext();
export const useProducts = () => useContext(productContext);
export const API = "http://34.125.87.211";
export const API_ALBUMS = 'http://34.125.87.211'

const ProductContextProvider = ({ children }) => {
  const [artist, setArtist] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [albumsId, setAlbumsId] = useState([]);

  async function getArtist() {
    try {
      const res = await axios.get(`${API}/artists/`);
      setArtist(res.data.results);
      const id = res.data.id; 
      getAlbumById(id);
      // console.log(res.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  async function getAlbums() {
    try {
      const res = await axios.get(`${API_ALBUMS}/albums/`);
      const albumIds = res.data.results.map(album => album.id);
      setAlbums(res.data.results)
      for (const id of albumIds) {
        await getAlbumById(id);
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  async function getAlbumById(id) {
    try {
      const res = await axios.get(`${API_ALBUMS}/albums/${id}/`);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  
  getAlbums();
  


  const values = {
    getArtist,
    artist,
    setArtist,
    getAlbums,
    albums,
    setAlbums,
    albumsId
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
