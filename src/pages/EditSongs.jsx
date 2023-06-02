import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../context/ProductContextProvider";

const EditSongs = () => {
  const {
    saveEditedProduct,
    getProductDetails,
    productDetails,
    getArtist,
    getAlbums,
    artist,
    albums,
  } = useProducts();
  console.log(productDetails);

  const { id } = useParams();

  useEffect(() => {
    getArtist();
  }, []);
  useEffect(() => {
    getAlbums();
  }, []);
  useEffect(() => {
    getProductDetails(id);
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
        <div className="glav_div1">
          <div className="logo"></div>
          <h2 className="edit_h5" variant="h4">
            Изменения продукта
          </h2>
          <input
            className="edit_kar1"
            sx={{ marginBottom: "10px" }}
            fullWidth
            id="outlined-basic"
            label="title"
            variant="outlined"
            size="small"
            name="image"
            onChange={handleInp}
            value={product.title || ""}
          />

          {/* <input
            className="edit_nazvanie1"
            sx={{ marginBottom: "10px" }}
            fullWidth
            id="outlined-basic"
            label="artist"
            variant="outlined"
            size="small"
            name="name"
            onChange={handleInp}
            value={product.artist || ""}
          /> */}

          <select name="artist" id="">
            {albums ? (
              albums.map((elem) => (
                <option key={elem.id} value={elem.id} onChange={handleInp}>
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
            fullWidth
            id="outlined-basic"
            label="genre"
            variant="outlined"
            size="small"
            name="description"
            onChange={handleInp}
            value={product.genre || ""}
          />

          <button
            className="edit_btn1"
            onClick={() => saveEditedProduct(product)}
            fullWidth
            variant="outlined"
          >
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
};

export default EditSongs;
