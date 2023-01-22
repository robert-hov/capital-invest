import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Svg from "./pages/components/Svg";
import "./style.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Svg />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
