import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import Button from "@mui/material/Button";
import styles from "./styles";
import Testkit from "./Testkit";
import Info from "../../common/components/alert/Info";
import PreviewDlg from "../../common/components/photo/PreviewDlg";
import { DengueState } from "../../store.ts";

type FormProps = {
  formId: string;
  tagNo: string;
};

const TestResult = (props: FormProps) => {
  const { tagNo } = props;
  const { samples, selectSmplPhoto } = useSelector(
    (state: DengueState) => state.dengue
  );
  const [openPreview, setOpenPreview] = React.useState<boolean>(false);

  const togglePreview = () => {
    setOpenPreview((old) => !old);
  };

  const sample = samples.filter((i) => i.tagNo === tagNo);

  return (
    <div style={styles.formContainer}>
      <PreviewDlg
        open={openPreview}
        handleClose={togglePreview}
        photoDataUri={selectSmplPhoto}
      />
      <Testkit tagNo={tagNo} />
      <Info sample={sample[0]} />
      <div style={{ marginTop: "1rem" }}>
        <Button
          variant="outlined"
          color="primary"
          startIcon={<InsertPhotoIcon />}
          onClick={togglePreview}
        >
          {tagNo}
        </Button>
      </div>
    </div>
  );
};

export default TestResult;
