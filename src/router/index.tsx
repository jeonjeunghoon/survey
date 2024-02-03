import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from '../App';
import Form from '../pages/Form';
import Viewform from '../pages/Viewform';

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '',
          element: <Form />,
        },
        {
          path: 'viewform',
          element: <Viewform />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
