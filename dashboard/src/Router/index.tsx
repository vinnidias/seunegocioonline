import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { MenuProvider } from "../contexts/MenuContexts";
import { PrivateRoute } from "../components/Routes/PrivateRoute";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <MenuProvider>
        <Routes>
        <Route
            path="/login"
            element={
             <Login/>
            }
          />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </MenuProvider>
    </BrowserRouter>
  );
};
