import { Outlet, createBrowserRouter } from 'react-router-dom';
import Form from '../pages/form/form';
import Products from '../pages/products/products';
import ProductDetails from '../pages/productDetails/productDetails';
import NotFound from '../pages/notFound/notFound';

function WithoutLayout() {
  return <Outlet />;
}

const router = createBrowserRouter([
  {
    element: <WithoutLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/form',
        element: <Form />,
      },
      {
        path: '/',
        element: <Products />,
      },
      {
        path: '/Products/:cardNumber',
        element: <ProductDetails />,
      },
    ],
  },
]);

export default router;
