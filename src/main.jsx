import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { RouterProvider, } from "react-router-dom";

import { QueryClient, QueryClientProvider,  } from '@tanstack/react-query';

import { Mybrowser } from './Components/Mainpage/Router/Router';
import AuthProvider from './Components/Mainpage/AuthProvider/AuthProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-xl mx-auto'>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
        <RouterProvider router={Mybrowser} />
        </AuthProvider>
        <ToastContainer />
      </QueryClientProvider>
    </div>
  </React.StrictMode>,
)
