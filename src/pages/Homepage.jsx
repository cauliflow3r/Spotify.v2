import React from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <MainLayout>
        <span>peepeepoopoo</span>
        <button onClick={() => navigate("/album-page")}>album</button>
        <button onClick={() => navigate("/registration")}>registration</button>
        <button onClick={() => navigate("/login")}>Login</button>
        <button onClick={() => navigate("/artist-page")}>ArtistPage</button>
      </MainLayout>
    </div>
  );
};

export default Homepage;
