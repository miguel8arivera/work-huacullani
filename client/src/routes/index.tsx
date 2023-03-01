import { createBrowserRouter } from 'react-router-dom';
import { NavbarVertical } from '../common';
import ErrorPage from '../pages/ErrorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <NavbarVertical />,
    errorElement: <ErrorPage />,
  },
]);
