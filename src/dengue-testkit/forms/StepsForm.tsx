import * as React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import IconButton from "@mui/material/IconButton";
import ShareIcon from "@mui/icons-material/Share";
import Patient from "./Patient";
import TestResult from "./TestResult";
import CapturePhoto from "./CapturePhoto";
import Summary from "./Summary";
import Submission from "./Submission";
import { DengueSample } from "../redux-saga/payload-type";

type StepsFormProps = {
  sample: DengueSample;
  handleBack: () => void;
  toggleShare: () => void;
};

export default function StepsForm(props: StepsFormProps) {
  const theme = useTheme();
  const { sample, handleBack, toggleShare } = props;

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
      description: `Test kit photo with tag #`,
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
      description: `Test result`,
      component: () => <Summary formId="submission.step3" />,
    },
  ];

  const maxSteps = steps.length;
  const { tagNo, lastActiveStep } = sample;
  return (
    <Box sx={{ flexGrow: 1, width: "100%" }}>
      {lastActiveStep === maxSteps - 1 ? null : (
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
      )}
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
        {lastActiveStep === maxSteps - 1 ? (
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <div style={{ flexGrow: 1 }}>
              <Typography
                variant="h6"
                color="primary"
                style={{ marginTop: "1rem", marginLeft: "1rem" }}
              >
                {steps[lastActiveStep].description}{" "}
                {lastActiveStep === 0 ? null : `${tagNo}`}
              </Typography>
            </div>
            <IconButton style={{ margin: "0.7rem" }} onClick={toggleShare}>
              <ShareIcon style={{ color: "#079992" }} />
            </IconButton>
          </div>
        ) : (
          <Typography
            variant="h6"
            color="primary"
            style={{ marginLeft: "1rem" }}
          >
            {steps[lastActiveStep].description}{" "}
            {lastActiveStep === 0 ? null : `${tagNo}`}
          </Typography>
        )}
      </Paper>
      <Box sx={{ flexGrow: 1, width: "100%" }}>
        {steps[lastActiveStep].component()}
      </Box>
    </Box>
  );
}
