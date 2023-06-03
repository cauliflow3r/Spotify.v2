import React from "react";
import classes from "../style/Main.module.css";
import { useProducts } from "../context/ProductContextProvider";
import { useNavigate } from "react-router-dom";

const ArtistCard = () => {
  const navigate = useNavigate();
  const { artist } = useProducts([]);

  return (
    <>
      <div className={classes.artistBox}>
        {artist.map((item) => (
          <div
            className={classes.preview}
            key={item.id}
            onClick={() => navigate(`/artist-page/${item.id}`)}
          >
            <div className={classes.cardPreview}>
              <img src={item.photo} alt="" />
              <p>{item.full_name}</p>
              <div className={classes.icon_play}>
                <div className={classes.circle_play}>
                  <div className={classes.triangle_play}></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ArtistCard;
