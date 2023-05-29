import React from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import classes from "../style/Main.module.css";

const AlbumPage = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className={classes.container}>
        <div className={classes.contentWrapper}>
          <p>HOMEPAGE</p>
          <span>kmjnbhgvcfpoopoo</span>
          <button onClick={() => navigate("/")}>BIGBUTTON</button>
        </div>
      </div>
    </MainLayout>
  );
};

export default AlbumPage;
