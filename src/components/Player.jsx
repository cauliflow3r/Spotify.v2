import { useContext, useEffect, useState } from "react";
import useSound from "use-sound";
import playerblock from "../style/Player.module.css";
import playBtn from "../assets/Play.svg";
import pauseBtn from "../assets/Pause.svg";
import prevSong from "../assets/prevSong.svg";
import nextSong from "../assets/nextSong.svg";
import fullScreen from "../assets/Full Screen.svg";
import valume from "../assets/valume.svg";
import axios from "axios";
import { songsContext } from "../context/SongsContextProvider";

export default function Player() {
  const {
    getSongs,
    Counter,
    setCounter,
    track,
    setTrack,
    trackList,
    setTrackList,
  } = useContext(songsContext);
  const [volume, setVolume] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    getSongs();
  }, []);

  const [time, setTime] = useState({
    min: "",
    sec: "",
  });
  const [currTime, setCurrTime] = useState({
    min: "",
    sec: "",
  });

  const [seconds, setSeconds] = useState();

  const [play, { pause, duration, sound }] = useSound(
    !track == ""
      ? track
      : "http://34.125.252.214/media/songs/Linkin_Park_-_Leave_Out_All_the_Rest.mp3",
    {
      volume,
    }
  );

  useEffect(() => {
    if (duration) {
      const sec = duration / 1000;
      const min = Math.floor(sec / 60);
      const secRemain = Math.floor(sec % 60);
      setTime({
        min: min,
        sec: secRemain,
      });
    }
  }, [isPlaying]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([]));
        const min = Math.floor(sound.seek([]) / 60);
        const sec = Math.floor(sound.seek([]) % 60);
        setCurrTime({
          min,
          sec,
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);

  const playingButton = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };

  return (
    <div className={playerblock.component}>
      {/* <h2>Playing Now</h2> */}
      <div className={playerblock.songInfo}>
        <img
          className={playerblock.musicCover}
          src={
            track
              ? trackList[Counter].cover_photo
              : "https://picsum.photos/200/200"
          }
        />
        <div>
          <h3 className="title">{track ? trackList[Counter].title : "Name"}</h3>
          <p className="subTitle">
            {track ? trackList[Counter].artist : "Artist"}
          </p>
        </div>
      </div>

      <div className={playerblock.songLine}>
        <div>
          <button
            className={playerblock.playButton}
            onClick={() => {
              setCounter(Counter - 1);
              getSongs();
            }}
          >
            <img src={prevSong} alt="" />
          </button>
          {!isPlaying ? (
            <button
              className={playerblock.playButton_1}
              onClick={playingButton}
            >
              <img src={playBtn} alt="" />
            </button>
          ) : (
            <button
              className={playerblock.playButton_1}
              onClick={playingButton}
            >
              <img src={pauseBtn} alt="" />
            </button>
          )}
          <button
            className={playerblock.playButton}
            onClick={() => {
              setCounter(Counter + 1);
              getSongs();
            }}
          >
            <img src={nextSong} alt="" />
          </button>
        </div>

        <div className={playerblock.songTimeLine}>
          <div className={playerblock.time}>
            <p>
              {currTime.min}:{currTime.sec}
            </p>
          </div>
          <input
            type="range"
            min="0"
            max={duration / 1000}
            default="0"
            value={seconds}
            className={playerblock.linetime}
            onChange={(e) => {
              sound.seek([e.target.value]);
            }}
          />
          <div>
            <p>
              {time.min}:{time.sec}
            </p>
          </div>
        </div>
      </div>
      <div className={playerblock.rightLineSong}>
        <img src={valume} alt="" />
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
        />
        <img src={fullScreen} alt="" />
      </div>
    </div>
  );
}
