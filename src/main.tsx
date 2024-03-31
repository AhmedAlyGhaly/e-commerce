import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { App } from './App.tsx';
import './locales/i18n.ts';
import { CreateCart, ErrorPage, Home, MyOrders } from './pages';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "CreateCart",
        element: <CreateCart />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "MyOrder",
        element: <MyOrders />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
