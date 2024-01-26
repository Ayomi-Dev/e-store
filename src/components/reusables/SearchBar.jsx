import React, { useState } from 'react'

const SearchBar = () => {

    const [ searchValue, setSearchValue ] = useState('');
    
    const [showInput, setShowInput] = useState(false);

    const handleInputField = () => {
      
      setShowInput(!showInput) 
    }

    const handleSearch = (e) => {
      setSearchValue(e.target.value)
    }
  return (
    <div className='flex bg-white shadow-md md:shadow-white justify-between absolute md:relative left-0 md:mx-0 top-12 md:top-0 w-full md:w-40 items-center h-10 md:h-full'>
        <input type="text" 
            className='w-full h-full md:h-3/4 outline-none border-none p-3 text-gray-400'
            placeholder='Search here...' 
            value={searchValue}
            onChange={ handleSearch }
        />
        <i className="fa fa-search mr-3" onClick={ handleInputField }></i>
    </div>
  )
}

export default SearchBar