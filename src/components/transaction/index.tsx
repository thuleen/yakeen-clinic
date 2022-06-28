import SubmissionSteps from "./SubmissionSteps";

type TnxFormContainerProps = {
activeStep: number;
handleNext: () => void;
handleBack: () => void;
}

const TnxFormContainer = (props: TnxFormContainerProps) => {
const { handleNext, handleBack, activeStep } = props;
  return (
    <>
      <SubmissionSteps handleNext={handleNext} handleBack={handleBack} activeStep={activeStep} />
    </>
  );
};
export default TnxFormContainer;
