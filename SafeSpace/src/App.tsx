import Chats from "./components/pages/Chats";
import Diet from "./components/pages/Diet";
import Exercise from "./components/pages/Exercise";
import Home from "./components/pages/Home";
import Motivation from "./components/pages/Motivation";
import Search from "./components/pages/Search";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav className="space-x-4 p-4 bg-gray-100">
        <Link to="/home">Home</Link>
        <Link to="/chats">Chats</Link>
        <Link to="/motivation">Motivation</Link>
        <Link to="/diet">Diet</Link>
        <Link to="/search">Search</Link>
        <Link to="/exercise">Exercise</Link>
      </nav>

      <div className="p-4">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/diet" element={<Diet />} />
          <Route path="/motivation" element={<Motivation />} />
          <Route path="/chats" element={<Chats />} />
          <Route path="/search" element={<Search />} />
          <Route path="/exercise" element={<Exercise />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
