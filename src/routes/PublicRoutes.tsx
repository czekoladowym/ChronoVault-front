import Auth from "../pages/auth/Auth";
import Home from "../pages/home/Home";

export const PublicRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
];
