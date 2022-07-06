import React, { useState } from "react";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles";
import testKit from "../../asset/img/testkit-diagram.png";
import { DengueState } from "../../store";
import {
  decreaseAsync,
  decreaseCounter,
  increaseAsync,
  increaseCounter,
} from "../redux-saga/actions";

const Testkit = () => {
  const { count } = useSelector((state: DengueState) => state.dengue);
  const dispatch = useDispatch();
  const increase = () => dispatch(increaseCounter());
  const decrease = () => dispatch(decreaseCounter());
  const delayIncrease = () => dispatch(increaseAsync());
  const delayDecrease = () => dispatch(decreaseAsync());

  const [g, setG] = useState<boolean>(false);
  const [m, setM] = useState<boolean>(false);
  const [c, setC] = useState<boolean>(false);

  const toggleG = () => {
    setG((prevVal) => !prevVal);
  };

  const toggleM = () => {
    setM((prevVal) => !prevVal);
  };

  const toggleC = () => {
    setC((prevVal) => !prevVal);
  };

  return (
    <div style={{ marginTop: "1.25rem" }}>
      <div style={g ? styles.g : styles.g_off} onClick={toggleG} />
      <div style={m ? styles.m : styles.m_off} onClick={toggleM} />
      <div style={c ? styles.c : styles.c_off} onClick={toggleC} />
      <div style={styles.testKit}>
        <img src={testKit} />
      </div>
      <div style={{ textAlign: "center", width: "95%", margin: "1rem" }}>
        <Button variant="contained" color="primary" onClick={increase}>
          interpret {count}
        </Button>
      </div>
    </div>
  );
};
export default Testkit;
