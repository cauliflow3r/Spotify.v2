import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import classes from "../style/Main.module.css";
import { useAuth } from "../context/AuthContextProvider";
import { useProducts } from "../context/ProductContextProvider";

const Homepage = () => {
  const navigate = useNavigate();
  const { getArtist, artist, setArtist } = useProducts([]);

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
  }, []);

  console.log(artist.albums);

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
          <div
            className={classes.playlistBox}
            onClick={() => navigate("/album-page")}
          >
            <div className={classes.playlist}>
              <h2>Made for you</h2>
              <div className={classes.card}>
                <div className={classes.mg_holder}>
                  <img
                    src="https://static01.nyt.com/images/2022/06/28/arts/28CONAN-GRAY1/28CONAN-GRAY1-superJumbo.jpg"
                    alt="image"
                  />
                </div>
                <div className={classes.text}>
                  <h2>teen beats</h2>
                  <p>Conan Gray has entered the upside down</p>
                </div>
                <div className={classes.play_icon}>
                  <div className={classes.circle}>
                    <div className={classes.triangle}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Homepage;
