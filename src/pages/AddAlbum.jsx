import React, { useEffect, useState } from "react";
import { useProducts } from "../context/ProductContextProvider";
import { api } from "../api/api";
import { useFeedDataLists } from "../context/FeedContextProvider/FeedContextProvider";

const AddAlbum = () => {
  const { artists: artists2 } = useFeedDataLists();
  const [title, setTitile] = useState("");
  const [descr, setDescr] = useState("");
  const [artist, setArtist] = useState("");

  useEffect(() => {
    api.getArtist();
  }, []);

  function handleAddAlbum() {
    let newAlbum = new FormData();
    newAlbum.append("title", title);
    newAlbum.append("artist", artist);
    newAlbum.append("description", descr);
    console.log(newAlbum);
    // Call your API function here
    // api.addAlbum(newAlbum);
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
        {artists2 ? (
          artists2.map((elem) => (
            <option key={elem.id} value={elem.id}>
              {elem.full_name}
            </option>
          ))
        ) : (
          <option value="">artist</option>
        )}
      </select>
      <input
        type="text"
        placeholder="description"
        onChange={(e) => {
          setDescr(e.target.value);
        }}
      />
      <button onClick={handleAddAlbum}>Add Album</button>
    </div>
  );
};

export default AddAlbum;
