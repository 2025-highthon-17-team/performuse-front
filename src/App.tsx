import { BrowserRouter, Route, Routes } from "react-router-dom";
import Root from "./pages";
import JoinPage from "./pages/join";
import PointPage from "./pages/point";
import ProfilePage from "./pages/profile";
import Navigationbar from "./components/navigator/Navigationbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Root />} />
          <Route path="/qr" element={<JoinPage />} />
          <Route path="/point" element={<PointPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </BrowserRouter>
      <Navigationbar />
    </div>
  );
}

export default App;
