import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import AuthProvider from "./authprovider/AuthProvider.jsx";
import ErrorPage from "./ErrorPage.jsx";
import PrivateRoute from "./private/PrivateRoute.jsx";
import Home from "./components/main/Home.jsx";
import AllCampaign from "./components/main/AllCampaign.jsx";
import NewCampaign from "./components/main/NewCampaign.jsx";
import MyCampaign from "./components/main/MyCampaign.jsx";
import MyDonation from "./components/main/MyDonation.jsx";
import DetailsCampaign from "./components/main/DetailsCampaign.jsx";
import Login from "./authentication/Login.jsx";
import Register from "./authentication/ Register.jsx";
import UpdateCampaign from "./components/main/UpdateCampaign.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/campaigns", element: <AllCampaign></AllCampaign> },
      {
        path: "/addCampaign",
        element: (
          <PrivateRoute>
            <NewCampaign></NewCampaign>
          </PrivateRoute>
        ),
      },
      {
        path: "/campaign/:id",
        element: (
          <PrivateRoute>
            <DetailsCampaign></DetailsCampaign>
          </PrivateRoute>
        ),
      },
      {
        path: "/myCampaign",
        element: (
          <PrivateRoute>
            <MyCampaign></MyCampaign>
          </PrivateRoute>
        ),
      },
      {
        path: "/donations",
        element: (
          <PrivateRoute>
            <MyDonation></MyDonation>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateCampaign/:id",
        element: (
          <PrivateRoute>
            <UpdateCampaign></UpdateCampaign>
          </PrivateRoute>
        ),
      },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
