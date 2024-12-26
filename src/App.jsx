import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sidebar from "./componenets/Sidebar";
import Header from "./componenets/Header";
import ChatHistory from "./pages/ChatHistory";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./componenets/Layout";
import CustomerHistory from "./pages/CustomerHistory";
import OverviewHistory from "./pages/OverviewHistory";
import Settings from "./pages/Settings"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="chat-history" element={<ChatHistory />} />
            <Route path="customer-history" element={<CustomerHistory />} />
            <Route path="overview" element={<OverviewHistory />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
