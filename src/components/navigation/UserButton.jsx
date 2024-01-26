import React, { useContext } from 'react'
import { Link } from 'react-router-dom';


const UserButton = () => {
    

  return (
    <div className={`menu absolute right-5 top-12 shadow-md text-gray-600 text-sm bg-white rounded-md h-24 w-24`}>
        
            <h1 className='text-center mt-2'>
                <Link>
                    My account
                </Link>
            </h1>

            <h1 className='text-center mt-4'>
                <Link>
                    Log out
                </Link>
            </h1>
        
    </div>
  )
}

export default UserButton