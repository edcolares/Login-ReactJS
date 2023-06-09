import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Profile from './routes/profile';
import LoginScreen from './components/Login';
import SignUpScreen from './components/SignUp/index';
import { ProtectLayout } from './components/Protectedlayout';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/profile',
        element:
          <ProtectLayout>
            <Profile />
          </ProtectLayout>
        ,
      },
      {
        path: '/login',
        element: <LoginScreen />
      },
      {
        path: "/signup",
        element:
          <SignUpScreen />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)