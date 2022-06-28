import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./styles";

type TagNoProps = {
  tagNo: string;
};

const Submission = (props: TagNoProps) => {
  const navigate = useNavigate();
  return (
    <div style={styles.container}>
      <div style={{ textAlign: "center" }}>
        <Button variant="contained" onClick={() => navigate("/transactions")}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Submission;
