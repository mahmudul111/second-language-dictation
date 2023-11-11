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
import AuthProvider from './providers/AuthProvider';
import About from './About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <DisplayLayout></DisplayLayout>,
  },
  {
    path:'/root',
    element:<RootLayout></RootLayout>,
    children:[
      {
        path:'/root',
        element:<Home></Home>,
        loader:()=> fetch('fake.json')
      },
      {
        path:'/root/login',
        element:<Login></Login>
      },
      {
        path:'/root/register',
        element:<Register></Register>
      },
      
    ]
  },
  {
    path:'/about',
    element:<About></About>
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
