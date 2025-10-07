import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <ErrorPage />,
  }
])

export default router