import React, { useState } from "react";
import RedoIcon from "@mui/icons-material/Redo";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles";
import testKit from "../../asset/img/dengue-testkit-diagram.png";
import { DengueState } from "../../redux-saga/store";
import { interpretTest } from "../redux-saga/actions";

type TestkitProps = {
  tagNo: string;
};

const Testkit = (props: TestkitProps) => {
  const { tagNo } = props;
  const dispatch = useDispatch();
  const interpret = (payload: any) => dispatch(interpretTest(payload));

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
      <IconButton
        style={styles.btnReInterpret}
        color="primary"
        onClick={handleInterpret}
      >
        <RedoIcon />
      </IconButton>
    </div>
  );
};
export default Testkit;
