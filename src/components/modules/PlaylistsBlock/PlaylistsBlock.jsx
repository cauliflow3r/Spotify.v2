import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "../../../style/Main.module.css";

const PlaylistsBlock = ({ playlists }) => {
  const navigate = useNavigate();

  const navigateToPlaylist = (playlistId) => () =>
    navigate(`/playlist-page/${playlistId}`);

  return (
    <div className={classes.playlistBox}>
      {playlists.map((playlist) => (
        <div
          className={classes.playlist}
          key={playlist.id}
          onClick={navigateToPlaylist(playlist.id)}
        >
          <div className={classes.card}>
            <div className={classes.mg_holder}>
              <img src={playlist.cover_photo} alt="image" />
            </div>
            <div className={classes.text}>
              <h2>{playlist.title}</h2>
              <p>{playlist.release}</p>
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

export default PlaylistsBlock;
