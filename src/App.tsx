import { FC, ReactNode } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";

const App: FC = (): ReactNode => {
  return <RouterProvider router={router} />;
};

export default App;
