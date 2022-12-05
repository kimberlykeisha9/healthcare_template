import "./App.css";
import Menu from "./components/menu";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/homepage";
import Login from "./components/login";

function App() {
  return (
    <div>
      <Menu />
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
