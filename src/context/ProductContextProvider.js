import axios from "axios";
import React, { createContext, useContext, useReducer, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ACTIONS } from "../helpers/const";
import { async } from "q";

export const productContext = createContext();
export const useProducts = () => useContext(productContext);
export const API = "http://34.125.87.211";

const ProductContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [artist, setArtist] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [artists, setArtists] = useState([]);
  // const [albumsSearch, setAlbumsSearch] = useState([]);
  const [query, setQuery] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [selectedRating, setSelectedRating] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

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
      console.log(res.data);
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
  const addProduct = async (newProduct) => {
    await axios.post(`${API}/songs/upload/`, newProduct, getConfig());
    navigate("/playlist");
  };

  const getProductDetails = async (id) => {
    const { data } = await axios(`${API}/songs/${id}/`);

    dispatch({
      type: ACTIONS.GET_PRODUCT_DETAILS,
      payload: data,
    });
  };

  const saveEditedProduct = async (newProduct, id) => {
    await axios.patch(`${API}/songs/${id}/`, newProduct);
    getProducts();
    navigate("/products");
  };

  const getProducts = async () => {
    const { data } = await axios(`${API}${window.location.search}`);
    dispatch({ type: API, payload: data });
  };
  const deleteProduct = async (id) => {
    await axios.delete(`${API}/songs/${id}/`);
    getProducts();
  };

  // const [genre, setGenre] = useState({});
  // console.log(genre ? genre.data.results : "nothing");
  // async function getGenre() {
  //   try {
  //     let res = await axios.get(`${API}/genre/`);
  //     setGenre(res);
  //   } catch (error) {
  //     console.log("ошибка запроса на серверв жанры ");
  //   }
  // }

  // * -------------------------------------

  // ! add playlist

  async function postPlaylist() {
    try {
      const res = await axios.post(
        `${API}/playlist/author/`,
        { title: title, description: description },
        getConfig()
      );
      console.log(res);
      navigate("/playadd");
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
    deleteProduct,
    saveEditedProduct,
    getProductDetails,
    addProduct,
    productDetails: state.productDetails,
    sendRating,
    setSelectedRating,
    postPlaylist,
    title,
    setTitle,
    description,
    setDescription,
    // getGenre,
    // genre,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
