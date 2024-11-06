import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import MainHome from "./pages/home/MainHome";
import MainCertificate from "./pages/Certificate/MainCertificate";
import MainAbout from "./pages/about-us/MainAbout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="/certificate" element={<MainCertificate />} />
          <Route path="/about-us" element={<MainAbout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
