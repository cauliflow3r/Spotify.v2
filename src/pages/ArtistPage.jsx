import React from "react";
import MainLayout from "../layouts/MainLayout/MainLayout";
import classes from "../style/Main.module.css";
import { useNavigate } from "react-router-dom";

const ArtistPage = () => {
  const navigate = useNavigate();
  return (
    <MainLayout>
      <div className={classes.container}>
        <div className={classes.contentWrapper}>
          <p>HOMEPAGE</p>
          <span>peepeefghvbjknml,;kmjnbhgvcfpoopoo</span>
          <button onClick={() => navigate("/album-page")}>fgvhbjn</button>

          <button onClick={() => navigate("/artist-page")}>vhbjn</button>
        </div>
      </div>
    </MainLayout>
  );
};

export default ArtistPage;
