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
  getSongs: async function () {
    try {
      const response = await confAxios.get(`/songs/`);
      return response.data.results;
    } catch (error) {
      console.log("getSongs: ", error);
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
  getPlayList:async function (id) {
    try {
      let response = await confAxios.get(`/playlist/author/${id}/`);
      return response.data;
    } catch (error) {
      console.log("getPlayList: ", error);
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
  postPlaylistComment: async function (commentForm) {
    try {
      let response = await confAxios.post(`/review/comments/`,commentForm);
        return response.data
    } catch (error) {
      console.log("postPlaylist :", error);
    }
  },


   postRating: async function (ratingForm) {
    try {
      let response = await confAxios.post(`/review/rating/`,ratingForm);
        return response.data
    } catch (error) {
      console.log("postRating :", error);
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
  getUserCommentFromPlayList: async function (id, setGetCommentFromUSer) {
    try {
      let response = await confAxios.get(`/playlist/user/${id}`);
      setGetCommentFromUSer(response.data.comments);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log("getUserCommentFromPlayList:", error);
    }
  }
};

