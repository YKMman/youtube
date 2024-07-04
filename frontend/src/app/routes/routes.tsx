import { HomePage, Layout, RegistrationPage } from "pages";
import { createMemoryRouter } from "react-router-dom";

export const routes = createMemoryRouter([
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
