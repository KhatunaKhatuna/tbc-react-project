import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom";
import Products from "./components/pages/products/Products";
import Home from "./components/pages/home/Home";
import Contact from "./components/pages/contact/Contact";
import Profile from "./components/pages/profile/Profile";
import Blog from "./components/pages/blog/Blog";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0e0e0e] ">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
