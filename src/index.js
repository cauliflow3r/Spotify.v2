import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AuthContextProvider from "./context/AuthContextProvider";
import ProductContextProvider from "./context/ProductContextProvider";
import SongContextProvider from "./context/SongsContextProvider";
import DownloadContextProvider from "./context/DownloadContexProvider";
import PlayerContextProvider from "./context/PlayerContextProvider";
import PlaylistsContextProvider from "./context/PlaylistsContextProvider";
import FeedContextProvider from "./context/FeedContextProvider/FeedContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <FeedContextProvider>
      <PlayerContextProvider>
        <SongContextProvider>
          <PlaylistsContextProvider>
            <DownloadContextProvider>
              <ProductContextProvider>
                <AuthContextProvider>
                  <App />
                </AuthContextProvider>
              </ProductContextProvider>
            </DownloadContextProvider>
          </PlaylistsContextProvider>
        </SongContextProvider>
      </PlayerContextProvider>
    </FeedContextProvider>
  </BrowserRouter>
);
