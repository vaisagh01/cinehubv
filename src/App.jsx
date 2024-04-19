import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/header";
import Trending from "./pages/Trending";
import Popular from "./pages/Popular";
import Help from "./pages/Help";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import TV from "./pages/TV";
import Movies from "./pages/Movies";

function App() {
  return (
    <div className="bg-slate-800">
      <BrowserRouter>
        <Header />
        <div className="flex justify-center  w-[100%] bg-slate-800 pt-16">
          <Routes>
            <Route path="/" element={<Movies />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Movies" element={<Movies />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Trending" element={<Trending />} />
            <Route path="/Popular" element={<Popular />} />
            <Route path="/Help" element={<Help />} />
            <Route path="/TV" element={<TV />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
