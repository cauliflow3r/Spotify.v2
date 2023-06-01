import { useContext, useEffect, useRef, useState } from "react";
import useSound from "use-sound";
import playerblock from "../style/Player.module.css";
import playBtn from "../assets/Play.svg";
import pauseBtn from "../assets/Pause.svg";
import prevSong from "../assets/prevSong.svg";
import nextSong from "../assets/nextSong.svg";
import fullScreen from "../assets/Full Screen.svg";
import valume from "../assets/valume.svg";

import { songsContext } from "../context/SongsContextProvider";
import ReactPlayer from "react-player";

export default function Player() {
  const {
    Counter,
    trackInfo,
    setTrack,
    trackList,
    setTrackList,
    currentTrack,
    setCurrentTrack,
    getALbumTrack,
  } = useContext(songsContext);

  // console.log(trackInfo.hasOwnProperty("tracks"));

  // !------------------------------
  // const [currentTrack, setCurrentTrack] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [duration, setDuration] = useState(0);
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);

  useEffect(() => {
    getALbumTrack(3);
  }, []);

  const tracks = trackList;
  console.log(trackList);

  const handlePlayNext = () => {
    setCurrentTrack((prevTrack) => (prevTrack + 1) % tracks?.length);
  };

  const handlePlayPrev = () => {
    setCurrentTrack(
      (prevTrack) => (prevTrack - 1 + tracks?.length) % tracks?.length
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

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };
  // !------------------------------
  return (
    <div className={playerblock.component}>
      {/* <h2>Playing Now</h2> */}
      <div className={playerblock.songInfo}>
        <img
          className={playerblock.musicCover}
          src={tracks ? trackInfo.cover_photo : "https://picsum.photos/200/200"}
        />
        <div>
          <h3 className="title">
            {trackInfo?.songs ? trackInfo?.songs[currentTrack].title : "Name"}
          </h3>
          <p className="subTitle">
            {trackInfo.songs ? tracks[currentTrack]?.artist[1] : "Artist"}
          </p>
        </div>
      </div>

      <div className={playerblock.songLine}>
        <ReactPlayer
          height={0}
          ref={playerRef}
          url={
            tracks?.length != 0
              ? tracks[currentTrack]?.audio_file
              : "http://34.125.87.211/media/songs/Linkin_Park_-_Bleed_It_Out_pPDQK7N.mp3"
          }
          playing={isPlaying}
          volume={volume}
          onEnded={handlePlayNext}
          onDuration={handleDuration}
          onProgress={handleProgress}
        />
        <div>
          <button className={playerblock.playButton} onClick={handlePlayPrev}>
            <img src={prevSong} alt="" />
          </button>
          <button
            className={playerblock.playButton_1}
            onClick={handlePlayPause}
          >
            {isPlaying ? (
              <img src={pauseBtn} alt="" />
            ) : (
              <img src={playBtn} alt="" />
            )}
          </button>
          <button className={playerblock.playButton} onClick={handlePlayNext}>
            <img src={nextSong} alt="" />
          </button>
        </div>

        <div className={playerblock.songTimeLine}>
          <div className={playerblock.time}>
            <p>
              {/* {currTime.min}:{currTime.sec} */}
              {formatTime(playedSeconds)}
            </p>
          </div>

          <input
            className={playerblock.linetime}
            type="range"
            min={0}
            max={duration}
            step={0.1}
            value={playedSeconds}
            onChange={(e) => handleSeek(parseFloat(e.target.value))}
          />
          <div>
            <p>
              {/* {time.min}:{time.sec} */}
              {formatTime(duration)}
            </p>
          </div>
        </div>
      </div>
      <div className={playerblock.rightLineSong}>
        <img src={valume} alt="" />

        <input
          type="range"
          id="volume"
          name="volume"
          min={0}
          max={1}
          step={0.1}
          value={volume}
          onChange={handleVolumeChange}
        />
        <img src={fullScreen} alt="" />
      </div>
    </div>
  );
}
