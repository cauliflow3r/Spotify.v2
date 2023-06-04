import React, { useEffect, useState } from "react";
import { useProducts } from "../context/ProductContextProvider";
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
    <div>
      <input
        type="text"
        placeholder="title"
        onChange={(e) => {
          setTitile(e.target.value);
        }}
      />
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
      <input
        type="text"
        placeholder="desctiption"
        onChange={(e) => {
          setDescr(e.target.value);
        }}
      />
      <button onClick={handleAddAlbum}>Add Album</button>
    </div>
  );
};

export default AddAlbum;
