import {
  Outlet,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Login from './routes/Login';
import Home from './routes/Home';
import ProtectedRoute from '@/components/protectedRoute';
import { Routes } from '@/constants';
import Dashboard from './routes/Dashboard';
import Tienda from './routes/Tienda';
import Config from './routes/Config';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={Routes.home} element={<Outlet />}>
      <Route path={Routes.login} element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route index element={<Home />} />
        <Route path={Routes.dashboard} element={<Dashboard />} />
        <Route path={Routes.tienda} element={<Tienda />} />
        <Route path={Routes.config} element={<Config />} />
      </Route>
      {/* <Route path="register" element={<Register />} /> */}
    </Route>,
  ),
);

export default router;
