import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/login/login";
import { Route, Routes } from "react-router-dom";
import Search from "./pages/search/search";
import History from "./pages/history/history";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/search" element={<Search />} />
      <Route path="/history" element={<History />} />
    </Routes>
  );
}

export default App;
