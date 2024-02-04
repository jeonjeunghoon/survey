import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from '../App';
import Form from '../pages/Form';
import Viewform from '../pages/Viewform';
import Reply from '../pages/Reply';

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
        {
          path: 'reply',
          element: <Reply />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
