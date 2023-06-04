import confAxios from "../config/confAxios";

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
      return response.data.results;
    } catch (error) {
      console.log("getAlbums: ", error);
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

  postPlaylist: async function (playlistForm) {
    try {
      let response = await confAxios.get(`playlist/author/`,playlistForm);
        return response.data
    } catch (error) {
      console.log("postPlaylist :", error);
    }
  },
  createArtist: async function (newProduct) {
    try {
      const response =await confAxios.post(`/albums/`, newProduct);
    } catch (error) {
      console.log(error);
    }
  }

};
