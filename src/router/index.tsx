import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../views/home';
import ErrorPage from '../views/error-page';
import DefaultLayout from '../layouts/default';
import SearchPage from '../views/search/index';

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/search/:keywords",
        element: <SearchPage />,
      },
    ],
  },
]);

export default router