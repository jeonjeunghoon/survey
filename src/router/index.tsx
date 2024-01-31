import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from '../App';
import Editor from '../pages/Editor';
import Viewform from '../pages/Viewform';

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: 'editor',
          element: <Editor />,
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
