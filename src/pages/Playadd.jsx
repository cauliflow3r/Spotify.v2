// import React, { useState } from "react";
// import { useProducts } from "../context/ProductContextProvider";

// const Playadd = () => {
//   const { title, setTitle, description, setDescription, postPlaylist } =
//     useProducts();

//   const [coverPhoto, setCoverPhoto] = useState(null);

//   function addPlayList(e) {
//     e.preventDefault();
//     const playlistForm = new FormData();
//     playlistForm.append("title", title);
//     playlistForm.append("description", description);
//     if (coverPhoto) {
//       playlistForm.append("cover_photo", e.target.files[0]);
//     }
//     postPlaylist(playlistForm);
//   }

//   return (
//     <div>
//       <form enctype="multipart/form-data">
//         <input
//           placeholder="title"
//           value={title}
//           type="text"
//           onChange={(e) => {
//             setTitle(e.target.value);
//           }}
//         />
//         <input
//           value={description}
//           placeholder="description"
//           type="text"
//           onChange={(e) => {
//             setDescription(e.target.value);
//           }}
//         />
//         <input
//           value={coverPhoto}
//           placeholder="photo"
//           type="file"
//           onChange={(e) => {
//             setCoverPhoto(e.target.value);
//           }}
//         />
//         <button onClick={addPlayList}>add</button>
//       </form>
//     </div>
//   );
// };

// export default Playadd;

import React, { useState } from "react";
import { useProducts } from "../context/ProductContextProvider";
import "../style/AddArtist.css";

const Playadd = () => {
  const { title, setTitle, description, setDescription, postPlaylist } =
    useProducts();

  const [coverPhoto, setCoverPhoto] = useState(null);

  function addPlayList(e) {
    e.preventDefault();
    const playlistForm = new FormData();
    playlistForm.append("title", title);
    playlistForm.append("description", description);
    if (coverPhoto) {
      playlistForm.append("cover_photo", coverPhoto);
    }
    postPlaylist(playlistForm);
  }

  return (
    <div className="glav_div">
      <img
        id="img1"
        width={300}
        src="	http://localhost:3000/static/media/Spotify_Logo_CMYK_Black.e219951301ddf739fe9e.png"
        alt=""
      />
      <form encType="multipart/form-data" className="div2">
        <input
          className="edit_kar"
          placeholder="title"
          value={title}
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          className="edit_kar"
          value={description}
          placeholder="description"
          type="text"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <input
          className="edit_kar"
          placeholder="photo"
          type="file"
          onChange={(e) => {
            setCoverPhoto(e.target.files[0]);
          }}
        />

        <button
          onClick={addPlayList}
          className="glav_div"
          style={{ margin: "0" }}
        >
          add
        </button>
      </form>
    </div>
  );
};

export default Playadd;
