import React from 'react'
import HomeKa from '../components/HomeKa'
import ProductCard from '../components/ProductCard'
import ProductFilter from '../components/ProductFilter'

export default function HomePage() {
  return (
    <>
      <div>
        <HomeKa />
      </div>
      <div>
        <ProductCard />
      </div>
      <div >
        <ProductFilter />
      </div>
      
    </>
    
  )
}



