import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import MenuAppBar from "../appbar";
import TnxFormContainer from "./index";
import TxnDetails from "./TxnDetails";

type SubmitPageProps = {};

const SubmitPage = (props: SubmitPageProps) => {
  const navigate = useNavigate();
  const { uriTagNo, pending } = useParams();
  const [activeStep, setActiveStep] = React.useState<number>(2);

  const handleNew = () => {
    setActiveStep(0);
    navigate("/new-txn");
  };
  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (activeStep > 0) setActiveStep((prev) => prev - 1);
  };

  if (uriTagNo) {
    return (
      <>
        <MenuAppBar handleNew={handleNew} />
        <TxnDetails tagNo={uriTagNo} pending={pending ? pending : "false"} />
      </>
    );
  }

  return (
    <>
      <MenuAppBar handleNew={handleNew} />
      <TnxFormContainer
        handleNext={handleNext}
        handleBack={handleBack}
        activeStep={activeStep}
      />
    </>
  );
};

export default SubmitPage;
