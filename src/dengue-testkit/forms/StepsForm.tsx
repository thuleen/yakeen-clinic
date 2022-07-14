import * as React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Patient from "./Patient";
import TestResult from "./TestResult";
import CapturePhoto from "./CapturePhoto";
import Summary from "./Summary";
import Submission from "./Submission";
import { DengueSample } from "../redux-saga/payload-type";

type StepsFormProps = {
  sample: DengueSample;
  handleBack: () => void;
};

export default function StepsForm(props: StepsFormProps) {
  const theme = useTheme();
  const { sample, handleBack } = props;

  const steps = [
    {
      label: "Step0",
      formId: "submission.step0",
      description: `Tag # ${sample.tagNo}`,
      component: () => {
        return <Patient formId="submission.step0" />;
      },
    },
    {
      label: "Step1",
      formId: "submission.step1",
      description: `Photo evidence`,
      component: () => <CapturePhoto formId="submission.step1" />,
    },
    {
      label: "Step2",
      formId: "submission.step2",
      description: `Click C/M/G/C/T bands below`,
      component: () => <TestResult formId="submission.step2" />,
    },
    {
      label: "Step3",
      formId: "submission.step3",
      description: `Summary`,
      component: () => <Summary formId="submission.step3" />,
    },
  ];

  const maxSteps = steps.length;
  const { tagNo, lastActiveStep } = sample;
  return (
    <Box sx={{ flexGrow: 1, width: "100%" }}>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={lastActiveStep}
        nextButton={
          <Button
            size="large"
            disabled={lastActiveStep === maxSteps - 1}
            type="submit"
            form={steps[lastActiveStep].formId}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            onClick={handleBack}
            size="large"
            disabled={lastActiveStep === maxSteps - 1 || lastActiveStep === 0}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          p: 0,
          bgcolor: "background.default",
        }}
      >
        <Typography variant="h6" color="primary" style={{ marginLeft: "1rem" }}>
          {steps[lastActiveStep].description}{" "}
          {lastActiveStep === 0 ? null : `(${tagNo})`}
        </Typography>
      </Paper>
      <Box sx={{ flexGrow: 1, width: "100%" }}>
        {steps[lastActiveStep].component()}
      </Box>
    </Box>
  );
}
