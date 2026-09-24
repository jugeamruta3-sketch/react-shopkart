
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import router from './router.jsx'
import ThemeProvider from './context/ThemeContext.jsx'
import ErrorBoundary from './components/ErrorBoundary1.jsx'
import CartProvider from './context/CartContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
 <ThemeProvider>
    <ErrorBoundary>
        <CartProvider>
    <RouterProvider router={router} />
    </CartProvider>
    </ErrorBoundary>
    </ThemeProvider>
)
 