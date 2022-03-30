import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { LandingPage } from "./Pages/Landing-page/LandingPage";
import { HomePage } from "./Pages/Home/Home";
import { Login } from "./Pages/Authentication/Login";
import { Signup } from "./Pages/Authentication/Signup";
import { Archive } from "./Pages/Archive-Page/Archive";

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/archive" element={<Archive />} />
        </Routes>
    </div>
  );
}

export default App;
