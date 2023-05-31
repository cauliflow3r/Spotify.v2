import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
// import './AudioPlayer.css';

const AudioPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [duration, setDuration] = useState(0);
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);

  const tracks = [
    {
      title: "Track 1",
      url: "http://34.125.87.211/media/songs/Linkin_Park_-_Given_Up_z5iQbup.mp3",
    },
    {
      title: "Track 2",
      url: "http://34.125.87.211/media/songs/Linkin_Park_-_Hands_Held_High_IlzcgL1.mp3",
    },
    {
      title: "Track 3",
      url: "http://34.125.87.211/media/songs/Linkin_Park_-_In_Between_eVlfPeL.mp3",
    },
  ];

  const handlePlayNext = () => {
    setCurrentTrack((prevTrack) => (prevTrack + 1) % tracks.length);
  };

  const handlePlayPrev = () => {
    setCurrentTrack(
      (prevTrack) => (prevTrack - 1 + tracks.length) % tracks.length
    );
  };

  const handlePlayPause = () => {
    setIsPlaying((prevState) => !prevState);
  };

  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value));
  };

  const handleDuration = (duration) => {
    setDuration(duration);
  };

  const handleProgress = (progress) => {
    setPlayedSeconds(progress.playedSeconds);
  };

  const handleSeek = (seconds) => {
    playerRef.current.seekTo(seconds);
  };

  // Функция для форматирования времени в формат "минуты:секунды"
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="audio-player">
      <h2>Audio Player</h2>
      <ReactPlayer
        ref={playerRef}
        url={tracks[currentTrack].url}
        playing={isPlaying}
        volume={volume}
        onEnded={handlePlayNext}
        onDuration={handleDuration}
        onProgress={handleProgress}
      />
      <div>
        <button className="audio-player-button" onClick={handlePlayPrev}>
          Previous
        </button>
        <button className="audio-player-button" onClick={handlePlayPause}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button className="audio-player-button" onClick={handlePlayNext}>
          Next
        </button>
      </div>
      <div>
        <label htmlFor="volume" className="audio-player-label">
          Volume:
        </label>
        <input
          type="range"
          id="volume"
          name="volume"
          min={0}
          max={1}
          step={0.1}
          value={volume}
          onChange={handleVolumeChange}
          className="audio-player-slider"
        />
      </div>
      <div>
        <input
          type="range"
          min={0}
          max={duration}
          step={0.1}
          value={playedSeconds}
          onChange={(e) => handleSeek(parseFloat(e.target.value))}
          className="audio-player-timeline"
        />
      </div>
      {/* Отображение начала и конца текущего трека */}
      <div className="audio-player-track-info">
        <span>Start: {formatTime(playedSeconds)}</span>
        <span>End: {formatTime(duration)}</span>
      </div>
    </div>
  );
};

export default AudioPlayer;
