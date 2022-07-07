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
    setC(false);
    setM(false);
    setG(false);
    setCc(false);
    setT(false);
  };

  return (
    <div style={{ marginTop: "0rem", marginBottom: "1rem" }}>
      <div style={c ? styles.c : styles.c_off} onClick={toggleC} />
      <div style={m ? styles.m : styles.m_off} onClick={toggleM} />
      <div style={g ? styles.g : styles.g_off} onClick={toggleG} />
      <div style={cC ? styles.cC : styles.cC_off} onClick={toggleCc} />
      <div style={t ? styles.t : styles.t_off} onClick={toggleT} />
      <img src={testKit} style={styles.testKit} onClick={handleInterpret} />
    </div>
  );
};
export default Testkit;
