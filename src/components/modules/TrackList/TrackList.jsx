import React, { useCallback, useState } from "react";
import play_btn from "../../../assets/Play.svg";
import download from "../../../assets/Line=empty, Name=download.svg";
import search from "../../../assets/Line=bold, Name=search.svg";
import drop from "../../../assets/fi-ss-caret-down.svg";
import like_song from "../../../assets/like_song_icon.svg";
import TrackRow from "../TrackRow";
import classes from "./TracList.module.css";
import AddToPlaylistModal from "../AddToPlaylistModal";

const TrackList = ({ albumInfo, trackList }) => {
  const [trackIdToAddToPlaylist, setTrackIdToAddToPlaylist] = useState(null);
  const [isAddToPlaylistModalOpen, setIsAddToPlaylistModalOpen] =
    useState(false);

  const handleOpenAddtoPlaylistModal = useCallback(
    (trackIdToAddToPlaylist) => {
      console.log("trackIdToAddToPlaylist:", trackIdToAddToPlaylist);
      setIsAddToPlaylistModalOpen(true);
    },
    [trackIdToAddToPlaylist]
  );

  const handleCloseAddtoPlaylistModal = () =>
    setIsAddToPlaylistModalOpen(false);

  return (
    <>
      <AddToPlaylistModal
        isOpen={isAddToPlaylistModalOpen}
        handleClose={handleCloseAddtoPlaylistModal}
      />
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
            <div className={classes.number}>
              <img src={download} alt="" />
            </div>
            <div className={classes.number}>
              <img src={like_song} alt="" />
            </div>
            <div>
              <img src="" alt="" />
            </div>
          </div>

          {trackList.map((track, index) => {
            return (
              <TrackRow
                key={track.id}
                track={track}
                trackIndex={index}
                handleOpenAddtoPlaylistModal={handleOpenAddtoPlaylistModal}
                albumInfo={albumInfo}
                // AddDownload={AddDownload}
                // handleIconClick={handleIconClick}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TrackList;
