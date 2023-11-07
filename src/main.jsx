import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import DisplayLayout from './components/DisplayLayout';
import Login from './components/Login';
import Register from './components/Register';
import RootLayout from './components/RootLayout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <DisplayLayout></DisplayLayout>,
  },
  {
    path:'/login',
    element:<Login></Login>
  },
  {
    path:'/register',
    element:<Register></Register>
  },
  {
    path:'/root',
    element:<RootLayout></RootLayout>,
    children:[
      {
        path:'/root',
        element:<Home></Home>
      },
    ]
  },
  

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
