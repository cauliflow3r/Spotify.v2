import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import classes from "../style/Main.module.css";
import downloads from "../style/Download.module.css";
import play from "../assets/Play.svg";
import download from "../assets/Line=empty, Name=download.svg";
import search from "../assets/Line=bold, Name=search.svg";
import drop from "../assets/fi-ss-caret-down.svg";
import clock from "../assets/Line=Clock.svg";
import song from "../assets/Rectangle 236.svg";
import { useProducts } from "../context/ProductContextProvider";

const AlbumPage = () => {
  const navigate = useNavigate();
  const { getArtist, artist, setArtist } = useProducts([]);

  useEffect(() => {
    getArtist();
  }, []);

  return (
    <MainLayout>
      <div className={classes.container}>
        <div className={classes.contentWrapper}>
          <div>
            <div className={downloads.download_container}>
              <div className={downloads.TopInfo}>
                <div className={downloads.TopInfo_Left}>
                  <img src={download} alt="" />
                </div>
                <div className={downloads.TopInfo_Right}>
                  <h5>Плейлист</h5>
                  <h2>Download</h2>
                  <h5>User : Колво Треков в плейлисте </h5>
                </div>
              </div>
              <div className={downloads.track_block}>
                <div className={downloads.track_props}>
                  <div className={downloads.track_props_left}>
                    <img src={play} alt="" />
                    {/* <img src={download} alt="" /> */}
                  </div>
                  <div className={downloads.track_props_right}>
                    <img src={search} alt="" style={{ width: "25px" }} />
                    <span>Дата добавления </span>
                    <img src={drop} alt="" />
                  </div>
                </div>
                <div className={downloads.track_line_head}>
                  <div className={downloads.container_grid}>
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
                    <div>
                      <img src={download} alt="" />
                    </div>
                  </div>
                  <div className={downloads.track_line}>
                    <div>
                      {" "}
                      <img src={play} alt="" />
                    </div>
                    <div className={downloads.track_line_section}>
                      <img src={song} alt="" />
                      <div className={downloads.track_line_section_name}>
                        <h4> Kill Bill </h4>
                        <h5> SZA </h5>
                      </div>
                    </div>
                    <div>SOS</div>
                    <div>1 day ago</div>
                    <div>3:22</div>
                    <div>
                      <img src={download} alt="" />
                    </div>
                  </div>
                  <div className={downloads.track_line}>
                    <div>
                      {" "}
                      <img src={play} alt="" />
                    </div>
                    <div className={downloads.track_line_section}>
                      <img src={song} alt="" />
                      <div className={downloads.track_line_section_name}>
                        <h4> Kill Bill </h4>
                        <h5> SZA </h5>
                      </div>
                    </div>
                    <div>SOS</div>
                    <div>1 day ago</div>
                    <div>3:22</div>
                    <div>
                      <img src={download} alt="" />
                    </div>
                  </div>
                  <div className={downloads.track_line}>
                    <div>
                      {" "}
                      <img src={play} alt="" />
                    </div>
                    <div className={downloads.track_line_section}>
                      <img src={song} alt="" />
                      <div className={downloads.track_line_section_name}>
                        <h4> Kill Bill </h4>
                        <h5> SZA </h5>
                      </div>
                    </div>
                    <div>SOS</div>
                    <div>1 day ago</div>
                    <div>3:22</div>
                    <div>
                      <img src={download} alt="" />
                    </div>
                  </div>
                  <div className={downloads.track_line}>
                    <div>
                      {" "}
                      <img src={play} alt="" />
                    </div>
                    <div className={downloads.track_line_section}>
                      <img src={song} alt="" />
                      <div className={downloads.track_line_section_name}>
                        <h4> Kill Bill </h4>
                        <h5> SZA </h5>
                      </div>
                    </div>
                    <div>SOS</div>
                    <div>1 day ago</div>
                    <div>3:22</div>
                    <div>
                      <img src={download} alt="" />
                    </div>
                  </div>
                  <div className={downloads.track_line}>
                    <div>
                      {" "}
                      <img src={play} alt="" />
                    </div>
                    <div className={downloads.track_line_section}>
                      <img src={song} alt="" />
                      <div className={downloads.track_line_section_name}>
                        <h4> Kill Bill </h4>
                        <h5> SZA </h5>
                      </div>
                    </div>
                    <div>SOS</div>
                    <div>1 day ago</div>
                    <div>3:22</div>
                    <div>
                      <img src={download} alt="" />
                    </div>
                  </div>
                  <div className={downloads.track_line}>
                    <div>
                      {" "}
                      <img src={play} alt="" />
                    </div>
                    <div className={downloads.track_line_section}>
                      <img src={song} alt="" />
                      <div className={downloads.track_line_section_name}>
                        <h4> Kill Bill </h4>
                        <h5> SZA </h5>
                      </div>
                    </div>
                    <div>SOS</div>
                    <div>1 day ago</div>
                    <div>3:22</div>
                    <div>
                      <img src={download} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <p>HOMEPAGE</p>
          <span>peepeefghvbjknml,;kmjnbhgvcfpoopoo</span>
          <button onClick={() => navigate("/album-page")}>fgvhbjn</button>

          <button onClick={() => navigate("/artist-page")}>vhbjn</button> */}
        </div>
      </div>
      <button onClick={() => navigate("/")}>BIGBUTTON</button>
    </MainLayout>
  );
};

export default AlbumPage;
