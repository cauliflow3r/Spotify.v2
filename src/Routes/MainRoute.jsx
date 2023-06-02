import React from "react";
import { Route, Routes } from "react-router-dom";
import AlbumPage from "../pages/AlbumPage";
import ArtistPage from "../pages/ArtistPage";
import Homepage from "../pages/Homepage";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import PlayList from "../pages/PlayList";
import Download from "../pages/Downloand";
import ResetPassword from "../pages/ResetPassword";
import Profile from "../pages/Profile";
import Account from "../pages/Account";
import SearchPage from "../pages/SearchPage";
import AddArtist from "../pages/AddArtist";
import AddAlbum from "../pages/AddAlbum";

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="album-page/:id" element={<AlbumPage />} />
        <Route path="artist-page/:id" element={<ArtistPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="playlist" element={<PlayList />} />
        <Route path="download" element={<Download />} />
        <Route path="registration" element={<Registration />} />
        <Route path="reset" element={<ResetPassword />} />
        <Route path="profile" element={<Profile />} />
        <Route path="account" element={<Account />} />
        <Route path="login" element={<Login />} />
        <Route path="addart" element={<AddArtist />} />
        <Route path="addalbum" element={<AddAlbum />} />
      </Routes>
    </div>
  );
};

export default MainRoute;
