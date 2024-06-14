import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import Home from './Components/Home.tsx'
import Profile from './Components/Profile.tsx'
import Register from './Components/Register.tsx'
import SignIn from './Components/SignIn.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: '/profile',
        element: <Profile/>
      },
      {
        path: '/sign-in',
        element: <SignIn/>
      },
      {
        path: '/register',
        element: <Register/>
      }
      // {
      //   path: '/register',
      //   element: <Register/>
      // },
      // {
      //   path: '/register',
      //   element: <Register/>
      // },
      // {
      //   path: '/register',
      //   element: <Register/>
      // },
      // {
      //   path: '/register',
      //   element: <Register/>
      // },
      // {
      //   path: '/register',
      //   element: <Register/>
      // },
      // {
      //   path: '/register',
      //   element: <Register/>
      // }
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
