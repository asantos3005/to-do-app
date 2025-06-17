import './App.css';
import '../src/stylesheets/sidebar.css'
import Home from './pages/Home';
import SideBar from './generalComponents/SideBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
        <div className="App"> 
          <SideBar/>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>

    </BrowserRouter>
  );
}

export default App;
