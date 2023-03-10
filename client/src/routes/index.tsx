import { createBrowserRouter } from 'react-router-dom';
import { NavbarVertical } from '../common';
import { ProductsFormPage } from '../components/form';
import ErrorPage from '../pages/ErrorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <NavbarVertical />,

    errorElement: <ErrorPage />,
  },
  {
    path: 'products',
    element: <ProductsFormPage />,
  },
]);
