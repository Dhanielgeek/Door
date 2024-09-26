import { createBrowserRouter } from "react-router-dom";
import Welcome from "../components/Welcome";
import Login from "../Auth/Login";
import Signup from "../Auth/Signup";
import Dashboardlayout from "../Layouts/Dashboardlayout";
import Overview from "../client/Overview";
import History from "../client/History";

import Profile from "../client/Profile";
import Security from "../client/Profile/Security";
import Merchant from "../client/Profile/Merchant";

import VerifyOtp from "../Auth/VerifyOtp";
import ResendOtp from "../Auth/ResendOtp";
import AddInfo from "../client/Profile/AddInfo";
import Transfer2Bank from "../client/Transfer2Bank";
import Door2door from "../client/Door2door";
import Withdrawal from "../client/Withdrawal";

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
    path: "verify-otp",
    element: <VerifyOtp />,
  },
  {
    path: "resend-otp",
    element: <ResendOtp />,
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
        path: "withdraw",
        element: <Withdrawal />,
      },
      {
        path: "transbank",
        element: <Transfer2Bank />,
      },
      {
        path: "door2door",
        element: <Door2door />,
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
          {
            path: "addinfo",
            element: <AddInfo />,
          },
        ],
      },
    ],
  },
]);
