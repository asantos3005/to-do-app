import { useState } from "react";
import SideBar from "./SideBar";
import Home from "./Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function Layout() {
  const [sidebarState, setSidebarState] = useState("open");

  function toggleSideBar() {
    const newState = sidebarState === "open" ? "closed" : "open";
    setSidebarState(newState);
    console.log("Sidebar toggled:", newState);
  }

  return (
    <div className="app-container">
      <SideBar sidebarState={sidebarState} toggleSideBar={toggleSideBar} />
      <Home sidebarState={sidebarState} toggleSideBar={toggleSideBar} />
    </div>
  );
}