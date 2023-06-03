import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "../../../style/Main.module.css";

const AlbumsBlock = ({ albums }) => {
  const navigate = useNavigate();

  const navigateToAlbum = (albumId) => () => navigate(`/album-page/${albumId}`);

  return (
    <div className={classes.playlistBox}>
      {albums.map((album) => (
        <div
          className={classes.playlist}
          key={album.id}
          onClick={navigateToAlbum(album.id)}
        >
          <div className={classes.card}>
            <div className={classes.mg_holder}>
              <img src={album.cover_photo} alt="image" />
            </div>
            <div className={classes.text}>
              <h2>{album.title}</h2>
              <p>{album.release}</p>
            </div>
            <div className={classes.play_icon}>
              <div className={classes.circle}>
                <div className={classes.triangle}></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AlbumsBlock;
