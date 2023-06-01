import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { API_ALBUMS } from "./SongsContextProvider";

export const productContext = createContext();
export const useProducts = () => useContext(productContext);
export const API = "http://34.125.87.211";

const ProductContextProvider = ({ children }) => {
  const [artist, setArtist] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [artists, setArtists] = useState([]);
  const [albumsSearch, setAlbumsSearch] = useState([]);
  const [query, setQuery] = useState("");
  const [inputValue,setInputValue] = useState('')
  const [searchParams, setSearchParams] = useSearchParams();

  async function search(query, endpoint, setData) {
    const url = `${API}/${endpoint}/?search=${query}`;
    try {
      const res = await axios.get(url);
      setData(res.data.results);
    } catch (error) {
      console.log(error);
    }
  }


  const handleSearch = () => {
    // Вызов функции search для эндпоинта songs
    search(query, "songs", setSongs);

    // Вызов функции search для эндпоинта artists
    search(query, "artists", setArtists);

    // Вызов функции search для эндпоинта albums
    search(query, "albums", setAlbums);
  };




  async function getArtist() {
    try {
      const res = await axios.get(`${API}/artists/`);
      setArtist(res.data.results);

      const id = res.data.id; 

      // const id = res.data.id;
      // getAlbumById(id);
      // console.log(res.data.results);

    } catch (error) {
      console.log(error);
    }
  }

  async function getAlbums() {
    try {
      const res = await axios.get(`${API}/albums/`);
      setAlbums(res.data.results)
    } catch (error) {
      console.log(error);
    }
  }



  async function getAlbumById(id) {
    try {
      const res = await axios.get(`${API_ALBUMS}/albums/${id}/`);
      // console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  // getAlbums();


  const values = {
    getArtist,
    artist,
    setArtist,
    getAlbums,
    albums,
    setAlbums,
    songs,
    setSongs,
    artists,
    setArtists,
    albumsSearch,
    setAlbumsSearch,
    search,
    inputValue,
    setInputValue,handleSearch,setSearchParams,searchParams
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;