import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useNavigate, useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import album from "../style/AlbumPage.module.css";
import play_btn from "../assets/Play.svg";
import download from "../assets/Line=empty, Name=download.svg";
import undownload from "../assets/UN_Line=empty, Name=download.svg";
import search from "../assets/Line=bold, Name=search.svg";
import drop from "../assets/fi-ss-caret-down.svg";
import like_song from "../assets/like_song_icon.svg";
import unlike_song from "../assets/unlike _song_icon.svg";
import { useDownLoad } from "../context/DownloadContexProvider";
import { songsContext } from "../context/SongsContextProvider";
import { useProducts } from "../context/ProductContextProvider";
import Modal from "react-modal";
Modal.setAppElement("#root");

const AlbumPage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);
  const {
    getFavorites,
    AddFavorites,
    AddDownload,
    getDownload,
    checkTracks,
    checkTracksDown,
  } = useDownLoad();

  const [selectedSong, setSelectedSong] = useState(null);

  const { playlistAdd, getPlaylist } = useProducts();
  console.log(playlistAdd);

  //! For modaalwindow
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleIconClick = () => {
    if (isModalOpen) {
      closeModal();
    } else {
      openModal();
    }
  };

  const handleOutsideClick = useCallback(
    (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    },
    [modalRef, closeModal]
  );

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isModalOpen, handleOutsideClick]);

  const { sendRating, setSelectedRating } = useProducts();

  useEffect(() => {
    getFavorites();
  }, []);
  useEffect(() => {
    getDownload();
  }, []);

  // !downloads
  // !----------------
  const { getALbumTrack, AlbumBlock, AlbumInfo, setCurrentTrack } =
    useContext(songsContext);

  // todo -------------------
  const { id } = useParams();
  // console.log("Это будет айди ", id);

  useEffect(() => {
    getALbumTrack(id);
    sendRating(id);
    getPlaylist();
  }, []);

  // todo -------------------

  return (
    <MainLayout>
      <div className={album.container}>
        <div className={album.contentWrapper}>
          <div>
            <div className={album.TopInfo}>
              <div className={album.TopInfo_Left}>
                <img src={AlbumInfo.cover_photo} width={250} alt="" />
              </div>
              <div className={album.TopInfo_Right}>
                <h5>Плейлист</h5>
                <h2>{AlbumInfo.title} </h2>
                <h5>Quantity :{AlbumBlock.length}</h5>
                {/* <div>
                  <div>
                    <div>
                      <input
                        type="radio"
                        id="r-01"
                        name="r"
                        value="1"
                        onChange={(e) => setSelectedRating(e.target.value)}
                        onBlur={() => sendRating(id)}
                      />
                      <label htmlFor="r-01">★</label>
                      <input
                        type="radio"
                        id="r-02"
                        name="r"
                        value="2"
                        onChange={(e) => setSelectedRating(e.target.value)}
                        onBlur={() => sendRating(id)}
                      />
                      <label htmlFor="r-02">★</label>
                      <input
                        type="radio"
                        id="r-03"
                        name="r"
                        value="3"
                        onChange={(e) => setSelectedRating(e.target.value)}
                        onBlur={() => sendRating(id)}
                      />
                      <label htmlFor="r-03">★</label>
                      <input
                        type="radio"
                        id="r-04"
                        name="r"
                        value="4"
                        onChange={(e) => setSelectedRating(e.target.value)}
                        onBlur={() => sendRating(id)}
                      />
                      <label htmlFor="r-04">★</label>
                      <input
                        type="radio"
                        id="r-05"
                        name="r"
                        value="5"
                        onChange={(e) => setSelectedRating(e.target.value)}
                        onBlur={() => sendRating(id)}
                      />
                      <label htmlFor="r-05">★</label>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div className={album.track_block}>
              <div className={album.track_props}>
                <div className={album.track_props_left}>
                  <img src={play_btn} alt="" />
                  <img src={download} alt="" />
                </div>
                <div className={album.track_props_right}>
                  <img src={search} alt="" style={{ width: "25px" }} />
                  <span>Дата добавления </span>
                  <img src={drop} alt="" />
                </div>
              </div>
              <div className={album.track_line_head}>
                <div className={album.container_grid}>
                  <div className={album.number}>
                    <h4>#</h4>
                  </div>
                  <div>
                    <h4>Name</h4>
                  </div>
                  <div>
                    <h4>Album</h4>
                  </div>

                  {/* <div>
                    <h4>Date </h4>
                  </div> */}
                  <div className={album.number}>
                    <img src={download} alt="" />
                  </div>
                  <div className={album.number}>
                    <img src={like_song} alt="" />
                  </div>
                  <div>
                    <img src="" alt="" />
                  </div>
                </div>

                {AlbumBlock.map((elem, index) => {
                  return (
                    <div className={album.track_line} key={elem.id}>
                      <div
                        onClick={() => {
                          setCurrentTrack(index);
                        }}
                      >
                        {" "}
                        <img src={play_btn} alt="" />
                      </div>
                      <div className={album.track_line_section}>
                        <img src={elem.cover_photo} width={48} alt="" />
                        <div className={album.track_line_section_name}>
                          <h4> {elem.title} </h4>
                          <h5> {elem.artist[1]} </h5>
                        </div>
                      </div>
                      <div className={album.album}>{AlbumInfo.title}</div>
                      {/* <div className={album.dateAdd}>1 day ago</div> */}
                      <div
                        className={album.time}
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
                      <div
                        className={album.favorites}
                        onClick={() => {
                          AddFavorites(elem);
                        }}
                      >
                        {checkTracks(elem.id) ? (
                          <img src={unlike_song} alt="" />
                        ) : (
                          <img src={like_song} alt="" />
                        )}
                      </div>
                      <button
                        className={album.add}
                        onClick={() => {
                          setSelectedSong(elem);
                          handleIconClick();
                        }}
                      >
                        Add to playlist
                      </button>
                      <Modal
                        isOpen={isModalOpen}
                        onRequestClose={closeModal}
                        overlayClassName="custom-overlay"
                        className="custom-modal"
                      >
                        <div className={album.modal_window}>
                          <div className={album.textBlock}>
                            <button
                              onClick={() => {
                                navigate("/account");
                              }}
                            >
                              Account
                            </button>
                          </div>
                          <div className={album.textBlock}>
                            <select>
                              {Object.values(playlistAdd).map((playlist) => (
                                <option
                                  key={playlist.id}
                                  value={playlist.title}
                                >
                                  {playlist.title}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </Modal>
                      <button
                        style={{ width: "30px" }}
                        onClick={() => navigate(`/editproduct/${elem.id}`)}
                      >
                        edit
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AlbumPage;
