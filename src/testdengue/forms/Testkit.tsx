import React, { useState } from "react";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles";
import testKit from "../../asset/img/dengue-testkit-diagram.png";
import { DengueState } from "../../store";
import {
  interpretTest,
  decreaseAsync,
  decreaseCounter,
  increaseAsync,
  increaseCounter,
} from "../redux-saga/actions";
import { InterpretTestPayload } from "../redux-saga/payload-types";

type TestkitProps = {
  tagNo: string;
};

const Testkit = (props: TestkitProps) => {
  const { tagNo } = props;
  const { count, interpretations } = useSelector(
    (state: DengueState) => state.dengue
  );
  const dispatch = useDispatch();
  const increase = () => dispatch(increaseCounter());
  const decrease = () => dispatch(decreaseCounter());
  const interpret = (payload: InterpretTestPayload) =>
    dispatch(interpretTest(payload));
  const delayIncrease = () => dispatch(increaseAsync());
  const delayDecrease = () => dispatch(decreaseAsync());

  const [c, setC] = useState<boolean>(false);
  const [m, setM] = useState<boolean>(false);
  const [g, setG] = useState<boolean>(false);
  //NS1 Ag
  const [cC, setCc] = useState<boolean>(false);
  const [t, setT] = useState<boolean>(false);

  const handleInterpret = () => {
    interpret({
      tagNo: tagNo,
      c: c,
      igM: m,
      igG: g,
      cC: cC,
      ns1Ag: t,
    });
  };

  const toggleG = () => {
    setG((prevVal) => !prevVal);
    setCc((prevVal) => !prevVal);
    setCc((prevVal) => !prevVal);
  };

  const toggleM = () => {
    setM((prevVal) => !prevVal);
  };

  const toggleC = () => {
    setC((prevVal) => !prevVal);
  };

  const toggleCc = () => {
    setCc((prevVal) => !prevVal);
  };

  const toggleT = () => {
    setT((prevVal) => !prevVal);
  };

  const toggleReset = () => {
    setC((prevVal) => !prevVal);
    setM((prevVal) => !prevVal);
    setG((prevVal) => !prevVal);
    setCc((prevVal) => !prevVal);
    setT((prevVal) => !prevVal);
  };

  return (
    <div style={{ marginTop: "0rem" }}>
      <div style={c ? styles.c : styles.c_off} onClick={toggleC} />
      <div style={m ? styles.m : styles.m_off} onClick={toggleM} />
      <div style={g ? styles.g : styles.g_off} onClick={toggleG} />
      <div style={cC ? styles.cC : styles.cC_off} onClick={toggleCc} />
      <div style={t ? styles.t : styles.t_off} onClick={toggleT} />
      <div
        style={styles.testKit}
        onClick={() => {
          // Interpret
          handleInterpret();
        }}
      >
        <img src={testKit} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "95%",
          marginTop: "0.3rem",
          marginBottom: "0.5rem",
        }}
      >
        <Button
          size="small"
          variant="outlined"
          color="primary"
          onClick={toggleReset}
        >
          clear
        </Button>
        <Divider style={{ width: "0.5rem" }} />
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={handleInterpret}
          // onClick={increase}
        >
          interpret
        </Button>
      </div>
    </div>
  );
};
export default Testkit;
