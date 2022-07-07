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
import SubmitPage from "./testdengue/SubmitPage";
import TxnList from "./testdengue/TxnList";

const APPNAME = "YAQEEN";

type HomeProps = {
  toggleHome: () => void;
};

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const Home = (props: HomeProps) => {
  const { toggleHome } = props;

  return (
    <div className="App" onClick={toggleHome}>
      <header className="App-header">
        <div style={{ marginBottom: "15rem" }}>
          <Typography variant="h3">{APPNAME}</Typography>
          <div style={{ marginTop: "1.5rem", marginBottom: "1.5rem" }}>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <Typography variant="h6">
            Redefine Diagnostic Information System
          </Typography>
          <Typography variant="caption">
            (Prototype - no actual data)
          </Typography>
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
    console.log("navigate!");
    navigate("/new-txn");
  };

  return (
    <Routes>
      <Route path="/" element={<Home toggleHome={toggleHome} />} />
      <Route path="/new-txn" element={<SubmitPage />} />
      <Route path="/transaction/:uriTagNo/:pending" element={<SubmitPage />} />
      <Route path="/transactions" element={<TxnList />} />
    </Routes>
  );
}

export default App;
