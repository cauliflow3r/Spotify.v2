import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import classes from "../style/Main.module.css";
import { useAuth } from "../context/AuthContextProvider";
import { useProducts } from "../context/ProductContextProvider";

const Homepage = () => {
  const navigate = useNavigate();
  const { getArtist, artist, setArtist, getAlbums, albums, setAlbums } =
    useProducts([]);

  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const currentHour = new Date().getHours();
    let newGreeting = "";
    if (currentHour < 12) {
      newGreeting = "Good morining";
    } else if (currentHour < 18) {
      newGreeting = "Good evening";
    } else {
      newGreeting = "Good night";
    }
    setGreeting(newGreeting);
  }, []);

  useEffect(() => {
    getArtist();
    getAlbums();
  }, []);

  // console.log(albums);

  // console.log(artist);

  return (
    <MainLayout>
      <div className={classes.container}>
        <div className={classes.contentWrapper}>
          <h2>{greeting}</h2>
          <div
            className={classes.artistBox}
            onClick={() => navigate("/artist-page")}
          >
            {artist.map((item) => (
              <div className={classes.preview} key={item.id}>
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
          <h2>Made for you</h2>
          <div
            className={classes.playlistBox}
            onClick={() => navigate("/album-page")}
          >
            {albums.map((item) => (
              <div className={classes.playlist} key={item.id}>
                <div className={classes.card}>
                  <div className={classes.mg_holder}>
                    <img src={item.cover_photo} alt="image" />
                  </div>
                  <div className={classes.text}>
                    <h2>{item.title}</h2>
                    <p>{item.id}</p>
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
        </div>
      </div>
    </MainLayout>
  );
};

export default Homepage;
