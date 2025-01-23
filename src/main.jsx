import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Components/Root/Root'
import Home from './Components/Home/Home'
import ErrorPage from './Components/ErrorPage/ErrorPage'
import Bookdetails from './Components/Bookdetails/Bookdetails'
import ListedBooks from './Components/ListedBooks/ListedBooks'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/books/:bookId',
        loader: () => fetch('./booksData.json'),
        element: <Bookdetails></Bookdetails>
      },
      {
        path: '/listedBooks',
        loader: () => fetch('./booksData.json'),
        element: <ListedBooks></ListedBooks>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
