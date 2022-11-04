import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import './index.css'
import Order from './Order'
import ProductDetails from './ProductDetails'

// src/index.js
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import Cart from './Cart'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/ProductDetails' element={<ProductDetails />} />
          <Route path='/Order/:Id' element={<Order />} />
          <Route path='/Cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
