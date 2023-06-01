import React, { useContext, useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import classes from "../style/Main.module.css";
import { useProducts } from "../context/ProductContextProvider";

const SearchPage = () => {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  const { getArtist } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getArtist();
  }, [searchParams]);

  return (
    <MainLayout>
      <div className={classes.container}>
        <div className={classes.contentWrapper}>
          <div className={classes.genreComponent}>
            <div
              className={classes.genreBox}
              style={{ backgroundColor: randomColor }}
            >
              esrgat
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SearchPage;
