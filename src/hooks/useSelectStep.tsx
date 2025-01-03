import { useState } from "react";

declare type UseStepProps = {
  viewsLenght: number;
};
const useStep = ({ viewsLenght }: UseStepProps) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const showNextStepButton = currentStep === viewsLenght - 1;

  const activeStep = (index: number) => {
    return currentStep === index
      ? "bg-primary-300 animate-[size-rebound_300ms_ease-in-out]"
      : "bg-white-300";
  };

  const handleStepChange = (index: number): void => {
    setCurrentStep(index);
  };

  const setNextStep = (): void => {
    if (showNextStepButton) return;
    setCurrentStep((prev) => prev + 1);
  };

  return {
    currentStep,
    handleStepChange,
    activeStep,
    setNextStep,
    showNextStepButton
  };
};

export default useStep;
