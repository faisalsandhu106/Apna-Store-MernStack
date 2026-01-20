import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import App from './App.jsx'
import { AppProvider } from './Components/ContextAPI/ProductContext.jsx';
import { ThemeProvider } from './Components/ContextAPI/ThemeProvider.jsx';
import { CartProvider } from './Components/ContextAPI/CartContext.jsx';
import { AdminProvider } from './Components/ContextAPI/AdminContext.jsx';

createRoot(document.getElementById('root')).render(
  <AppProvider>
    <CartProvider>
      <ThemeProvider>
        <AdminProvider>
          <Router>
            <App />
          </Router>
        </AdminProvider>
      </ThemeProvider>
    </CartProvider>
  </AppProvider>
)
