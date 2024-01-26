import React from 'react'
import ProductCard from '../components/reusables/ProductCard'
import Header from '../components/reusables/header/Header'
import ScrollBtn from '../components/reusables/ScrollBtn'



const Home = () => {
  return (
    <main className='page'>
      <Header />

      <section className='w-full flex items-center mt-6 relative'>
        
        <ProductCard/>

        <ScrollBtn />
      </section>
    </main>
  )
}

export default Home