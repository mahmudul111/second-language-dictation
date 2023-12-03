import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./About";
import fake from "./assets/fake.js";
import DisplayLayout from "./components/DisplayLayout";
import Home from "./components/Home";
import Login from "./components/Login";
import MyCourses from "./components/MyCourses";
import PrivateRoute from "./components/PrivateRoute";
import Register from "./components/Register";
import RootLayout from "./components/RootLayout";
import TaskCard from "./components/TaskCard";
import "./index.css";
import AuthProvider from "./providers/AuthProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DisplayLayout></DisplayLayout>,
    children: [],
  },
  {
    path: "/root",
    element: <RootLayout></RootLayout>,
    children: [
      {
        path: "/root",
        element: <Home></Home>,
      },
      {
        path: "/root/login",
        element: <Login></Login>,
      },
      {
        path: "/root/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/root/courses",
    element: (
      <PrivateRoute>
        <MyCourses></MyCourses>
      </PrivateRoute>
    ),
    loader: () => fake,
  },
  {
    path: "/root/courses/:id",
    element: (
      <PrivateRoute>
        <MyCourses></MyCourses>
      </PrivateRoute>
    ),
    loader: () => fake,
  },
  {
    path: "/about",
    element: <About></About>,
  },
  {
    path: "/root/task/:id",
    element: <TaskCard></TaskCard>,
    loader: () => fake,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
