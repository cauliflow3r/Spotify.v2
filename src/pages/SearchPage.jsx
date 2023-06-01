import React, { useContext, useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import classes from "../style/Main.module.css";
import { useProducts } from "../context/ProductContextProvider";

const SearchPage = () => {
  const {
    inputValue,
    searchParams,
    setSearchParams,
    search,
    songs,
    artists,
    albums,
    albumsSearch,
    setSongs,
    setArtists,
    setAlbumsSearch,
  } = useProducts();
  const navigate = useNavigate();

  console.log(
    "artist.albums :",
    artists.map((a) => a.albums)
  );
  console.log("songs", songs);
  console.log("albums", albums);

  useEffect(() => {
    const query = searchParams.get("query");
    search(query, "songs", setSongs);
    search(query, "artists", setArtists);
    search(query, "albums", setAlbumsSearch);
  }, [searchParams]);

  return (
    <MainLayout>
      <div className={classes.container}>
        <div className={classes.contentWrapper}>
          <div className={classes.genreComponent}>
            <div className={classes.genreBox}></div>
          </div>
          <div>
            {/* Отображение результатов поиска */}
            {songs.length > 0 && (
              <div>
                <h2>Songs</h2>
                <ul>
                  {songs
                    .filter(
                      (song) =>
                        song.artist[1] &&
                        song.title
                          .toLowerCase()
                          .includes(inputValue.toLowerCase())
                    )
                    .map((song) => (
                      <li key={song.id}>{song.title}</li>
                    ))}
                </ul>
              </div>
            )}

            {artists.length > 0 && (
              <div>
                <h2>Artists</h2>
                <ul>
                  {artists
                    .filter((artist) =>
                      artist.full_name
                        .toLowerCase()
                        .includes(inputValue.toLowerCase())
                    )
                    .map((artist) => (
                      <li key={artist.id}>{artist.full_name}</li>
                    ))}
                </ul>
              </div>
            )}

            {albums.length > 0 && (
              <div>
                <h2>Albums</h2>
                <ul>
                  {albums
                    .filter((album) =>
                      album.title
                        .toLowerCase()
                        .includes(inputValue.toLowerCase())
                    )
                    .map((album) => (
                      <li key={album.id}>{album.title}</li>
                    ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SearchPage;
