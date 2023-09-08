import React from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './views/Home'
import { Contact } from './views/Contact'
import { Login } from './views/Login'
import { Products } from './views/Products'
import {NotFound} from './views/NotFound'
import { ProductDetail } from './views/ProductDetail'

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col justify-between bg-green-50 text-gray-900 min-h-screen">
        {/*====================================================== //
        // ======================= HEADER ======================= //
        // ====================================================== */}
        <Header />
        {/*====================================================== //
        // ================ CONTENT PAGE (Router) =============== //
        // ====================================================== */}
        <div className="min-h-full">
          <Routes>
            {/* Déclaration de chaques routes associées à sont composant */}
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/produits" element={<Products/>}/>
            {/* :slug est un paramètre variable */}
            <Route path="/product-detail/:slug" element={<ProductDetail/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </div>
        {/*====================================================== //
        // ======================= FOOTER ======================= //
        // ====================================================== */}
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

