import React from "react";
import { Route, Routes } from "react-router-dom";
import AlbumPage from "../pages/AlbumPage";
import ArtistPage from "../pages/ArtistPage";
import Homepage from "../pages/Homepage";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import PlayList from "../pages/PlayList";
import Download from "../pages/Downloand";
import AddProduct from "../components/AddProduct";
import EditProduct from "../components/EditProduct";
import ResetPassword from "../pages/ResetPassword";
import Profile from "../pages/Profile";
import Account from "../pages/Account";
import SearchPage from "../pages/SearchPage";

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/editproduct/:id" element={<EditProduct />} />
        <Route path="album-page" element={<AlbumPage />} />
        <Route path="artist-page" element={<ArtistPage />} />
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
      </Routes>
    </div>
  );
};

export default MainRoute;
