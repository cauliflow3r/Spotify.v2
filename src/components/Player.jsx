import { useEffect, useState } from "react";
import useSound from "use-sound";
import playerblock from "../style/Player.module.css";
import playBtn from "../assets/Play.svg";
import pauseBtn from "../assets/Pause.svg";
import prevSong from "../assets/prevSong.svg";
import nextSong from "../assets/nextSong.svg";
import fullScreen from "../assets/Full Screen.svg";
import valume from "../assets/valume.svg";
import axios from "axios";

const Player = () => {
  const [volume, setVolume] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [track, setTrack] = useState("");
  console.log(track);
  async function getSongs() {
    const res = await axios.get("http://34.125.252.214/songs/");
    console.log(res.data.results);
    setTrack(res.data.results[4].audio_file);
  }
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

  const [play, { pause, duration, sound }] = useSound(`${track}`, { volume });

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
          src="https://picsum.photos/200/200"
        />
        <div>
          <h3 className="title">Rubaiyyan</h3>
          <p className="subTitle">Qala</p>
        </div>
      </div>

      <div className={playerblock.songLine}>
        <div>
          <button className={playerblock.playButton}>
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
          <button className={playerblock.playButton}>
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
        {/* <img src={fullScreen} alt="" s /> */}
      </div>
    </div>
  );
};

export default Player;
