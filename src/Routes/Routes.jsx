import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import MainLayout from "../Layouts/MainLayout";
import LoadingSpinner from "../Components/LoadingSpinner";
import Applications from "../Pages/Applications";
import InstalledApps from "../Pages/InstalledApps";
import ApplicationDetails from "../Pages/ApplicationDetails";


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <LoadingSpinner />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/applications',
        element: <Applications />,
      },
      {
        path: '/installed',
        element: <InstalledApps />,
      },
      {
        path: '/application/:id',
        element: <ApplicationDetails />,
      },
    ],
  }
])

export default router