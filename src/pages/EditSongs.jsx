import React, { useEffect, useState } from "react";
import { useProducts } from "../context/ProductContextProvider";
import "../style/EditSongs.css";
import { api } from "../api/api";
import { Link, useParams } from "react-router-dom";
import { useFeedDataLists } from "../context/FeedContextProvider/FeedContextProvider";

const EditSongs = () => {
  const { saveEditedProduct, getProductDetails, productDetails, getProducts } =
    useProducts();
  const { albums: albums2 } = useFeedDataLists();

  const { id } = useParams();

  useEffect(() => {
    getProductDetails(id);
  }, []);

  useEffect(() => {
    setProduct(productDetails);
  }, [productDetails]);

  const [product, setProduct] = useState(productDetails);

  const [album, setAlbum] = useState(0);
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [genre, setGenre] = useState("");

  const handleInp = (e) => {
    if (e.target.name === "genre") {
      setProduct((prevProduct) => ({
        ...prevProduct,
        [e.target.name]: Number(e.target.value),
      }));
    } else {
      setProduct((prevProduct) => ({
        ...prevProduct,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const handleAdd = () => {
    const newSong = new FormData();
    console.log(title, file, genre, album, "FORMDATA");

    newSong.append("title", title);

    if (file) {
      newSong.append("audio_file", file);
    }
    newSong.append("album", album);
    newSong.append("genre", genre);
    console.log("FORMDATANEWSONG", newSong);
    saveEditedProduct(newSong, id);
  };

  // useEffect(() => {
  //   api.getArtist();
  //   api.getAlbums();
  // }, []);

  return (
    <>
      <div>
        <div className="glav_div">
          <img
            id="img1"
            width={300}
            src="http://localhost:3000/static/media/Spotify_Logo_CMYK_Black.e219951301ddf739fe9e.png"
            alt=""
          />
          <div>
            <h2 className="edit_h4" variant="h4">
              Edit Song
            </h2>
          </div>

          <div className="div2">
            <h2>Title</h2>
            <input
              className="edit_kar"
              sx={{ marginBottom: "10px" }}
              id="outlined-basic"
              placeholder="title"
              variant="outlined"
              size="small"
              name="title"
              // value={product.title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <h2>Genre</h2>
            <input
              className="edit_kar"
              sx={{ marginBottom: "10px" }}
              id="outlined-basic"
              placeholder="genre"
              variant="outlined"
              size="small"
              name="genre"
              // value={product.genre}
              onChange={(e) => {
                setGenre(e.target.value);
              }}
            />
          </div>

          <h2>Album</h2>

          <select
            name="album"
            id=""
            onChange={(e) => {
              setAlbum(e.target.value);
            }}
            value={album}
          >
            {albums2 ? (
              albums2.map((elem) => (
                <option key={elem.id} value={elem.id}>
                  {elem.title}
                </option>
              ))
            ) : (
              <option value="">album </option>
            )}
          </select>
          <div>
            <Link to={"/"}>
              <button
                className="edit_btn"
                onClick={handleAdd}
                variant="outlined"
              >
                Save
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditSongs;
