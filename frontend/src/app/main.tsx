import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";

import "./index.css";

const root = document.getElementById("root");

if (root != null) {
  const container = createRoot(root);
  container.render(<RouterProvider router={routes} />);
} else {
  throw new Error("root not found");
}
