import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const root: HTMLElement | null = document.getElementById("root");

ReactDOM.createRoot(root ?? document.createElement("div")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
