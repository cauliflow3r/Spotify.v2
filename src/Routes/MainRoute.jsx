import React from "react";
import { Route, Routes } from "react-router-dom";
import AlbumPage from "../pages/AlbumPage";
import ArtistPage from "../pages/ArtistPage";
import Homepage from "../pages/Homepage";
import Login from "../pages/Login";
import Registration from "../pages/Registration";

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="album-page" element={<AlbumPage />} />
        <Route path="artist-page" element={<ArtistPage />} />
        <Route path="registration" element={<Registration />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default MainRoute;
