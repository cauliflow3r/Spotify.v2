import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import classes from "../style/Main.module.css";
import { useProducts } from "../context/ProductContextProvider";
import CardComponent from "./CardComponent";
import ArtistCard from "./ArtistCard";

const Homepage = () => {
  // const { getDownload, getFavorites } = useDownLoad();
  // useEffect(() => {
  //   getDownload();
  // }, []);
  // useEffect(() => {
  //   getFavorites();
  // }, []);
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

  return (
    <MainLayout>
      <div className={classes.container}>
        <div className={classes.contentWrapper}>
          <h2>{greeting}</h2>
          <ArtistCard />
          <div className={classes.ablumsSection}>
            <h2>Made for you</h2>
          </div>
          <CardComponent />
        </div>
      </div>
    </MainLayout>
  );
};

export default Homepage;
