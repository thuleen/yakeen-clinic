import React from "react";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

const LogSignForm = () => {
  const [showRegistrationForm, setShowRegistrationForm] =
    React.useState<boolean>(false);

  const toggleForm = () => {
    setShowRegistrationForm((val) => !val);
  };

  if (showRegistrationForm) {
    return <RegisterForm toggleForm={toggleForm} />;
  }
  return <LoginForm toggleForm={toggleForm} />;
};

export default LogSignForm;
