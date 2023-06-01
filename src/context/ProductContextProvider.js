import axios from "axios";
import React, { createContext, useContext, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ACTIONS } from "../helpers/const";

export const productContext = createContext();
export const useProducts = () => useContext(productContext);
export const API = "http://34.125.87.211";

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

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const [artist, setArtist] = useState([]);
  const navigate = useNavigate();
  const [albums, setAlbums] = useState([]);

  async function getArtist() {
    try {
      const res = await axios.get(`${API}/artists/`);
      setArtist(res.data.results);
      const id = res.data.id;
    } catch (error) {
      console.log(error);
    }
  }

  const addProduct = async (newProduct) => {
    await axios.post(`${API}/songs/upload/`, newProduct);
    navigate("/playlist");
  };
  const getProductDetails = async (id) => {
    const { data } = await axios(`${API}/${id}`);
    dispatch({
      type: ACTIONS.GET_PRODUCT_DETAILS,
      payload: data,
    });
  };

  const saveEditedProduct = async (newProduct) => {
    await axios.patch(`${API}/${newProduct.id}`, newProduct);
    getProducts();
    navigate("/products");
  };

  const getProducts = async () => {
    const { data } = await axios(`${API}${window.location.search}`);
    dispatch({ type: API, payload: data });
  };
  const deleteProduct = async (id) => {
    await axios.delete(`${API}/${id}`);
    getProducts();
  };
  async function getAlbums() {
    try {
      const res = await axios.get(`${API}/albums/`);
      setAlbums(res.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  const values = {
    getArtist,
    products: state.products,
    productDetails: state.productDetails,
    artist,
    setArtist,
    addProduct,
    getProducts,
    deleteProduct,
    getProductDetails,
    saveEditedProduct,
    getAlbums,
    albums,
    setAlbums,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
