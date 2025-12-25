import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './ui/Home';
import Menu, { loader as menuLoader } from './features/menu/Menu';
import Order, { loader as orderLoader } from './features/order/Order';
import { action as orderAction } from './features/order/UpdateOrder';
import CreateOrder, {
  action as CreateOrderAction,
} from './features/order/CreateOrder';
import Cart from './features/cart/Cart';
import AppLayout from './ui/AppLayout';
import Error from './ui/Error';
const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: orderAction,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: CreateOrderAction,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
