import { FC, ReactNode } from "react";
import Stepper from "../../components/stepper";

const views: ReactNode[] = [
  <div>Step 1</div>,
  <div>Step 2</div>,
  <div>Step 3</div>,
  <div>Step 4</div>,
  <div>Step 5</div>,
  <div>Step 6</div>,
  <div>Step 7</div>
];

const Home: FC = (): ReactNode => {
  return (
    <>
      <Stepper views={views} />
      <div></div>
    </>
  );
};

export default Home;
