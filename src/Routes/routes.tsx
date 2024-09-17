import { createBrowserRouter } from "react-router-dom";
import Welcome from "../components/Welcome";
import Login from "../Auth/Login";
import Signup from "../Auth/Signup";
import Dashboardlayout from "../Layouts/Dashboardlayout";
import Overview from "../client/Overview";
import History from "../client/History";
import Reward from "../client/Reward";
import Profile from "../client/Profile";
import Security from "../client/Profile/Security";
import Merchant from "../client/Profile/Merchant";
import Portfolio from "../client/Portfolio";
import Convert from "../client/Convert";

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
  {
    path: "merchant",
    element: <Dashboardlayout />,
    children: [
      {
        path: "overview",
        element: <Overview />,
      },
      {
        path: "history",
        element: <History />,
      },
      {
        path: "rewards",
        element: <Reward />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "convert",
        element: <Convert />,
      },
      {
        path: "profile",
        element: <Profile />,
        children: [
          {
            path: "security",
            element: <Security />,
          },
          {
            path: "merchantpro",
            element: <Merchant />,
          },
        ],
      },
    ],
  },
]);
