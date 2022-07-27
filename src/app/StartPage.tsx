import React from "react";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

const TESTKIT_NAME = import.meta.env.VITE_APP_DENGUE_TESTKIT_NAME;

type StartPageProps = {
  handleNew: () => void;
};

const StartPage = (props: StartPageProps) => {
  const { handleNew } = props;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}
    >
      <Alert icon={false}>Click test kit button below to begin</Alert>
      <div style={{ height: "1rem" }} />
      <Button size="large" variant="contained" onClick={handleNew}>
        {TESTKIT_NAME}
      </Button>
    </div>
  );
};

export default StartPage;
