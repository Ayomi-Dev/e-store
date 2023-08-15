import React from 'react'
import { HeaderText } from './hero/HeaderText';

const Header = () => {
  return (
    <header className="w-full relative flex border-2  border-black">
        <section className='hero '>
            <HeaderText />
        </section>
        <section className='balance-history fixed right-0 h-screen border-2 border-black'></section>
    </header>
  )
}

export default Header;