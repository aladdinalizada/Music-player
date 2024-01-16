import React from "react";
import ReactDOM from "react-dom/client";
import { MusicPlayerProvider } from "../MusicPlayerContext.jsx";
import "bulma/css/bulma.css";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MusicPlayerProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MusicPlayerProvider>
);
