import React from "react";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

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
      <Alert icon={false}>Click test kit button to begin</Alert>
      <div style={{ height: "1rem" }} />
      <Button size="large" variant="contained" onClick={handleNew}>
        dengue duo igg/igm Ns1Ag test kit
      </Button>
    </div>
  );
};

export default StartPage;
