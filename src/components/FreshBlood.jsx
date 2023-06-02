import React from "react";
import img from "../assets/freshBlood.png";
import classes from "../style/FreshBlood.module.css";

const FreshBlood = () => {
  return (
    <div className={classes.container}>
      <img
        className={classes.img}
        src={img}
        alt=""
        style={{ maxWidth: "200px" }}
      />
      <h2 style={{ left: "50px" }}>WHYTDAN</h2>
    </div>
  );
};

export default FreshBlood;
