import React from "react";
import APP_ROUTES from "./config/routes";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      {APP_ROUTES.map((route) => {
        if (route.Guard) {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={<route.Guard>{<route.Component />}</route.Guard>}
            />
          );
        }
        return (
          <Route
            key={route.path}
            path={route.path}
            element={<route.Component />}
          />
        );
      })}
    </Routes>
  );
};

export default AppRoutes;
