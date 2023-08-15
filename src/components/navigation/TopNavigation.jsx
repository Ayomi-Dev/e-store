import React from 'react'
import Username from '../reusables/Username'
import SearchBar from '../reusables/SearchBar'

const TopNavgation = () => {
  return (
    <nav className='topNav fixed h-12 z-40 bg-white right-0'>
      <div className='mx-3 flex justify-between items-center'>
        <Username />
        
        <SearchBar />

        <div className="h-full flex items-center">
            <i className="fa fa-user mx-1 text-xs"></i>
            <i className="fa fa-user mx-1 text-xs"></i>
        </div>
      </div>
    </nav>
  )
}

export default TopNavgation