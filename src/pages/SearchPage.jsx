import React, { useContext, useEffect } from "react";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
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
    artists.map((a) => a.songs.map((e) => e.artist.map((art) => art)))
  );
  // console.log("songs", songs);
  // console.log("albums", albums);

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
                      <div
                        className={classes.preview}
                        key={artist.id}
                        onClick={() => navigate(`/artist-page/${artist.id}`)}
                      >
                        <div className={classes.cardPreview}>
                          <img src={artist.photo} alt="" />
                          <p>{artist.full_name}</p>
                          <div className={classes.icon_play}>
                            <div className={classes.circle_play}>
                              <div className={classes.triangle_play}></div>
                            </div>
                          </div>
                        </div>
                      </div>
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
                      <Link
                        to={`/album-page/${album.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <div
                          className={classes.playlist}
                          key={album.id}
                          onClick={() => navigate(`/album-page/${album.id}`)}
                        >
                          <div className={classes.card}>
                            <div className={classes.mg_holder}>
                              <img src={album.cover_photo} alt="image" />
                            </div>
                            <div className={classes.text}>
                              <h2>{album.title}</h2>
                              <p>{album.id}</p>
                            </div>
                            <div className={classes.play_icon}>
                              <div className={classes.circle}>
                                <div className={classes.triangle}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
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
