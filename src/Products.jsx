import React from 'react'
import Navbar from './components/navbar'
import ProductsHero from './components/Products/ProductsHero'
import ProductDescription from './components/Products/ProductDescription'
import ProductFooter from './components/Products/ProductFooter'
import Footer from './components/Footer'
import ProductFlipImages from './components/Products/ProductFlipImages'

function Products() {
  return (
    <div>
        <Navbar />
        <ProductsHero />
        <ProductDescription />
        <ProductFlipImages />
        <ProductFooter />
        <Footer />
    </div>
  )
}

export default Products
