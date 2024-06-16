import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "./style.scss";

import { routes } from "./routes/routes";
import { Layout } from "../pages";

const root = document.getElementById("root");

console.log(root);

if (root != null) {
  const container = createRoot(root);
  container.render(
    <Layout>
      <RouterProvider router={routes} />
    </Layout>
  );
} else {
  throw new Error("root not found");
}
