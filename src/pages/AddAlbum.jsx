import React, { useContext, useEffect, useState } from "react";
import { useProducts } from "../context/ProductContextProvider";
import "../style/AddAlbum.css";
import { api } from "../api/api";
import { Link } from "react-router-dom";

const AddAlbum = () => {
  const { AddAlbum } = useProducts();
  const [title, setTitile] = useState("");
  const [descr, setDescr] = useState("");
  const [artists, setArtists] = useState([]);
  const [artistId, setArtistId] = useState(0);

  useEffect(() => {
    // api.getArtists();
    getArtistsResponse();
  }, []);

  const getArtistsResponse = async () => {
    const response = await api.getArtists();
    setArtists(response);
  };

  function handleAddAlbum() {
    let newAlbum = new FormData();
    newAlbum.append("title", title);
    newAlbum.append("artist", artistId);
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
        <div>
          <h2 className="edit_h4" variant="h4">
            New Album
          </h2>
        </div>
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
              setArtistId(e.target.value);
            }}
          >
            {artists.length > 0 ? (
              artists.map((elem) => (
                <option key={elem.id} value={elem.id}>
                  {elem.full_name}
                </option>
              ))
            ) : (
              <option value="">artist </option>
            )}
          </select>
          <Link to={"/addproduct"}>
            <button className="edit_btn" onClick={handleAddAlbum}>
              Add Album
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AddAlbum;
