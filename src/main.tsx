import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import theme from "./theme";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="https://thuleen.github.io/yaqeen-clinic/">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
