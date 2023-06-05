import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import classes from "./TrackRow.module.css";
import play_btn from "../../../assets/Play.svg";
import undownload from "../../../assets/UN_Line=empty, Name=download.svg";
import download from "../../../assets/Line=empty, Name=download.svg";
import unlike_song from "../../../assets/unlike _song_icon.svg";
import like_song from "../../../assets/like_song_icon.svg";
import { usePlayer } from "../../../context/PlayerContextProvider/PlayerContextProvider";
import { useDownLoad } from "../../../context/DownloadContexProvider";
import { api } from "../../../api/api";

const TrackRow = ({
  trackIndex,
  track,

  // AddFavorites,
  handleOpenAddtoPlaylistModal,
}) => {
  const { id: trackId, cover_photo, title, artist } = track;

  const { setCurrentTrackIndex } = usePlayer();

  const navigate = useNavigate();

  const artistTitle = artist[1];
  const { AddDownload, downloads, AddFavorites, checkTracksDown } =
    useDownLoad();

  const isFavorite = (trackId) => {
    let favorites = JSON.parse(localStorage.getItem("favorites"));

    if (favorites) {
      let isTrackFavorite = favorites.tracks.filter(
        (track) => track.id == trackId
      )?.length;
      return isTrackFavorite;
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await api.deleteProduct(productId);
      // Выполните дополнительные действия после удаления, если это необходимо
    } catch (error) {
      console.log("Ошибка при удалении продукта: ", error);
    }
  };

  return (
    <div className={classes.track_line}>
      <div
        onClick={() => {
          setCurrentTrackIndex(trackIndex);
        }}
      >
        {" "}
        <img src={play_btn} alt="" />
      </div>
      <div className={classes.track_line_section}>
        <img src={cover_photo} width={48} alt="" />
        <div className={classes.track_line_section_name}>
          <h4> {title} </h4>
          <h5> {artistTitle} </h5>
        </div>
      </div>
      <div className={classes.classes}>{"Album Title"}</div>
      {/* <div className={classes.dateAdd}>1 day ago</div> */}
      <div
        className={classes.time}
        onClick={() => {
          AddDownload(track);
        }}
      >
        {checkTracksDown(trackId) ? (
          <img src={undownload} alt="" />
        ) : (
          <img src={download} alt="" />
        )}
      </div>
      <div
        className={classes.favorites}
        onClick={() => {
          AddFavorites(track);
        }}
      >
        {isFavorite(trackId) ? (
          <img src={unlike_song} alt="" />
        ) : (
          <img src={like_song} alt="" />
        )}
      </div>

      {/* <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        overlayClassName="custom-overlay"
        className="custom-modal"
      >
        <div className={classes.modal_window}>
          <div className={classes.textBlock}>
            <button
              onClick={() => {
                navigate("/account");
              }}
            >
              Account
            </button>
          </div>
          <div className={classes.textBlock}>
            <select>
              {Object.values(playlistAdd).map((playlist) => (
                <option key={playlist.id} value={playlist.title}>
                  {playlist.title}
                </option>
              ))}
            </select>
          </div>
        </div>
      </Modal> */}
      <button
        className={classes.add}
        style={{ backgroundColor: "blue" }}
        onClick={() => navigate(`/editTrack/${trackId}`)}
      >
        edit
      </button>
      <button
        style={{ backgroundColor: "red" }}
        className={classes.add}
        onClick={() => handleDeleteProduct(track.id)}
      >
        delete
      </button>
    </div>
  );
};

export default TrackRow;
