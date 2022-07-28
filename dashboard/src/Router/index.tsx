import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Dashboard } from "../pages/Dashboard";


export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  );
};