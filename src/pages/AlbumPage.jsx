import React from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";

const AlbumPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <MainLayout>
        <button onClick={() => navigate("/")}>BIGBUTTON</button>
      </MainLayout>
    </div>
  );
};

export default AlbumPage;
