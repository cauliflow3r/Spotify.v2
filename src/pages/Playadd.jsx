import React from "react";
import { useProducts } from "../context/ProductContextProvider";

const Playadd = () => {
  const { title, setTitle, description, setDescription, postPlaylist } =
    useProducts();
  return (
    <div>
      <input
        placeholder="title"
        value={title}
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        value={description}
        placeholder="description"
        type="des"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button onClick={postPlaylist}>add</button>
    </div>
  );
};

export default Playadd;
