import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import DonationPage from "../Pages/Donation/DonationPage";
import ErrorPage from "../Pages/Error/ErrorPage";
import HomePage from "../Pages/Home/HomePage";
import StatisticsPage from "../Pages/Statistics/StatisticsPage";
import DonationDetails from "../Components/Donations-Card-Section/Donation-Details/DonationDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: () => fetch("/donations.json")
      },
      {
        path: "/statistics",
        element: <StatisticsPage />,
        loader: () => fetch("/donations.json")
      },
      {
        path: "/donation",
        element: <DonationPage />,
        loader: () => fetch("/donations.json")
      },
      {
        path: "/details/:id",
        element: <DonationDetails/>,
        loader: () => fetch("/donations.json")
      }
    ],
  },
]);
