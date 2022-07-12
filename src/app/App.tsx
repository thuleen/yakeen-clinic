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
import { useDispatch, useSelector } from "react-redux";
import logo from "../asset/img/yaqeen-logo.png";
import "./App.css";
import StartPage from "./StartPage";
import Dengue from "../dengue-testkit";
import SampleDetails from "../common/components/samples/Details";
import SampleList from "../common/components/samples/List";
import LogSignForm from "../common/components/login/";
import { AppState } from "../redux-saga/store";

type HomeProps = {
  toggleHome: () => void;
  toggleUpdate: () => void;
};

const Home = (props: HomeProps) => {
  const { toggleHome, toggleUpdate } = props;

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ marginBottom: "15rem" }}>
          <img src={logo} className="App-logo" />
          <Typography variant="body1" className="App-subheader">
            "keep evidence gathering & facts organised"
          </Typography>
          <div style={{ marginTop: "0.5rem" }}>
            <LogSignForm />
          </div>
        </div>
        <div style={{ color: "white" }}>
          <Typography variant="caption">
            Version. {import.meta.env.VITE_APP_VERSION}
          </Typography>
          <IconButton onClick={toggleUpdate}>
            <RedoIcon style={{ color: "white" }} />
          </IconButton>
        </div>
      </header>
    </div>
  );
};

function App() {
  const navigate = useNavigate();
  const { token } = useSelector((state: AppState) => state.app);

  const toggleHome = () => {
    navigate("/");
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

  if (token) {
    return (
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/sample/:tagNo" element={<SampleDetails />} />
        <Route path="/samples" element={<SampleList />} />
        <Route path="/dengue" element={<Dengue />} />
      </Routes>
    );
  }

  return <Home toggleHome={toggleHome} toggleUpdate={toggleUpdate} />;
}

export default App;
