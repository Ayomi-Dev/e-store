import React, { useContext } from 'react'
import Image from '../assets/images/men/img1.jpg'
import { Contexts } from '../context/ProductContext';
import { Link } from 'react-router-dom';


const Wishlist = () => {
    const {wishlist, removeFromWishlist } = useContext(Contexts);

    const handleRemove = ( item ) => {
        removeFromWishlist(item); 
    }

  return (
    <section className="page">

        <div className="w-4/5 mx-auto">

            {wishlist.map((item, index) => {
                return (
                    <div className="w-1/2 mx-auto shadow-md bg-white my-2 rounded-md py-3" key={ index }>
                        <Link  to={`/details/${item.id}`}>
                            <img src={item.img1} className='w-full h-80 rounded-sm' alt="" />
                        </Link>
                        <div className="text-center my-3">
                            <h2 className='font-bold inline-block mr-6'>
                                { item.name }
                            </h2>
                            <h2 className='font-bold inline-block'>
                                { item.price }
                            </h2>
                        </div>

                        <div className="flex justify-center mx-2">
                            
                            <button className='m-0 bg-red-600' onClick={() => handleRemove(item)}>Remove</button>

                        </div>
                    </div>
                )
            })}
            
        </div>
    </section>
  )
}

export default Wishlist