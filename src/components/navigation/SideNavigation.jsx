import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from "framer-motion"

const SideNavigation = () => {
  const location = useLocation()
  // console.log(location)
  const activePage = (path) => {
    return location.pathname === path ? 'active' : '';
  }

 
// const list = { hover: { scale: 1.05, transition: {duration : 0.5} } }
// const item = { initial: { opacity: 0, x: 0 }, hover: {opacity: 1, x: 100} }
  return (
    <aside className="fixed overflow-x-auto  h-screen overflow-y-auto text-center left-0 top-0">
        <div className="text-center">
            <h1>Store</h1>
        </div>
        <div className="mx-auto w-20 h-20 rounded-full shadow-md">
          <img src="" className='' alt="" />
        </div>
        <nav className="w-full">
          <ul className="block  mx-auto">
                
            
            <li className='active'>
              <Link to={`/`}>
                <div className="w-full items-center p-2 shadow-md my-2 flex justify-start">
                  <i className="fa-solid fa-home px-3"></i>
                  <h3>Home</h3>
                </div>
              </Link>
            </li>
            <li className=''>
              <Link >
                <div className="w-full items-center p-2 shadow-md my-2 flex justify-start">
                  <i className="fa fa-compass px-3"></i>
                  <h3>Explore</h3>
                </div>
              </Link>
            </li>
            <li className=''>
              <Link >
                <div className="w-full items-center p-2 shadow-md my-2 flex justify-start">
                  <i className="fa fa-heart px-3"></i>
                  <h3>Wishlist</h3>
                </div>
              </Link>
            </li>
            <li className=''>
              <Link to={`/cart`}>
                <div className="w-full items-center p-2 shadow-md my-2 flex justify-start">
                  <i className="fa fa-cart-shopping px-3"></i>
                  <h3>Cart</h3>
                </div>
              </Link>
            </li>
            <li className=''>
              <Link >
                <div className="w-full items-center p-2 shadow-md my-2 flex justify-start">
                  <i className="fa fa-user px-3"></i>
                  <h3>Profile</h3>
                </div>
              </Link>
            </li>
            <li className=''>
              <Link >
                <div className="w-full items-center p-2 shadow-md my-2 flex justify-start">
                  <i className="fa fa-clock-rotate-left px-3"></i>
                  <h3>History</h3>
                </div>
              </Link>
            </li>
            <li className=''>
              <Link >
                <div className="w-full items-center p-2 shadow-md my-2 flex justify-start">
                  <i className="fa fa-message px-3"></i>
                  <h3>Contact Us</h3>
                </div>
              </Link>
            </li>
            <li className=''>
              <Link >
                <div className="w-full items-center p-2 shadow-md my-2 flex justify-start">
                  <i className="fa fa-gears px-3"></i>
                  <h3>Setting</h3>
                </div>
              </Link>
            </li>

              
                
          </ul>
        </nav>
    </aside> 
  )
}

export default SideNavigation;