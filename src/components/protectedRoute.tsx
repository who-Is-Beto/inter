import { FC, ReactNode } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "./ui/layout";

const ProtectedRoute: FC = (): ReactNode => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default ProtectedRoute;
