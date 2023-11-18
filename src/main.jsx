import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"
import './index.css'
import { ProductProvider } from './context/ProductContext.jsx'
import { BasketProvider } from './context/BasketContext.jsx'
import { FavoriteProvider } from './context/FavoriteContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FavoriteProvider>
    <BasketProvider>
    <ProductProvider>
    <App />
    </ProductProvider>
    </BasketProvider>
    </FavoriteProvider>
  </React.StrictMode>,
)
