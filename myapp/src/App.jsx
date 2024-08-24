import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Navbar from "./components/21-08-24/Navbar";
import Counter from "./components/21-08-24/Counter";

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </>
  );
}

export default App;