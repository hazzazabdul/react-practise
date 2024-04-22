import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffe from "./components/AddCoffe.jsx";
import CoffeeDetails from "./components/CoffeeDetails.jsx";
import UpdateCoffee from "./components/UpdateCoffee.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => fetch("http://localhost:5000/coffees"),
  },
  {
    path: "/addcoffee",
    element: <AddCoffe />,
  },
  {
    path: "/updatecoffee/:id",
    element: <UpdateCoffee />,
    loader: (({params}) => fetch(`http://localhost:5000/coffees/${params.id}`))
  },
  {
    path: "/coffees/:id",
    element: <CoffeeDetails />,
    loader: ({ params }) => fetch(`http://localhost:5000/coffees/${params.id}`),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
