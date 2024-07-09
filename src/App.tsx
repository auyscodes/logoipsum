import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <>
      <div className="bg-blue-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
