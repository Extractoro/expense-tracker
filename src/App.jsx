import { Toaster } from "react-hot-toast";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import StartPage from "./pages/StartPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import PublicRoute from "./utils/PublicRoute";
import PrivateRoute from "./utils/PrivateRoute";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PublicRoute />}>
          <Route path="/" element={<StartPage />} />
        </Route>
        <Route path="/" element={<PublicRoute restricted />}>
          <Route path="/register" element={<RegisterPage />} />
        </Route>
        <Route path="/" element={<PublicRoute restricted />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route path="/" element={<PrivateRoute restricted />}>
          <Route path="/home" element={<HomePage />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
