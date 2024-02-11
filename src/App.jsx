import { Toaster } from "react-hot-toast";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import StartPage from "./pages/StartPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
