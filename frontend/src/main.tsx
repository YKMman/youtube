import { createRoot } from "react-dom/client";

import "./style.scss";
import { App } from "./pages/HomePage/HomePage";

const root = document.getElementById("root");

if (root != null) {
  const container = createRoot(root);
  container.render(<App />);
} else {
  throw new Error("root not found");
}
