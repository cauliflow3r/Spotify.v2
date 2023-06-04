import axios from "axios";
import React, { createContext, useContext, useReducer, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ACTIONS } from "../helpers/const";
export const productContext = createContext();
export const useProducts = () => useContext(productContext);
export const API = "http://34.125.87.211";

const ProductContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  // const [selectedRating, setSelectedRating] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [text, setText] = useState("");

  // ! Search
  async function search(query, endpoint, setData) {
    const url = `${API}/${endpoint}/?search=${query}`;
    try {
      const res = await axios.get(url);
      setData(res.data.results);
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
    oneSong: null,
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


  const getProductDetails = async (id) => {
    const { data } = await axios(`${API}/songs/${id}/`);
    dispatch({
      type: ACTIONS.GET_PRODUCT_DETAILS,
      payload: data,
    });
  };

  const saveEditedProduct = async (newProduct, id) => {
    const payload = {
      ...newProduct,
      genre: newProduct.genre.slug,
    };
    await axios.patch(`${API}/songs/${id}/`, payload);
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
      navigate("/playadd");
    } catch (error) {
      console.log("error :", error);
    }
  }
// ! commient 



async function postPlayListComment (playlistId) {
  try {
    let response = await axios.post(`${API}/review/comments/`, {body: text,playlist:playlistId}, getConfig());
  } catch (error) {
    console.log("postPlayListComment :", postPlayListComment);
  }
}
  // ! Rating

  // const sendRating = async (id) => {
  //   const rating = {
  //     value: selectedRating,
  //     playlist: id,
  //   };

  //   try {
  //     let res = await axios.post(`${API}/review/rating/`, rating, getConfig());

  //     if (res.ok) {
  //       console.log("Запрос успешно отправлен.");
  //     } else {
  //       console.error("Произошла ошибка при отправке запроса.");
  //     }
  //   } catch (error) {
  //     console.error("Произошла ошибка при отправке запроса.", error);
  //   }
  // };

  const values = {
    search,
    inputValue,
    setInputValue,
    setSearchParams,
    searchParams,
    AddArtist,
    AddAlbum,
    deleteProduct,
    saveEditedProduct,
    getProductDetails,
    productDetails: state.productDetails,
    // sendRating,

    postPlaylist,
    title,
    setTitle,
    description,
    setDescription,
    postPlayListComment
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
