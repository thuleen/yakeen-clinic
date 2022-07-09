import Button from "@mui/material/Button";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import RedoIcon from "@mui/icons-material/Redo";
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
import SubmitPage from "./testdengue/SubmitPage";
import TxnList from "./testdengue/TxnList";
import LoginForm from "./common/components/login/LoginForm";

const APPNAME = "YAQEEN";

type HomeProps = {
  toggleHome: () => void;
  toggleUpdate: () => void;
};

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const Home = (props: HomeProps) => {
  const { toggleHome, toggleUpdate } = props;

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ marginBottom: "15rem" }}>
          <Typography variant="h3">{APPNAME}</Typography>
          <Typography variant="h6">
            Redefine Diagnostic Information System
          </Typography>
          <div style={{ marginTop: "0.5rem" }}>
            <LoginForm handleDummyLogin={toggleHome} />
          </div>
        </div>
        <div style={{ color: "white" }}>
          Ver. {import.meta.env.VITE_APP_VERSION}
          <IconButton onClick={toggleUpdate}>
            <RedoIcon style={{ color: "white" }} />
          </IconButton>
        </div>
      </header>
    </div>
  );
};

function App() {
  // const [windowDimensions, setWindowDimensions] = useState(
  //   getWindowDimensions()
  // );
  const navigate = useNavigate();

  const toggleHome = () => {
    navigate("/new-txn");
  };

  const toggleUpdate = () => {
    if ("caches" in window) {
      caches.keys().then((names) => {
        names.forEach((name) => {
          caches.delete(name);
        });
        window.location.reload();
      });
    }
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Home toggleHome={toggleHome} toggleUpdate={toggleUpdate} />}
      />
      <Route path="/new-txn" element={<SubmitPage />} />
      <Route path="/transaction/:uriTagNo/:pending" element={<SubmitPage />} />
      <Route path="/transactions" element={<TxnList />} />
    </Routes>
  );
}

export default App;
