import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter, Route, Routes } from "react-router";

import { Client } from "./client";
import { Dashboard } from "./admin/pages/Dashboard";
import BasicTabs from "./admin/pages/Dashboard/components/Tabs";
import { Menu } from "./admin/pages/Dashboard/components/Menu";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<BasicTabs />} />
        </Route>
        <Route path="/neworder" element={<Client />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
