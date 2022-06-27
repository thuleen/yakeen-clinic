import { useState } from "react";
import Typography from "@mui/material/Typography";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import PatientPage from "./components/PatientPage";

const APPNAME = import.meta.env.VITE_APPNAME;

const Home = () => {
  const navigate = useNavigate();

  const toggleHome = () => {
    console.log("navigate!");
    navigate("/patient");
  };

  return (
    <div className="App" onClick={toggleHome}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Typography variant="h3">{APPNAME}</Typography>
        <Typography variant="h6">
          Medical Diagnostic Information System
        </Typography>
      </header>
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/patient" element={<PatientPage />} />
    </Routes>
  );
}

export default App;
