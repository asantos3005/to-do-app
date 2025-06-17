import '../src/stylesheets/App.css';
import '../src/stylesheets/Sidebar.css';
import Home from './pages/Home';
import SideBar from './generalComponents/SideBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {
  const [sidebarState, setSidebarState] = useState("open");

  function toggleSideBar() {
    const newState = sidebarState === "open" ? "closed" : "open";
    setSidebarState(newState);
    console.log("Sidebar toggled:", newState);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <SideBar sidebarState={sidebarState} toggleSideBar={toggleSideBar} />
        <Routes>
          <Route path="/" element={<Home sidebarState={sidebarState} toggleSideBar={toggleSideBar} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

