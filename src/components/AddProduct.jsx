import React, { useState } from "react";
import { useProducts } from "../context/ProductContextProvider";
import "./AddProduct.css";

const AddProduct = () => {
  const { addProduct } = useProducts();
  const [product, setProduct] = useState({
    title: "",
    audio_file: null,
    album: "",
    genre: "",
    artist: "",
  });

  const handleInp = (e) => {
    if (e.target.name === "audio_file") {
      let obj = {
        ...product,
        [e.target.name]: e.target.files[0],
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };

  function handleAdd() {
    const newSong = new FormData();
    newSong.append("title", product.title);
    newSong.append("audio_file", product.audio_file);
    newSong.append("album", product.album);
    newSong.append("genre", product.genre);
    newSong.append("artist", product.artist);

    addProduct(newSong);
  }

  console.log(product);
  return (
    <div>
      <div className="glav_div">
        <div>
          <h2 className="edit_h4" variant="h4">
            New Song
          </h2>
        </div>
        <div>
          <input
            className="edit_kar"
            sx={{ marginBottom: "10px" }}
            fullWidth
            id="outlined-basic"
            placeholder="song"
            variant="outlined"
            size="small"
            name="audio_file"
            type="file"
            onChange={handleInp}
          />
        </div>
        <div>
          <input
            className="edit_kar"
            sx={{ marginBottom: "10px" }}
            fullWidth
            id="outlined-basic"
            placeholder="artist"
            variant="outlined"
            size="small"
            name="artist"
            onChange={handleInp}
          />
        </div>
        <div>
          <div>
            <input
              className="edit_kar"
              sx={{ marginBottom: "10px" }}
              fullWidth
              id="outlined-basic"
              placeholder="genre"
              variant="outlined"
              size="small"
              name="genre"
              onChange={handleInp}
            />
          </div>
          <input
            className="edit_nazvanie"
            sx={{ marginBottom: "10px" }}
            fullWidth
            id="outlined-basic"
            placeholder="title"
            variant="outlined"
            size="small"
            name="title"
            onChange={handleInp}
          />
        </div>
        <div></div>
        <div>
          <input
            className="edit_opi"
            sx={{ marginBottom: "10px" }}
            fullWidth
            id="outlined-basic"
            placeholder="album"
            variant="outlined"
            size="small"
            name="album"
            onChange={handleInp}
          />
        </div>
        <div>
          <button
            className="edit_btn"
            onClick={handleAdd}
            fullWidth
            variant="outlined"
          >
            New song
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
