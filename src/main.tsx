import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// TODO: Create a Contact Me form.

const style =
  "background-color: #00b200; color: white; padding: 5px 10px; border-radius: 25px; font-weight:bold";

console.log("%cDesigned and Coded by Mohamed Hassan", style);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
