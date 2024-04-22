import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";
import ErrorPage from "../Components/Error/ErrorPage";
import Home from "../Components/Home/Home";
import MenuItems from "../Components/Menu-Section/MenuItems";
import UserDetails from "../Components/Menu-Section/UserDetails";
import Form from "../Components/Form/Form";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/menu",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <MenuItems />,
      },
      {
        path: "/user/:userId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails />,
      },
      {
        path:"/form",
        element: <Form/>
      }
    ],
  },
]);
