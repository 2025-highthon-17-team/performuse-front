import { BrowserRouter, Route, Routes } from "react-router-dom";
import Root from "./pages";
import LoginPage from "./pages/auth/login/login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
