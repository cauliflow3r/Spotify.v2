import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "../../../style/Main.module.css";

const ArtistsBlock = ({ artists }) => {
  const navigate = useNavigate();

  const navigateToArtist = (artistId) => () =>
    navigate(`/artist-page/${artistId}`);

  return (
    <div className={classes.artistBox}>
      {artists.map((artist) => (
        <div
          className={classes.preview}
          key={artist.id}
          onClick={navigateToArtist(artist.id)}
        >
          <div className={classes.cardPreview}>
            <img src={artist.photo} alt="Artist Cover Img" />
            <p>{artist.full_name}</p>
            <div className={classes.icon_play}>
              <div className={classes.circle_play}>
                <div className={classes.triangle_play}></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArtistsBlock;
