import React from "react";
import playerblock from "../../../../style/Player.module.css";

const PlayerControllers = () => {
  return (
    <div>
      <button className={playerblock.playButton} onClick={playerPrevTrack}>
        <img src={prevSong} alt="Prev Icon" />
      </button>
      <button className={playerblock.playButton_1} onClick={handlePlayPause}>
        {isPlaying ? (
          <img src={pauseBtn} alt="Pause Icon" />
        ) : (
          <img src={playBtn} alt="Play Icon" />
        )}
      </button>
      <button className={playerblock.playButton} onClick={playerNextTrack}>
        <img src={nextSong} alt="Next Icon" />
      </button>
    </div>
  );
};

export default PlayerControllers;
