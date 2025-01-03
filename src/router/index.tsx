import {
  Route,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";
import Login from "./routes/Login";
import Home from "./routes/Home";
import Navbar from "../components/navbar";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      {/* <Route path="register" element={<Register />} /> */}
    </Route>
  )
);

export default router;
