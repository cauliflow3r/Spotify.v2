import axios from "axios";
import React, { createContext, useContext, useReducer, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import confAxios from "../config/confAxios";
import { ACTIONS } from "../helpers/const";
export const productContext = createContext();
export const useProducts = () => useContext(productContext);
export const API = "http://34.125.87.211";

const ProductContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState([]);
  const [query, setQuery] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [selectedRating, setSelectedRating] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [artistList, setArtistList] = useState("");

  // ! Search
  async function search(query, endpoint, setData) {
    const url = `${API}/${endpoint}/?search=${query}`;
    try {
      const res = await axios.get(url);
      // setData(res.data.results);
    } catch (error) {
      console.log(error);
    }
  }
  // -------------------

  // const handleSearch = () => {
  //   search(query, "songs", setSongs);
  //   search(query, "artists", setArtists);
  //   search(query, "albums", setAlbums);
  // };

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

  // *------use redicer--------
  const INIT_STATE = {
    products: [],
    productDetails: {},
  };

  const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case ACTIONS.GET_PRODUCTS:
        return { ...state, products: action.payload };

      case ACTIONS.GET_PRODUCT_DETAILS:
        return { ...state, productDetails: action.payload };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  // *------use redicer--------
  // * -------------------------------------

  // ! CREATE
  const addProduct = async (newProduct) => {
    await axios.post(`${API}/songs/upload/`, newProduct, getConfig());
    navigate("/");
  };

  //! EDIT

  const saveEditedProduct = async (newProduct, id) => {
    console.log(newProduct, "NEWPRODUCT");
    const payload = {
      ...newProduct,
      genre: newProduct.genre ? newProduct.genre.slug : null,

      title: newProduct.title,
      album: newProduct.album,
    };
    console.log("SAVETOEDITID", id);
    await confAxios.patch(`/songs/${id}/`, payload);
    getProducts();
    navigate("/playlist");
  };

  const getProducts = async () => {
    const { data } = await axios(`${API}${window.location.search}`);
    dispatch({ type: API, payload: data });
  };

  //! DELETE
  const deleteProduct = async (id) => {
    await axios.delete(`${API}/songs/${id}/`);
    getProducts();
  };

  // * -------------------------------------

  // ! add playlist

  async function postPlaylist(playlistForm) {
    try {
      const res = await axios.post(
        `${API}/playlist/author/`,
        playlistForm,
        getConfig()
      );
      console.log(res);
      navigate("/addPlaylist");
    } catch (error) {
      console.log("error :", error);
    }
  }

  // ! Rating

  const sendRating = async (id) => {
    const rating = {
      value: selectedRating,
      playlist: id,
    };

    try {
      let res = await axios.post(`${API}/rating/`, rating, getConfig());

      if (res.ok) {
        console.log("Запрос успешно отправлен.");
      } else {
        console.error("Произошла ошибка при отправке запроса.");
      }
    } catch (error) {
      console.error("Произошла ошибка при отправке запроса.", error);
    }
  };
  async function getSongfilter(query) {
    const url = `${API}/songs/?genre=${query}`;
    try {
      const res = await axios.get(url);
      setFilter(res.data.results);
    } catch (error) {
      console.log("error");
    }
  }

  const values = {
    artistList,
    setArtistList,
    search,
    inputValue,
    setInputValue,
    setSearchParams,
    searchParams,
    AddArtist,
    AddAlbum,
    deleteProduct,
    saveEditedProduct,
    addProduct,
    productDetails: state.productDetails,
    sendRating,
    setSelectedRating,
    postPlaylist,
    title,
    setTitle,
    description,
    setDescription,
    filter,
    getSongfilter,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
