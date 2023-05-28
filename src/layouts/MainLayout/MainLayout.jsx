import React from "react";
import Player from "../../components/Player";
import Sidebar from "../../components/Sidebar";
import Search from "../../components/Search";

const MainLayout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <Search />
      <Player />
      {children}
    </>
  );
};

export default MainLayout;
