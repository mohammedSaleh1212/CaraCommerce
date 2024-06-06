import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/js/bootstrap.min.js";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import AOSWrapper from './services/AOSWrapper.ts';
import './index.css'
import { RouterProvider } from 'react-router-dom';
import router from './routes.tsx';


const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <QueryClientProvider client={queryClient}>

    <AOSWrapper />
    <RouterProvider router={router}>
      
    </RouterProvider>

    <ReactQueryDevtools />
     </QueryClientProvider>
  </React.StrictMode>,
)
