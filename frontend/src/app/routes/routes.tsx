import { createBrowserRouter } from "react-router-dom";
import { AuthorizationPage, HomePage, RegistrationPage } from "../../pages";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "registration",
    element: <RegistrationPage />,
  },
  {
    path: "authorization",
    element: <AuthorizationPage />,
  },
]);
