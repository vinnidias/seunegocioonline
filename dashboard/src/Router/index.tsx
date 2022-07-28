import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Dashboard } from "../pages/Dashboard";
import { MenuProvider } from "../contexts/MenuContexts";


export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <MenuProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </MenuProvider>
    </BrowserRouter>
  );
};