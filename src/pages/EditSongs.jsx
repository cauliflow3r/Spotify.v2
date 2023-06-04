import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../context/ProductContextProvider";
import { api } from "../api/api";
import "../style/EditSongs.css";

const EditSongs = () => {
  const {
    saveEditedProduct,
    getProductDetails,
    productDetails,
    getArtist,
    getAlbums,
    artist,
    albums,
    // getGenre,
    // genre
  } = useProducts();
  console.log(productDetails);

  const { id } = useParams();

  useEffect(() => {
    api.getArtist();
  }, []);
  useEffect(() => {
    api.getAlbums();
  }, []);
  useEffect(() => {
    getProductDetails(id);
    // getGenre();
  }, []);

  useEffect(() => {
    setProduct(productDetails);
  }, [productDetails]);

  const [product, setProduct] = useState(productDetails);

  const handleInp = (e) => {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
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
  return (
    <>
      <div>
        <div className="glav_div">
          <img
            id="img1"
            width={300}
            src="	http://localhost:3000/static/media/Spotify_Logo_CMYK_Black.e219951301ddf739fe9e.png"
            alt=""
          />
          <div>
            <h2 className="edit_h4" variant="h4">
              Edit Song
            </h2>
          </div>
          <div className="div2">
            <input
              className="edit_kar1"
              sx={{ marginBottom: "10px" }}
              id="outlined-basic"
              label="title"
              variant="outlined"
              size="small"
              name="image"
              onChange={handleInp}
              value={product.title || ""}
            />

            <select name="artist" id="" onChange={handleInp}>
              {albums ? (
                albums.map((elem) => (
                  <option key={elem.id} value={elem.id}>
                    {elem.title}
                  </option>
                ))
              ) : (
                <option value="">artist </option>
              )}
            </select>

            <input
              className="edit_opi1"
              sx={{ marginBottom: "10px" }}
              id="outlined-basic"
              label="genre"
              variant="outlined"
              size="small"
              name="description"
              onChange={handleInp}
              // value={product.genre || ""}
            />
            <input
              type="file"
              className="edit_opi1"
              sx={{ marginBottom: "10px" }}
              id="outlined-basic"
              label="genre"
              variant="outlined"
              size="small"
              name="description"
              onChange={handleInp}
              // value={product.audio_file || ""}
            />

            <button
              className="edit_btn1"
              onClick={() => saveEditedProduct(product, id)}
              variant="outlined"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditSongs;
