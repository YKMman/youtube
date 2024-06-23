import { createBrowserRouter } from "react-router-dom";
import {
  AuthorizationPage,
  HomePage,
  Layout,
  RegistrationPage,
} from "../../pages";
import React from "react";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <HomePage />
      </Layout>
    ),
  },
  {
    path: "/registration",
    element: <RegistrationPage />,
  },
  {
    path: "/authorization",
    element: <AuthorizationPage />,
  },
]);
