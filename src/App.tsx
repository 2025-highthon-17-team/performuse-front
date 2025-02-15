import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Root from "./pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
