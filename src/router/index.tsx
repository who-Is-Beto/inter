import {
  Outlet,
  Route,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";
import Login from "./routes/Login";
import Home from "./routes/Home";
import ProtectedRoute from "@/components/protectedRoute";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Outlet />}>
      <Route path="login" element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route index element={<Home />} />
      </Route>
      {/* <Route path="register" element={<Register />} /> */}
    </Route>
  )
);

export default router;
