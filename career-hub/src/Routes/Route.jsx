import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AppliedJobsPage from "../Pages/Applied-Jobs-Page/AppliedJobsPage";
import ErrorPage from "../Pages/Error-Page/ErrorPage";
import HomePage from "../Pages/Home-Page/HomePage";
import JobDeatailsComponent from "../Components/JobDetails-Component/JobDeatailsComponent";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/applied",
        element: <AppliedJobsPage />,
        loader: () => fetch("/jobs.json")
      },
      {
        path: "/job/:id",
        loader: () => fetch("/jobs.json"),
        element: <JobDeatailsComponent/>
      }
    ],
  },
]);
