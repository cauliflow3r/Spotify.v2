import React, { createContext, useContext } from 'react'
import { useNavigate } from "react-router-dom";



export const profileContext =createContext();
export const useProfile = () => useContext(profileContext);

const INIT_STATE = {
  products: [],
  pages: 1,
  categories: [],
  oneProduct: null,
};


const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_":
      return { ...state, categories: action.payload };

    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload.results,
        pages: Math.ceil(action.payload.count / 6),
      };

    case "GET_ONE_PRODUCT":
      return { ...state, oneProduct: action.payload };

    default:
      return state;
  }
};

const ProfileContextProvider = () => {

  async function createProduct(newProduct) {
    try {
      const res = await axios.post(`${API}/products/`, newProduct, getConfig());
      console.log(res);
    navigate("/products");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>ProfileContextProvider</div>
  )
}

export default ProfileContextProvider