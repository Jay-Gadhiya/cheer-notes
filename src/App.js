import "./App.css";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./Pages/Landing-page/LandingPage";
import { Login } from "./Pages/Authentication/Login";
import { Signup } from "./Pages/Authentication/Signup";
import { Archive } from "./Pages/Archive-Page/Archive";
import { TrashPage } from "./Pages/Trash-Page/trash";
import { HomePage } from "./Pages/Home/Home";
import { Tags } from "./Pages/Tags/Tags";

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/trash" element={<TrashPage />} />
          <Route path="/tags" element={<Tags />} />
        </Routes>
    </div>
  );
}

export default App;
