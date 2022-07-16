import React, { useState } from "react";
import RedoIcon from "@mui/icons-material/Redo";
import IconButton from "@mui/material/IconButton";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles";
import testKit from "../../asset/img/dengue-testkit-diagram.jpg";
import { DengueSample } from "../redux-saga/payload-type";

export enum Indicator {
  C,
  IGG,
  IGM,
  CC,
  NS1AG,
}

export type IndicatorValues = {
  c: boolean;
  igM: boolean;
  igG: boolean;
  cC: boolean;
  ns1Ag: boolean;
};

type TestkitProps = {
  sample: DengueSample;
  togglePreview: () => void;
  toggleInterpret: () => void;
  toggle: (i: Indicator) => void;
  indicators: IndicatorValues;
};

const Testkit = (props: TestkitProps) => {
  const { sample, togglePreview, toggleInterpret, toggle, indicators } = props;
  const { c, igM, igG, cC, ns1Ag } = indicators;
  const { tagNo } = sample;

  return (
    <div style={{ marginTop: "0rem", marginBottom: "1rem" }}>
      <div
        style={c ? styles.c : styles.c_off}
        onClick={() => toggle(Indicator.C)}
      />
      <div
        style={igM ? styles.m : styles.m_off}
        onClick={() => toggle(Indicator.IGM)}
      />
      <div
        style={igG ? styles.g : styles.g_off}
        onClick={() => toggle(Indicator.IGG)}
      />
      <div
        style={cC ? styles.cC : styles.cC_off}
        onClick={() => toggle(Indicator.CC)}
      />
      <div
        style={ns1Ag ? styles.t : styles.t_off}
        onClick={() => toggle(Indicator.NS1AG)}
      />
      <img src={testKit} style={styles.testKit} onClick={toggleInterpret} />
      <div style={{ display: "flex", flexDirection: "row", marginTop: "1rem" }}>
        <Button
          startIcon={<RedoIcon />}
          variant="contained"
          color="primary"
          onClick={toggleInterpret}
        >
          interpret
        </Button>
        <div style={{ width: "0.3rem" }} />
        <Button
          variant="outlined"
          color="primary"
          startIcon={<InsertPhotoIcon />}
          onClick={togglePreview}
        >
          evidence {tagNo}
        </Button>
      </div>
    </div>
  );
};
export default Testkit;
