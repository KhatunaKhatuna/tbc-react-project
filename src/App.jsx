import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom";
import Products from "./components/pages/products/Products";
import Home from "./components/pages/home/Home";
import Contact from "./components/pages/contact/Contact";

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#0e0e0e] ">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
