import { FC, ReactNode } from "react";
import Stepper from "../../components/stepper";
import views from "../../views/Welcome";
import Navbar from "../../components/navbar";

const Home: FC = (): ReactNode => {
  return (
    <>
      <Navbar />
      <Stepper views={views} />
    </>
  );
};

export default Home;
