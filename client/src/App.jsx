import InitialNavbar from "./components/initial-navbar/initial-navbar";
import LandingPage from "./pages/landingPage";
import Footer from "./components/footer/footer";
import { Route, Routes } from "react-router-dom";
import Singup from "./pages/singup/signup";
import Login from "./pages/login/login";

const App = () => {
  return (
    <div className="bg-gray-100 w-[100%] box-border h-screen">
      <InitialNavbar />
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/signup" element={<Singup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
