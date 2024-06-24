import { createBrowserRouter } from "react-router-dom";
import { HomePage, RegistrationPage } from "../../pages";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "registration",
    element: <RegistrationPage />,
  },
]);
