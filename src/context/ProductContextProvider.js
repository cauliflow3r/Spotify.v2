import axios from "axios";
import React, { createContext, useContext, useState } from "react";

export const productContext = createContext();
export const useProducts = () => useContext(productContext);
export const API = "http://34.125.87.211";

const ProductContextProvider = ({ children }) => {
  const [artist, setArtist] = useState([]);

  async function getArtist() {
    try {
      const res = await axios.get(`${API}/artists/`);
      setArtist(res);
      console.log(res.data.results);
    } catch (error) {
      console.log(error);
    }
  }


  const values = {
    getArtist,
    artist,
    setArtist,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
