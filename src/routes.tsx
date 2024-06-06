 
import {createBrowserRouter} from 'react-router-dom'
import Layout from './pages/Layout'
import ErrorPage from './pages/ErrorPage'
import HomePage from './pages/HomePage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import CartPage from './pages/CartPage'



const router = createBrowserRouter([
    {path:'/CaraCommerce/' , 
    element:<Layout />,
    errorElement:<ErrorPage /> ,
    children:[

        {path:'', element:<HomePage />},
        {path:'products/:id' , element:<ProductDetailsPage />},
        {path:'cart' , element:<CartPage />},
        // {path:'products/' , element:<HomePage />,children:[  {path:':id' , element:<ProductDetails />},]},
        // {   path:'cart', element:<CartList />}
    
    ]
}

 

])
export default router

