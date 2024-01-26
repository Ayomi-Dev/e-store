import React, { useContext, useState } from 'react'
import Username from '../reusables/Username'
import SearchBar from '../reusables/SearchBar'
import UserButton from './UserButton'
import { Link } from 'react-router-dom'
import { Contexts } from '../../context/ProductContext'
import { useSelector } from 'react-redux'

const TopNavgation = ( { toggleSideMenu }) => {
  const [showUserOption, setShowUserOption] = useState(false)

  const cartItems = useSelector(state => state.cart.cartItems)
  const {c} = useContext(Contexts)

  const handleMenu = () => {
    setShowUserOption(!showUserOption)
  }
  
  
  return (
    <nav className='w-full fixed h-12 z-40 bg-white right-0'>
      <div className='mx-3 h-full flex justify-between items-center'>

        <div className="flex h-full items-center gap-4">
          <i className="fa fa-bars md:hidden block z-10" onClick={ toggleSideMenu }></i>
          <h1 className='ml-4 font-bold ont-italic text-xl text-pink-600'>BEE's</h1>
        </div>

        <Username  />
        
        <SearchBar />
        
        <div className="h-full relative flex gap-2 items-center">
          <div className="relative w-8 ">

            <Link to='/signup' >
              <i className="fa fa-cart-shopping  mx-1 text-xs md:text-lg "></i>
              <span className=" top--3 right-0 text-2xl font-bold absolute">{cartItems.length}</span>
            </Link>
          </div>

          <Link >
            <i className="fa fa-user user-icon mx-1 text-xs md:text-lg " onClick={ handleMenu }></i>
          </Link>
          
          <Link to='/signup'>
            <i className="fa fa-sign-in user-icon mx-1 text-xs md:text-lg "></i>
          </Link>


          { showUserOption ? <UserButton /> : "" }
        </div>
      </div>
    </nav>
  )
}

export default TopNavgation