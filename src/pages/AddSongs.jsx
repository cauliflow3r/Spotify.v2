import React, { useEffect, useState } from "react";
import { useProducts } from "../context/ProductContextProvider";
import "../style/AddSongs.module.css";

const AddSongs = () => {
  const { addProduct, artist, getArtist, getAlbums, albums } = useProducts();

  const [album, setAlbum] = useState(0);
  //   const [artists, setArtists] = useState(0);
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [genre, setGenre] = useState("");

  function handleAdd() {
    const newSong = new FormData();
    newSong.append("title", title);
    if (file) {
      newSong.append("audio_file", file);
    }
    newSong.append("album", album);
    newSong.append("genre", genre);
    // newSong.append("artist", artists);
    console.log(newSong);

    addProduct(newSong);
  }
  useEffect(() => {
    getArtist();
  }, []);
  useEffect(() => {
    getAlbums();
  }, []);

  return (
    <>
      <div>
        <div className="glav_div">
          <div>
            <h2 className="edit_h4" variant="h4">
              New Song
            </h2>
          </div>
          <div>
            <input
              className="edit_kar"
              sx={{ marginBottom: "10px" }}
              id="outlined-basic"
              placeholder="song"
              variant="outlined"
              size="small"
              name="audio_file"
              type="file"
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
            />
          </div>
          {/* <select
            name="artist"
            onChange={(e) => {
              setArtists(e.target.value);
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
          </select> */}
          <div>
            <div>
              <input
                className="edit_kar"
                sx={{ marginBottom: "10px" }}
                id="outlined-basic"
                placeholder="genre"
                variant="outlined"
                size="small"
                name="genre"
                onChange={(e) => {
                  setGenre(e.target.value);
                }}
              />
            </div>
            <input
              className="edit_nazvanie"
              sx={{ marginBottom: "10px" }}
              id="outlined-basic"
              placeholder="title"
              variant="outlined"
              size="small"
              name="title"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div></div>

          <select
            name="artist"
            id=""
            onChange={(e) => {
              setAlbum(e.target.value);
            }}
          >
            {albums ? (
              albums.map((elem) => (
                <option key={elem.id} value={elem.id}>
                  {elem.title}
                </option>
              ))
            ) : (
              <option value="">artist </option>
            )}
          </select>
          <div>
            <button className="edit_btn" onClick={handleAdd} variant="outlined">
              New song
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddSongs;
