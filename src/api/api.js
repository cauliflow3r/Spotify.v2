import axios from "axios";
import confAxios from "../config/confAxios";
import { API } from "../constants";

export const api = {
  getArtists: async function () {
    try {
      const response = await confAxios.get(`/artists/`);

      return response.data.results;
    } catch (error) {
      console.log("getArtists: ", error);
    }
  },
  getPlaylists: async function () {
    try {
      let response = await confAxios.get(`/playlist/author/`);
      return response.data.results;
    } catch (error) {
      console.log("getMyPlaylists: ", error);
    }
  },
  getAlbums: async function () {
    try {
      const response = await confAxios.get(`/albums/`);
      console.log(response.data.results);
      return response.data.results;
    } catch (error) {
      console.log("getAlbums: ", error);
    }
  },
  getGenres: async function () {
    try {
      const response = await confAxios.get(`/genre/`);
      console.log(response.data.results);
      return response.data.results;
    } catch (error) {
      console.log("getGenres: ", error);
    }
  },
  getArtist: async function (id) {
    try {
      let response = await confAxios.get(`/artists/${id}/`);
      return response.data;
    } catch (error) {
      console.log("getArtist: ", error);
    }
  },
  getALbum: async function (id) {
    try {
      let response = await confAxios.get(`/albums/${id}/`);
      return response.data;
    } catch (error) {
      console.log("getALbum: ", error);
    }
  },

  getTrack: async function (id) {
    try {
      const response = await confAxios.get(`/songs/${id}/`);
      return response.data;
    } catch (error) {
      console.log("getTrack: ", error);
    }
  },
  editTrack: async function (id, editedTrack) {
    try {
      const response = await confAxios.patch(`/songs/${id}/`, editedTrack);
      return response.data;
    } catch (error) {
      console.log("editTrack: ", error);
    }
  },
  addPlaylist: async function (playlistToAdd) {
    try {
      const response = await confAxios.post(`/playlist/author/`, playlistToAdd);
      return response.data;
    } catch (error) {
      console.log("editTrack: ", error);
    }
  },
  addAlbum: async function (newAlbum) {
    try {
      let response = await confAxios.post(`/albums/`, newAlbum);
      return response.data;
    } catch (error) {
      console.log("PostAlbum", error);
    }
  },
  addArtist: async function (newArtist) {
    try {
      let res = await confAxios.post(`/artists/`, newArtist);
    } catch (error) {
      console.log("error");
    }
  },
  addProduct: async function (newProduct) {
    await confAxios.post(`/songs/upload/`, newProduct);
  },
  getProductDetails: async function (id) {
    const data = await confAxios.get(`/songs/${id}`);
    return data;
  },
  deleteProduct: async function (id) {
    try {
      await confAxios.delete(`/songs/${id}/`);
    } catch (error) {
      console.log("deleteProduct: ", error);
    }
  },
};



