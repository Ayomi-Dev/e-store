import React from 'react'
import ProductCard from '../components/reusables/ProductCard'
import Header from '../components/reusables/header/Header'



const Home = () => {
  return (
    <main className='page'>
      <Header />

      <section className='w-4/5 border-2 border-red-400 '>
        <ProductCard/>
      </section>
    </main>
  )
}

export default Home