import "./App.css";
import Header from "./components/header/Header";
import Content from "./components/Content";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#0e0e0e] ">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
