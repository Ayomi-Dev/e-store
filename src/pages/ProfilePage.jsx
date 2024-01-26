import React, { useState } from 'react';
import Image from '../assets/images/men/pic.png';
import { Link } from 'react-router-dom';
import EditProfile from './EditProfile';

const ProfilePage = () => {
  const [editMode, setEditMode] = useState(false)

  const showEdit = () => {
    setEditMode(true)
  }

  const cancelEdit = () => {
    setEditMode(false)  
  }
  return (
    <>
      {editMode 

        ? 

        <EditProfile cancelEdit= {cancelEdit}/>

        :
            
        <section className="page">
        
          <div className="w-3/4 mx-auto flex flex-col items-center justify-center mt-4">
            <img src={ Image } alt="" className="w-28 h-28 shadow-lg rounded-full border-8 border-white" />
        
            <ul className='w-3/5 mx-auto'>
                      <li className='bg-white'>
                        <Link >
                        <div className="w-full items-center p-2 shadow-md my-4 rounded-sm flex justify-start">
                          <i className="fa fa-arrow-rotate-left px-3"></i>
                          <h3>Orders</h3>
                        </div>
                        </Link>
                      </li>
        
                      <li className='bg-white' onClick={showEdit}>
                        <Link >
                        <div className="w-full items-center p-2 shadow-md my-4 rounded-sm flex justify-start">
                          <i className="fa fa-pen-square px-3"></i>
                          <h3>Edit Profile</h3>
                        </div>
                        </Link>
                      </li>
        
                      <li className='bg-white'>
                        <Link >
                        <div className="w-full items-center p-2 shadow-md my-4 rounded-sm flex justify-start">
                          <i className="fa fa-gears px-3"></i>
                          <h3>Settings</h3>
                        </div>
                        </Link>
                      </li>
            </ul>

          </div>

        </section>
      }
    </>
      

    
  )
}

export default ProfilePage;