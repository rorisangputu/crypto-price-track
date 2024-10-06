import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Coin from "./pages/Coin"
import Footer from "./components/Footer"
import WhyUs from "./components/WhyUs"
import Download from "./components/Download"
import { useLocation } from "react-router-dom";



const App = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:coinId" element={<Coin />} />
      </Routes>
      {isHomePage && (
        <>
          <WhyUs />
          <Download />
        </>
      )}
      <Footer />
    </div>
  )
}

export default App
