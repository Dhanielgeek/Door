import { createBrowserRouter } from "react-router-dom";
import Welcome from "../components/Welcome";
import Login from "../Auth/Login";
import Signup from "../Auth/Signup";

export const routes = createBrowserRouter([
  {
    path: "",
    element: <Welcome />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
]);
