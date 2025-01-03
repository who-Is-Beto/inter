import { FC, Fragment, ReactNode } from "react";
import useStep from "../../hooks/useSelectStep";
import { useTranslation } from "react-i18next";

declare type StepperProps = {
  views: Array<ReactNode>;
};

const Stepper: FC<StepperProps> = ({ views }): ReactNode => {
  const {
    currentStep,
    handleStepChange,
    activeStep,
    setNextStep,
    showNextStepButton
  } = useStep({
    viewsLenght: views.length
  });
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <section>{views[currentStep]}</section>
      <div className="flex gap-2 justify-center items-center w-full">
        {views.map(
          (_, index): ReactNode => (
            <Fragment key={index}>
              <span
                onClick={() => handleStepChange(index)}
                className={`w-6 h-6 rounded-full cursor-pointer duration-200 ${activeStep(
                  index
                )}`}
              ></span>
              {index < views.length - 1 && (
                <div className={`h-1 w-1/${views.length} bg-transparent`}></div>
              )}
            </Fragment>
          )
        )}
      </div>
      {!showNextStepButton && (
        <button onClick={() => setNextStep()}>
          {t("stepper.buttons.next")}
        </button>
      )}
    </div>
  );
};

export default Stepper;
