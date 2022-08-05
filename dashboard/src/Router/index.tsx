import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { PrivateRoute } from "../components/Routes/PrivateRoute";
import { MenuProvider } from "../contexts/MenuContexts";
import { AuthProvider } from "../contexts/AuthContext";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <MenuProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />

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
      </AuthProvider>
    </BrowserRouter>
  );
};
