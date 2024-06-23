import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "./style.css";

import { routes } from "./routes/routes";

const root = document.getElementById("root");

if (root != null) {
  const container = createRoot(root);
  container.render(<RouterProvider router={routes} />);
} else {
  throw new Error("root not found");
}
