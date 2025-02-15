import { BrowserRouter, Route, Routes } from "react-router-dom";
import Root from "./pages";
import JoinPage from "./pages/join";
import PointPage from "./pages/point";
import ProfilePage from "./pages/profile";
import Navigationbar from "./components/navigator/Navigationbar";
import Backbutton from "./components/button/backbutton/Backbutton";
import LoginPage from "./pages/auth/login/login";
import IdPage from "./pages/auth/id/id";
import PwPage from "./pages/auth/pw/pw";
import EmailPage from "./pages/auth/email/email";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Backbutton />
        <Routes>
          <Route path="/home" element={<Root />} />
          <Route path="/qr" element={<JoinPage />} />
          <Route path="/point" element={<PointPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<div>Not Found</div>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/id" element={<IdPage />} />
          <Route path="/pw" element={<PwPage />} />
          <Route path="/email" element={<EmailPage />} />
        </Routes>
      </BrowserRouter>
      <Navigationbar />
    </div>
  );
}

export default App;
