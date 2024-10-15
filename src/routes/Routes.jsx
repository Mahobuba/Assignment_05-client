
import { createBrowserRouter } from "react-router-dom"
import CommonLayout from "../layout/CommonLayout"
import HomePage from "../pages/homepage";
import Blog from "../blog/Blog";
import FaqPage from "../faq/FaqPage";
import LoginPage from "../pages/LoginPage";
import ErrorPage from "../errorpage/ErrorPage";
import Register from "../pages/Register";
import LoginLayout from "../layout/LoginLayout";
import BookList from "../book/BookList";
import BookDetails from "../book/BookDetails";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layout/DashboardLayout";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <CommonLayout></CommonLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
        // loader: () => fetch(`http://localhost:5000/books`),
      },

      {
        path: "/books",
        element: <BookList></BookList>,
        // loader: () => fetch(`http://localhost:5000/books`),
      },
      {
        path: "/book/:id",
        element: <PrivateRoute>
          <BookDetails></BookDetails>
        </PrivateRoute>
        ,
        loader: ({ params }) =>
          fetch(`https://bootcamp-the-breaking-news-server-ten.vercel.app/book/${params.id}`),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/faq",
        element: <FaqPage></FaqPage>,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginLayout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
  {
    path: "/register",
    element: <LoginLayout />,
    children: [
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
      },
    ],
  },
])

export default routes;

