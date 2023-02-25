import { BrowserRouter, Route, Routes } from "react-router-dom";

import { PublicRoutes } from "./PublicRoutes";

export default function RoutesComp() {
  return (
    <BrowserRouter>
      <Routes>
        {PublicRoutes.map((route) => (
          <Route path={route.path} element={route.element} key={route.path} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
