import React, { useEffect, useState } from "react";
import { useProducts } from "../context/ProductContextProvider";
import "../style/AddAlbum.css";
import { api } from "../api/api";

const AddAlbum = () => {
  const { getArtist, artist, AddAlbum } = useProducts();
  const [title, setTitile] = useState("");
  const [descr, setDescr] = useState("");
  const [artists, setArtist] = useState(1);

  useEffect(() => {
    api.getArtist();
  }, []);

  function handleAddAlbum() {
    let newAlbum = new FormData();
    newAlbum.append("title", title);
    newAlbum.append("artist", artists);
    newAlbum.append("description", descr);
    console.log(newAlbum);
    AddAlbum(newAlbum);
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
        <div className="div2">
          <h2>Title</h2>
          <input
            className="edit_kar"
            type="text"
            placeholder="title"
            onChange={(e) => {
              setTitile(e.target.value);
            }}
          />
          <h2>description</h2>
          <input
            className="edit_kar"
            type="text"
            placeholder="description"
            onChange={(e) => {
              setDescr(e.target.value);
            }}
          />
          <h2>Artist</h2>
          <select
            name="artist"
            id=""
            onChange={(e) => {
              setArtist(e.target.value);
            }}
          >
            {artist ? (
              artist.map((elem) => (
                <option key={elem.id} value={elem.id}>
                  {elem.full_name}
                </option>
              ))
            ) : (
              <option value="">artist </option>
            )}
          </select>

          <button className="edit_btn" onClick={handleAddAlbum}>
            Add Album
          </button>
        </div>
      </div>
    </>
  );
};

export default AddAlbum;
