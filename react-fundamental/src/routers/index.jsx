import { createBrowserRouter } from "react-router";
import { post, postById } from "../apis/loader";

import BlogPages from "../pages/blogs";
import Blogs from "../pages/blogs/_id";
import HomePage from "../pages/home";
import RootLayout from "../layouts/RootLayout";
import AboutPages from "../pages/about";

export const RouteUtama = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/blog",
        element: <BlogPages />,
        loader: post
      },
      {
        path: "/blog/:id",
        element: <Blogs />,
        loader: postById
      },
      {
        path: "/about",
        element: <AboutPages />,
      },
    ],
  },
]);