import React, { useState } from 'react'

const SearchBar = () => {

    const [ searchValue, setSearchValue ] = useState('');

    const handleSearch = (e) => {
        setSearchValue(e.target.value)
        console.log(searchValue)
    }
  return (
    <div className='flex justify-center items-center w-36 h-full'>
        <input type="text" 
            className='w-full h-3/4 outline-none border-none p-3 text-gray-300'
            placeholder='Search here...' 
            value={searchValue}
            onChange={ handleSearch }
        />
        <i className="fa fa-search"></i>
    </div>
  )
}

export default SearchBar