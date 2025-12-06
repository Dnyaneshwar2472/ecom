import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home.jsx";
import Form from "./Form.jsx";
import Footer from "./Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <nav>
        <h2 className="welcome">Welcome</h2>
        <Link to="/">Home</Link>
        <Link to="/display">Disp</Link>
        <Link to="/form">Form</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/display" element={<App />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>

    <Footer />
  </StrictMode>
);
