import heart from "../assets/Vector.svg";
import classes from "../style/MuPlayList.module.css";
import play_btn from "../assets/Play.svg";
import download from "../assets/Line=empty, Name=download.svg";
import search from "../assets/Line=bold, Name=search.svg";
import drop from "../assets/fi-ss-caret-down.svg";
import clock from "../assets/Line=Clock.svg";
import song from "../assets/Rectangle 236.svg";
import MainLayout from "../layouts/MainLayout/MainLayout";

const PlayList = () => {
  return (
    <MainLayout>
      <div className={classes.TopInfo}>
        <div className={classes.TopInfo_Left}>
          <img src={heart} alt="" />
        </div>
        <div className={classes.TopInfo_Right}>
          <h5>Плейлист</h5>
          <h2>Любимые треки</h2>
          <h5>User : Колво Треков в плейлисте </h5>
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
            <div>
              <h4>#</h4>
            </div>
            <div>
              <h4>Name</h4>
            </div>
            <div>
              <h4>Album</h4>
            </div>
            <div>
              <h4>Date publick</h4>
            </div>
            <div>
              <img src={clock} alt="" />
            </div>
          </div>
          <div className={classes.track_line}>
            <div>
              {" "}
              <img src={play_btn} alt="" />
            </div>
            <div className={classes.track_line_section}>
              <img src={song} alt="" />
              <div className={classes.track_line_section_name}>
                <h4> Kill Bill </h4>
                <h5> SZA </h5>
              </div>
            </div>
            <div>SOS</div>
            <div>1 day ago</div>
            <div>3:22</div>
          </div>
          <div className={classes.track_line}>
            <div>
              {" "}
              <img src={play_btn} alt="" />
            </div>
            <div className={classes.track_line_section}>
              <img src={song} alt="" />
              <div className={classes.track_line_section_name}>
                <h4> Kill Bill </h4>
                <h5> SZA </h5>
              </div>
            </div>
            <div>SOS</div>
            <div>1 day ago</div>
            <div>3:22</div>
          </div>
          <div className={classes.track_line}>
            <div>
              {" "}
              <img src={play_btn} alt="" />
            </div>
            <div className={classes.track_line_section}>
              <img src={song} alt="" />
              <div className={classes.track_line_section_name}>
                <h4> Kill Bill </h4>
                <h5> SZA </h5>
              </div>
            </div>
            <div>SOS</div>
            <div>1 day ago</div>
            <div>3:22</div>
          </div>
          <div className={classes.track_line}>
            <div>
              {" "}
              <img src={play_btn} alt="" />
            </div>
            <div className={classes.track_line_section}>
              <img src={song} alt="" />
              <div className={classes.track_line_section_name}>
                <h4> Kill Bill </h4>
                <h5> SZA </h5>
              </div>
            </div>
            <div>SOS</div>
            <div>1 day ago</div>
            <div>3:22</div>
          </div>{" "}
          <div className={classes.track_line}>
            <div>
              {" "}
              <img src={play_btn} alt="" />
            </div>
            <div className={classes.track_line_section}>
              <img src={song} alt="" />
              <div className={classes.track_line_section_name}>
                <h4> Kill Bill </h4>
                <h5> SZA </h5>
              </div>
            </div>
            <div>SOS</div>
            <div>1 day ago</div>
            <div>3:22</div>
          </div>
        </div>
      </div>
      <div></div>
    </MainLayout>
  );
};

export default PlayList;
