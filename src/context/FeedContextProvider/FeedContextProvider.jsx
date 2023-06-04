import React, { useEffect, useReducer, useContext, createContext } from "react";
import { SET_ALBUMS, SET_ARTISTS, SET_PLAYLISTS, SET_SONGS } from "./actions";
import { api } from "../../api/api";

export const FeedContext = createContext();
export const useFeedDataLists = () => useContext(FeedContext);

const initialState = {
  artists: [],
  albums: [],
  playlists: [],
  songs: [],
};

const feedReducer = (state, action) => {
  switch (action.type) {
    case SET_ARTISTS:
      return {
        ...state,
        artists: [...action.payload],
      };
    case SET_ALBUMS:
      return {
        ...state,
        albums: [...action.payload],
      };
    case SET_PLAYLISTS:
      return {
        ...state,
        playlists: [...action.payload],
      };
    case SET_SONGS:
      return {
        ...state,
        songs: [...action.payload],
      };
    default:
      return state;
  }
};

const FeedContextProvider = ({ children }) => {
  const [feedState, dispatch] = useReducer(feedReducer, initialState);

  const { artists, albums, playlists, songs } = feedState;
  // console.log("artists:", artists);

  useEffect(() => {
    const getFeedDataListsAndSet = async () => {
      const artists = await api.getArtists();
      const albums = await api.getAlbums();
      const playlists = await api.getPlaylists();
      const songs = await api.getSongs();

      dispatch({
        type: SET_ARTISTS,
        payload: Array.isArray(artists) ? artists : [],
      });
      dispatch({
        type: SET_ALBUMS,
        payload: Array.isArray(albums) ? albums : [],
      });
      dispatch({
        type: SET_PLAYLISTS,
        payload: Array.isArray(playlists) ? playlists : [],
      });
      dispatch({
        type: SET_SONGS,
        payload: Array.isArray(songs) ? songs : [],
      });
    };

    getFeedDataListsAndSet();
  }, []);

  const values = {
    artists,
    albums,
    playlists,
    songs,
  };

  return <FeedContext.Provider value={values}>{children}</FeedContext.Provider>;
};

export default FeedContextProvider;
