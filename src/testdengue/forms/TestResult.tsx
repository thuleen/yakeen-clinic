import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles";
import Testkit from "./Testkit";
import Info from "../../common/components/alert/Info";
import { DengueState } from "../../store.ts";

type FormProps = {
  formId: string;
  tagNo: string;
};

const TestResult = (props: FormProps) => {
  const { tagNo } = props;
  const { interpretations } = useSelector((state: DengueState) => state.dengue);

  const interpretation = interpretations.filter((i) => i.tagNo === tagNo);

  return (
    <div style={styles.formContainer}>
      <Testkit tagNo={tagNo} />
      <Info interpretation={interpretation[0]} />
    </div>
  );
};

export default TestResult;
