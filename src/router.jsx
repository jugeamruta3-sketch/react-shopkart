import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';



const router = createBrowserRouter([
{
    path:"/",
    element:<App/>,
    children:[
        {
            index:true,
            element:<Home/>
        },
        {
            path:"/products",
            element:<Products/>
        },
        {
            path:"/cart",
            element:<Cart/>
        },
        {
            path:"/login",
            element:<Login/>
        },
        {
            path:"/register",
            element:<Register/>
        }
    ]
}    
]);
export default router

