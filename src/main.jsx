import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./dist/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/CITTERV2/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
