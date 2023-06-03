import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import classes from "../style/Main.module.css";
import { useAuth } from "../context/AuthContextProvider";
import { useProducts } from "../context/ProductContextProvider";
import { useDownLoad } from "../context/DownloadContexProvider";
import FreshBlood from "../components/FreshBlood";
import playlist from "../style/PalyListBlock.module.css";
import ArtistCard from "./ArtistCard";
import CardComponent from "./CardComponent";
import PlaylistComponent from "./PlaylistComponent";

const Feed = () => {
  // const { getDownload, getFavorites } = useDownLoad();
  // useEffect(() => {
  //   getDownload();
  // }, []);
  // useEffect(() => {
  //   getFavorites();
  // }, []);

  const { id } = useParams();

  const { getArtist, getAlbums, getPlaylist } = useProducts([]);

  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const currentHour = new Date().getHours();
    let newGreeting = "";
    if (currentHour < 12) {
      newGreeting = `Good morining USER`;
    } else if (currentHour < 18) {
      newGreeting = `Good evening  User`;
    } else {
      newGreeting = `Good night`;
    }
    setGreeting(newGreeting);
  }, []);

  useEffect(() => {
    getArtist();
    getAlbums();
    getPlaylist();
  }, []);

  // console.log(artist);

  // console.log(artist);

  return (
    <MainLayout>
      <div className={playlist.rightPart}>
        <div className={classes.contentWrapper}>
          <FreshBlood />
          <h2>{greeting}</h2>
          <ArtistCard />
          <div className={classes.ablumsSection}>
            <h2>Made for you</h2>
          </div>
          <CardComponent />
          <div className={classes.ablumsSection}>
            <h2>Made by you</h2>
          </div>
          <PlaylistComponent />
        </div>
      </div>
    </MainLayout>
  );
};

export default Feed;
