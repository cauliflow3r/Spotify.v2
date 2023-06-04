import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../context/ProductContextProvider";
import { useFeedDataLists } from "../context/FeedContextProvider/FeedContextProvider";
import classes from "../style/EditSongs.module.css";
import { api } from "../api/api";

const EditSongs = () => {
  const { saveEditedProduct, productDetails, getProductDetails } =
    useProducts();
  const [product, setProduct] = useState(productDetails);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [song, setSong] = useState(null);

  const { albums } = useFeedDataLists();

  const { id } = useParams();

  useEffect(() => {
    api.getAlbums();
    getProductDetails(id);
  }, []);

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
        <div className={classes.glav_div}>
          <img
            id="img1"
            width={300}
            src="http://localhost:3000/static/media/Spotify_Logo_CMYK_Black.e219951301ddf739fe9e.png"
            alt=""
          />
          <div>
            <h2 className={classes.edit_h4} variant="h4">
              Edit Song
            </h2>
          </div>
          <div className={classes.div2}>
            <input
              className={classes.edit_kar1}
              id="outlined-basic"
              label="title"
              variant="outlined"
              size="small"
              name="image"
              onChange={handleInp}
              value={product.title || ""}
            />

            <select name="artist" onChange={handleInp}>
              {albums ? (
                albums.map((album) => (
                  <option key={album.id} value={album.id}>
                    {album.title}
                  </option>
                ))
              ) : (
                <option value="">artist</option>
              )}
            </select>

            <input
              className={classes.edit_opi1}
              id="outlined-basic"
              label="genre"
              variant="outlined"
              size="small"
              name="description"
              onChange={handleInp}
            />
            <button
              className={classes.edit_btn1}
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
