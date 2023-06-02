import React, { useState } from "react";
import { useProducts } from "../context/ProductContextProvider";

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
    <div>
      <input
        type="text"
        placeholder="full_name "
        onChange={(e) => {
          serFullName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="bio "
        onChange={(e) => {
          setBio(e.target.value);
        }}
      />
      <button onClick={hadleAdd}>Add artist</button>
    </div>
  );
};

export default AddArtist;
