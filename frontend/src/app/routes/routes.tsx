import { createBrowserRouter } from "react-router-dom";
import { HomePage, Layout, RegistrationPage } from "../../pages";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <HomePage />,
      </Layout>
    ),
  },
  {
    path: "registration",
    element: (
      <Layout>
        <RegistrationPage />
      </Layout>
    ),
  },
]);
