import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Assurez-vous que Tailwind est bien importé ici

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
