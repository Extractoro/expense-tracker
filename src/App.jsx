import { Toaster } from "react-hot-toast";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import StartPage from "./pages/StartPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<StartPage />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
