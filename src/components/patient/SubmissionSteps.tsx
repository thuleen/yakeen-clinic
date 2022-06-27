import * as React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import TagNo from "./TagNo";
import Patient from "./Patient";
import TestResult from "./TestResult";
import CapturePhoto from "./CapturePhoto";
import Summary from "./Summary";
import Submission from "./Submission";

const ranVerificationCode = () => {
  return Math.floor(1000000 + Math.random() * 9000000);
};

const steps = [
  {
    label: "Step1",
    formId: "submission.step1",
    description: `Test kit tag number`,
    component: (tagNo) => <TagNo tagNo={tagNo} />,
  },
  {
    label: "Step2",
    formId: "submission.step2",
    description: `Patient details`,
    component: () => <Patient />,
  },
  {
    label: "Step3",
    formId: "submission.step3",
    description: `Key in the results`,
    component: () => <TestResult />,
  },
  {
    label: "Step4",
    formId: "submission.step4",
    description: `Photo evidence`,
    component: () => <CapturePhoto />,
  },
  {
    label: "Step5",
    formId: "submission.step5",
    description: `Confirm to submit`,
    component: (tagNo) => <Summary tagNo={tagNo} />,
  },
  {
    label: "Step6",
    formId: "submission.step6",
    description: `Submission`,
    component: () => <Submission />,
  },
];

export default function SubmissionSteps() {
  const theme = useTheme();
  const maxSteps = steps.length;

  const [activeStep, setActiveStep] = React.useState<number>(0);
  const [tagNo, setTagNo] = React.useState<string>(ranVerificationCode());

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (activeStep > 0) setActiveStep((prev) => prev - 1);
  };

  return (
    <Box sx={{ flexGrow: 1, width: "100%" }}>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            disabled={activeStep === maxSteps - 1}
            // type="submit"
            onClick={handleNext}
            form={steps[activeStep].formId}
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
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
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
          {steps[activeStep].description}{" "}
          {activeStep === 0 ? null : `(${tagNo})`}
        </Typography>
      </Paper>
      <Box sx={{ flexGrow: 1, width: "100%" }}>
        {steps[activeStep].component(tagNo)}
      </Box>
    </Box>
  );
}
