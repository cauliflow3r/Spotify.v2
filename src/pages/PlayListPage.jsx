import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import album from "../style/AlbumPage.module.css";
import classes from "../style/PalyListBlock.module.css";
import { useDownLoad } from "../context/DownloadContexProvider";
import { songsContext } from "../context/SongsContextProvider";
import { useAuth } from "../context/AuthContextProvider";
import { useProducts } from "../context/ProductContextProvider";
import TrackList from "../components/modules/TrackList";

const PlayListPage = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  // const navigate = useNavigate();
  const { getFavorites, getDownload } = useDownLoad();

  const {
    sendRating,
    setSelectedRating,
    selectedRating,
    postPlayListComment,
    setTitle,
  } = useProducts();
  console.log(selectedRating);

  useEffect(() => {
    getFavorites();
  }, []);
  useEffect(() => {
    getDownload();
  }, []);

  // !downloads
  // !----------------
  // const { getALbumTrack, trackList, AlbumInfo } = useContext(songsContext);
  // console.log("trackList", trackList);
  // console.log("AlbumInfo", AlbumInfo);

  // todo -------------------
  const { id } = useParams();
  console.log("Это будет айди ", id);

  useEffect(() => {
    sendRating(id);
  }, [selectedRating]);

  useEffect(() => {}, []);

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
                <h5>
                  User&nbsp; : &nbsp;{currentUser} : Quantity :
                  {trackList.length}
                </h5>
                <div>
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
                </div>
              </div>
            </div>
            <TrackList trackList={trackList} />
            <div></div>
          </div>
          {/*  */}
          <div className={classes.containerComments}>
            <form className={classes.commentForm} action="#" method="post">
              <div className={classes.leftForm}>
                <textarea
                  className={classes.inputcomment}
                  name="comment"
                  id="comment"
                  rows="10"
                  placeholder="Написать комментарий..."
                ></textarea>
              </div>
              <div className={classes.rightForm}>
                <button
                  type="submit"
                  className={classes.commentAdd}
                  onClick={postPlayListComment}
                >
                  Отправить
                </button>
              </div>
            </form>
            <div className={classes.wrapperComments}>
              <ul className={classes.commentList}>
                <li className={classes.comment}>Комментарий 1</li>
                <li className={classes.comment}>Комментарий 2</li>
                <li className={classes.comment}>Комментарий 3</li>
              </ul>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </MainLayout>
  );
};

export default PlayListPage;
