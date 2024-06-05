import "./style.css";
import {App} from "./app";
import {createRoot} from "react-dom/client";
import React from "react";

const root = document.getElementById("root");

if (root != null) {
  const container = createRoot(root);
  container.render(<App />);
} else {
  throw new Error("root not found");
}
