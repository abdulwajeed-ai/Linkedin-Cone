import InitialNavbar from "./components/initial-navbar/initial-navbar";
import LandingPage from "./pages/landingPage";
import Footer from "./components/footer/footer";
import { Route, Routes } from "react-router-dom";
import Singup from "./pages/singup/signup";
import Login from "./pages/login/login";
import MainNavbar from "./components/main-navbar/mainNavbar";
import Feeds from "./pages/feeds/feeds";

const App = () => {
  const isLoggin = true;
  return (
    <div className="bg-gray-100 w-[100%] box-border h-screen">
      {isLoggin? <MainNavbar/> : <InitialNavbar/>}
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/signup" element={<Singup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/feeds" element={<Feeds/>}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
