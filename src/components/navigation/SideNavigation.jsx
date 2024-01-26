import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Contexts } from '../../context/ProductContext';
import Image from '../../assets/images/men/pic.png';



const SideNavigation = ( { openSideMenu }) => {
  const { cartItems } = useSelector(state => state.cart);//extracting the cartReducer from redux store

  const { wishlist, c } = React.useContext(Contexts);//extracting wishlist array from the contextApi

  const location = useLocation()
  
  const activePage = (path) => {
    return location.pathname === path ? 'active' : '';
  }


  
  
  return (
    <>
      
      <aside className={`${openSideMenu ? 'active fixed h-full z-10' : 'fixed overflow-x-auto h-screen overflow-y-auto text-center left-0 '} `}>
        
        <div className="mx-auto w-28 h-28 mt-4">
          <img src={Image} className='w-full rounded-full border-white border-8 shadow-md' alt="" />
        </div>
        <nav className="w-full">
          <ul className="block  mx-auto">
                
            
            <li className={activePage('/')}>
              <Link to={`/`}>
                <div className="w-full items-center p-2  my-4 rounded-sm flex justify-start">
                  <i className="fa-solid fa-home px-3"></i>
                  <h3>Home</h3>
                </div>
              </Link>
            </li>
            <li className={activePage('/shop')}>
              <Link to={`/shop`}>
                <div className="w-full items-center p-2  my-4 rounded-sm flex justify-start">
                  <i className="fa fa-compass px-3"></i>
                  <h3>Shop</h3>
                </div>
              </Link>
            </li>
            <li className={activePage('/wishlist')}>
              <Link to={`/wishlist`} >
                <div className="w-full items-center p-2  my-4 rounded-sm relative flex justify-start">
                  <i className="fa fa-heart px-3"></i>
                  <h3>Wishlist</h3>
                  <span className='count'>{wishlist.length}</span> 
                </div>
              </Link>
            </li>
            <li className={activePage('/cart')}>
              <Link to={`/cart`}>
                <div className="w-full items-center p-2  relative my-4 rounded-sm flex justify-start">
                  <i className="fa fa-cart-shopping px-3"></i>
                  <h3>Cart</h3>
                  <span className='count'>{cartItems.length}</span>
                </div>
              </Link>
            </li>
            <li className={activePage('/profile')}>
              <Link to={`/profile`} >
                <div className="w-full items-center p-2  my-4 rounded-sm flex justify-start">
                  <i className="fa fa-user px-3"></i>
                  <h3>Profile</h3>
                </div>
              </Link>
            </li>
            <li className={activePage('/history')}>
              <Link >
                <div className="w-full items-center p-2  my-4 rounded-sm flex justify-start">
                  <i className="fa fa-clock-rotate-left px-3"></i>
                  <h3>History</h3>
                </div>
              </Link>
            </li>
            <li className={activePage('/contact')}>
              <Link >
                <div className="w-full items-center p-2  my-4 rounded-sm flex justify-start">
                  <i className="fa fa-message px-3"></i>
                  <h3>Contact Us</h3>
                </div>
              </Link>
            </li>
            <li className={activePage('/setting')}>
              <Link >
                <div className="w-full items-center p-2  my-4 rounded-sm flex justify-start">
                  <i className="fa fa-gears px-3"></i>
                  <h3>Setting</h3>
                </div>
              </Link>
            </li>

              
                
          </ul>
        </nav>
      </aside> 
    </>
  )
}

export default SideNavigation;