import React from "react";

import ReactDOM from "react-dom/client";
import App from "./App";
import MovieContextProvider from "./context/MovieContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <MovieContextProvider>
      <App />
    </MovieContextProvider>
  </BrowserRouter>
);
