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
import MyCourses from './components/MyCourses';
import TaskCard from './components/TaskCard';
import PrivateRoute from './components/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <DisplayLayout></DisplayLayout>,
    children:[
      
    ]
  },
  {
    path:'/root',
    element:<RootLayout></RootLayout>,
    children:[
      {
        path:'/root',
        element:<Home></Home>,
        
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
    path:'/root/courses',
    element:<PrivateRoute><MyCourses></MyCourses></PrivateRoute>,
    loader:()=> fetch('../fake.json')
  },
  {
    path:'/root/courses/:id',
    element:<PrivateRoute><MyCourses></MyCourses></PrivateRoute>,
    loader:()=> fetch('/fake.json'),
  },
  {
    path:'/about',
    element:<About></About>
  },
  {
    path:'/root/task/:id',
    element:<TaskCard></TaskCard>,
    loader:()=> fetch('/fake.json'),
  },
  
  

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
