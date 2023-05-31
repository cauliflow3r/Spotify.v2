import heart from "../assets/Vector.svg";
import classes from "../style/MuPlayList.module.css";
import play_btn from "../assets/Play.svg";
import download from "../assets/Line=empty, Name=download.svg";
import undownload from "../assets/UN_Line=empty, Name=download.svg";
import search from "../assets/Line=bold, Name=search.svg";
import drop from "../assets/fi-ss-caret-down.svg";
import clock from "../assets/Line=Clock.svg";
import MainLayout from "../layouts/MainLayout/MainLayout";
import { useEffect } from "react";
import { songsContext } from "../context/SongsContextProvider";
import like_song from "../assets/like_song_icon.svg";
import { useDownLoad } from "../context/DownloadContexProvider";
// import download from "../assets/like_song_icon.svg";

const PlayList = () => {
  // ! downloads
  const { getDownload, AddDownload, getFavorites, favorites, checkTracksDown } =
    useDownLoad();

  // console.log(favorites);

  useEffect(() => {
    getFavorites();
  }, []);
  useEffect(() => {
    getDownload();
  }, []);
  // !downloads

  return (
    <MainLayout>
      <div>
        <div className={classes.TopInfo}>
          <div className={classes.TopInfo_Left}>
            <img src={heart} alt="" />
          </div>
          <div className={classes.TopInfo_Right}>
            <h5>Плейлист</h5>
            <h2>Любимые треки</h2>
            <h5>User : Кол-во треков {favorites.tracks.length}</h5>
          </div>
        </div>
        <div className={classes.track_block}>
          <div className={classes.track_props}>
            <div className={classes.track_props_left}>
              <img src={play_btn} alt="" />
              <img src={download} alt="" />
            </div>
            <div className={classes.track_props_right}>
              <img src={search} alt="" style={{ width: "25px" }} />
              <span>Дата добавления </span>
              <img src={drop} alt="" />
            </div>
          </div>
          <div className={classes.track_line_head}>
            <div className={classes.container_grid}>
              <div className={classes.number}>
                <h4>#</h4>
              </div>
              <div>
                <h4>Name</h4>
              </div>
              <div>
                <h4>Album</h4>
              </div>
              <div>
                <h4>Date </h4>
              </div>
              <div>
                <img src={clock} alt="" />
              </div>
              <div className={classes.number}>
                <img src={download} alt="" />
              </div>
              <div className={classes.number}>
                <img src={like_song} alt="" />
              </div>
            </div>
            {favorites.tracks.map((elem, index) => {
              console.log(elem.id);
              return (
                <div className={classes.track_line}>
                  <div>
                    {" "}
                    <img src={play_btn} alt="" />
                  </div>
                  <div className={classes.track_line_section}>
                    <img src={elem.cover_photo} width={48} alt="" />
                    <div className={classes.track_line_section_name}>
                      <h4> {elem.title} </h4>
                      <h5> {elem.artist[1]} </h5>
                    </div>
                  </div>
                  <div className={classes.album}>{elem.album}</div>
                  <div className={classes.dateAdd}>1 day ago</div>
                  <div className={classes.time}>3:22</div>
                  <div
                    className={classes.time}
                    onClick={() => {
                      AddDownload(elem);
                    }}
                  >
                    {checkTracksDown(elem.id) ? (
                      <img src={undownload} alt="" />
                    ) : (
                      <img src={download} alt="" />
                    )}
                  </div>
                  <div className={classes.favorites}>
                    <img src={like_song} alt="" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div></div>
      </div>
    </MainLayout>
  );
};

export default PlayList;
