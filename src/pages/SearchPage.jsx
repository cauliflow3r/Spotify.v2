import React, { useContext, useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import classes from "../style/Main.module.css";
import { useProducts } from "../context/ProductContextProvider";

const SearchPage = () => {
  const {
    searchParams,
    setSearchParams,
    search,
    songs,
    artists,
    albums,
    setSongs,
    setArtists,
    setAlbumsSearch,
  } = useProducts();
  const navigate = useNavigate();

  useEffect(() => {
    // Получение значения query из параметров поиска
    const query = searchParams.get("query");

    // Выполнение поиска и установка результатов в состояние
    search(query, "songs", setSongs);
    search(query, "artists", setArtists);
    search(query, "albums", setAlbumsSearch);
  }, [searchParams, search, setSongs, setArtists, setAlbumsSearch]);

  return (
    <MainLayout>
      <div className={classes.container}>
        <div className={classes.contentWrapper}>
          <div className={classes.genreComponent}>
            <div className={classes.genreBox}>esrgat</div>
          </div>
          <div>
            {/* Отображение результатов поиска */}
            <h2>Songs</h2>
            <ul>
              {songs.map((song) => (
                <li key={song.id}>{song.title}</li>
              ))}
            </ul>
            <h2>Artists</h2>
            <ul>
              {artists.map((artist) => (
                <li key={artist.id}>{artist.name}</li>
              ))}
            </ul>
            <h2>Albums</h2>
            <ul>
              {albums.map((album) => (
                <li key={album.id}>{album.title}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SearchPage;
