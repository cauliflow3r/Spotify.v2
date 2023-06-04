import React, { useState } from "react";
import { useProducts } from "../context/ProductContextProvider";
import "../style/AddArtist.css";

const AddArtist = () => {
  const { AddArtist } = useProducts();
  const [fullName, serFullName] = useState("");
  const [bio, setBio] = useState("");
  console.log(bio);

  function hadleAdd() {
    const newArtist = new FormData();
    newArtist.append("full_name", fullName);
    newArtist.append("bio", bio);
    AddArtist(newArtist);
  }
  return (
    <>
      <div className="glav_div">
        <img
          id="img1"
          width={300}
          src="	http://localhost:3000/static/media/Spotify_Logo_CMYK_Black.e219951301ddf739fe9e.png"
          alt=""
        />
        <div>
          <h2 className="edit_h4" variant="h4">
            New Artist
          </h2>
        </div>
        <div className="div2">
          <h2>Name</h2>
          <input
            className="edit_kar"
            type="text"
            placeholder="Name "
            onChange={(e) => {
              serFullName(e.target.value);
            }}
          />
          <h2>Bio</h2>
          <input
            className="edit_kar"
            type="text"
            placeholder="bio "
            onChange={(e) => {
              setBio(e.target.value);
            }}
          />
        </div>
        <button className="edit_btn" onClick={hadleAdd}>
          Add artist
        </button>
      </div>
    </>
  );
};

export default AddArtist;
