import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

const Login: FC = (): ReactNode => {
  return (
    <div>
      Login
      <Link className="bg-deepPurple" to={"/"}>
        login
      </Link>
    </div>
  );
};

export default Login;