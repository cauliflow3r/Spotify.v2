import React, { useState } from "react";
import { useProducts } from "../context/ProductContextProvider";

const AddArtist = () => {
  const { newArtist } = useProducts();
  const [fullName, setFyllName] = useState("");
  const [bio, setBio] = useState("");
  console.log(bio);

  function addQAritst() {
    const newFormData = new FormData();
    newFormData.append("full_name", fullName);
    newFormData.append("bio*", bio);
    newArtist(newFormData);
  }

  return (
    <div>
      <input
        type="text"
        placeholder=" full name "
        onChange={(e) => {
          setFyllName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder=" bio"
        onChange={(e) => {
          setBio(e.target.value);
        }}
      />
      <button onClick={addQAritst}>Add Artist </button>
    </div>
  );
};

export default AddArtist;
