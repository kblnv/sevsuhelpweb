import { Routes, Route } from "react-router-dom";
import { StudentsPage } from "./pages/StudentsPage/StudentsPage";
import { SOSPage } from "./pages/SOSPage/SOSPage";
import { Header } from "./components/Header/Header";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<StudentsPage />} />
        <Route path="/sos" element={<SOSPage />} />
      </Routes>
    </>
  );
}

export default App;
