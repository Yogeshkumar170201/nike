import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import About from "./components/About";

const App = () => {
  return (
    <main className="min-h-screen bg-gradient-to-r from-[#edf2f7] to-[#b3d0f2] ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </main>
  );
}

export default App;