import React from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import classes from "../style/Main.module.css";
import { useAuth } from "../context/AuthContextProvider";

const Homepage = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  console.log(currentUser);

  return (
    <MainLayout>
      <div className={classes.container}>
        <div className={classes.contentWrapper}>
          <p>HI there, {currentUser}</p>
          <span>peepeepoopoo</span>
          <button onClick={() => navigate("/album-page")}>album</button>

          <button onClick={() => navigate("/artist-page")}>ArtistPage</button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Homepage;
