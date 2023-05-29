import React from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import classes from "../style/Main.module.css";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className={classes.container}>
        <div className={classes.contentWrapper}>
          <p>HOMEPAGE</p>
          <span>peepeepoopoo</span>
          <button onClick={() => navigate("/album-page")}>album</button>

          <button onClick={() => navigate("/artist-page")}>ArtistPage</button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Homepage;
