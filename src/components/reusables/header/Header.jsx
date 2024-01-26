import React from 'react'
import { HeaderText } from './hero/HeaderText';
import Image from '../../../assets/images/men/img1.jpg'
import Imag2 from '../../../assets/images/men/img12.jpg'
import Imag3 from '../../../assets/images/men/img10.jpg'
import Imag4 from '../../../assets/images/men/img4.jpg'
import HeaderImg from './hero/HeaderImg';

const Header = () => {
  return (
    <header className="w-full relative flex">
        <section className='hero relative h-full flex mx-auto md:mx-0 '>
            <HeaderText />
            
            <HeaderImg />
        </section>
        <section className='balance-history hidden z-20 fixed top-12 right-0 h-screen md:block'>

          <div className="balance-panel flex justify-center flex-col mx-2 text-lg items-center h-40 rounded-md bg-white shadow-lg my-4">
            <h1 className="font-bold mb-5">Your Balance</h1>
             <h1 className="font-bold text-pink-500 text-lg font-italic">$2432.86</h1>
          </div>

          <h1 className="text-center text-gray-600 mb-3 font-bold">Recent Orders</h1>

          <ul className="block mx-2">

            <li className='flex w-full justify-between items-center h-8 my-3 px-3 bg-white'>
              <img src={Image} className='w-7 h-7 rounded-full' alt="" />
              <h1 className="text-gray-500 text-sm  overflow-ellipsis">Jacket</h1>
              <h3 className="text-pink-600 text-sm">$20.67</h3>
            </li>


            <li className='flex w-full justify-between items-center h-8 my-3 px-3 bg-white'>
              <img src={Imag2} className='w-7 h-7 rounded-full' alt="" />
              <h1 className="text-gray-500 text-sm  overflow-ellipsis">Native</h1>
              <h3 className="text-pink-600 text-sm">$18.99</h3>
            </li>

            <li className='flex w-full justify-between items-center h-8 my-3 px-3 bg-white'>
              <img src={Imag3} className='w-7 h-7 rounded-full' alt="" />
              <h1 className="text-gray-500 text-sm  overflow-ellipsis">Leather...</h1>
              <h3 className="text-pink-600 text-sm">$24.55</h3>
            </li>

            <li className='flex w-full justify-between items-center h-8 my-3 px-3 bg-white'>
              <img src={Imag4} className='w-7 h-7 rounded-full' alt="" />
              <h1 className="text-gray-500 text-sm  overflow-ellipsis">Men's cloth</h1>
              <h3 className="text-pink-600 text-sm">$33.99</h3>
            </li>

          </ul>

        </section>
    </header>
  )
}

export default Header;