import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ListedBooks from './components/ListedBooks/ListedBooks';
import PagesToRead from './components/PagesToRead/PagesToRead';
import SingleBook from './components/SingleBook/SingleBook';
import KidsZone from './components/KidsZone/KidsZone';
import BookCateGory from './components/BookCategory/BookCateGory';
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
       path: "/listed-books",
       element: <ListedBooks></ListedBooks>,
      },
      {
       path: "/book-category",
       element: <BookCateGory></BookCateGory> ,
      },
      {
       path: "/about-us",
       element: <KidsZone></KidsZone> ,
      },
      {
        path: "/book/:id",
        element: <SingleBook></SingleBook>,
        loader: () => fetch('../books.json')
      },
      {
       path: "/pages-to-read",
       element: <PagesToRead></PagesToRead>,
       loader: () => fetch('../books.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)