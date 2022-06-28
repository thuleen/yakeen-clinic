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
import TransactionPage from "./components/TransactionPage";
import TransactionsPage from "./components/TransactionsPage";

const APPNAME = "YAQEEN";

type HomeProps = {
  toggleHome: () => void;
};

const Home = (props: HomeProps) => {
  const { toggleHome } = props;

  return (
    <div className="App" onClick={toggleHome}>
      <header className="App-header">
        <div style={{ marginBottom: "15rem" }}>
          <Typography variant="h3">{APPNAME}</Typography>
          <img src={logo} className="App-logo" alt="logo" />
          <Typography variant="h6">
            Redefine Diagnostic Information System
          </Typography>
        </div>
      </header>
    </div>
  );
};

function App() {
  const navigate = useNavigate();

  const toggleHome = () => {
    console.log("navigate!");
    navigate("/new-txn");
  };

  return (
    <Routes>
      <Route path="/" element={<Home toggleHome={toggleHome} />} />
      <Route path="/new-txn" element={<TransactionPage />} />
      <Route path="/transaction/:uriTagNo" element={<TransactionPage />} />
      <Route
        path="/transactions"
        element={<TransactionsPage toggleHome={toggleHome} />}
      />
    </Routes>
  );
}

export default App;
