import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import MenuAppBar from "../components/appbar";
import TnxFormContainer from "./transaction";
import TxnDetails from "./transaction/TxnDetails";

type TransactionPageProps = {};

const TransactionPage = (props: TransactionPageProps) => {
  const navigate = useNavigate();
  const { uriTagNo } = useParams();
  const [activeStep, setActiveStep] = React.useState<number>(0);

  const handleNew = () => {
    setActiveStep(0);
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
        <TxnDetails tagNo={uriTagNo} />
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

export default TransactionPage;
