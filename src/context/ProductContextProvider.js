import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { API_ALBUMS } from "./SongsContextProvider";
import { async } from "q";
import App from "../App";

export const productContext = createContext();
export const useProducts = () => useContext(productContext);
export const API = "http://34.125.87.211";

const ProductContextProvider = ({ children }) => {
  const [artist, setArtist] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [artists, setArtists] = useState([]);
  // const [albumsSearch, setAlbumsSearch] = useState([]);
  const [query, setQuery] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [selectedRating, setSelectedRating] = useState('');

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
    search(query, "songs", setSongs);
    search(query, "artists", setArtists);
    search(query, "albums", setAlbums);
  };

  async function getArtist() {
    try {
      const res = await axios.get(`${API}/artists/`);
      setArtist(res.data.results);
      console.log(res.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  async function getAlbums() {
    try {
      const res = await axios.get(`${API}/albums/`);
      setAlbums(res.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  // getAlbums();

  // todo -----------------------------------------------
  function getConfig() {
    const tokens = JSON.parse(localStorage.getItem("tokens"));
    // console.log(tokens);
    const Authorization = `Bearer ${tokens.access}`;
    const config = {
      headers: { Authorization },
    };
    return config;
  }

  // console.log(getConfig());

  async function AddArtist(newAtrist) {
    try {
      let res = await axios.post(`${API}/artists/`, newAtrist, getConfig());
    } catch (error) {
      console.log("error");
    }
  }
  // todo -----------------------------------------------
  // ! added album --------------------
  async function AddAlbum(newAlbum) {
    try {
      let res = await axios.post(`${API}/albums/`, newAlbum, getConfig());
    } catch (error) {
      console.log("error");
    }
  }
  // ! added album --------------------



  // ! Rating 

    const sendRating = async (id) => {
      const rating = {
        value: selectedRating,
        playlist: id,
      };

      try {
        let res = await axios.post(`${API}/rating/`, rating, getConfig());

        if (res.ok) {
          console.log('Запрос успешно отправлен.');
        } else {
          console.error('Произошла ошибка при отправке запроса.');
        }
      } catch (error) {
        console.error('Произошла ошибка при отправке запроса.', error);
      }
    };
    console.log();


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
    search,
    inputValue,
    setInputValue,
    handleSearch,
    setSearchParams,
    searchParams,
    AddArtist,
    AddAlbum,
    sendRating,
    setSelectedRating,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
