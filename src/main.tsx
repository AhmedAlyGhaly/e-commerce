import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { App } from './App.tsx';
import './locales/i18n.ts';
import { AllCategories, Contact, ErrorPage, Home, MyOrders } from './pages';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "MyOrder",
        element: <MyOrders />,
      },
      {
        path: "AllCategories",
        element: <AllCategories />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
