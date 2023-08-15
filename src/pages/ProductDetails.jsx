import React from 'react'
import Image from '../assets/images/men/img1.jpg'

const ProductDetails = () => {
    const handleIncrease = () => {

    }
    const handleDecrease = () => {

    }
  return (
    <section className="page flex gap-1">
        <div className="w-3/5">
            <div className="w-full h-80 overflow-hidden shadow-md">
                <img src={Image} className='rounded-sm w-full' alt="" />
            </div>

            <div className="more mx-auto mt-2.5 h-20">
                <img src={Image} className="rounded-sm inline-block"></img>
            </div>
        </div>


        <div className="w-2/5">
            <h2>name</h2>
            <div className="rating">Rating</div>
            <h2>Description</h2>
            <h2>Price</h2>
            
            <div className="flex justify-around items-center w-4/5 mx-auto">
                
                <div className="flex justify-center  items-center">
                    <i className="fa fa-circle-minus" onClick={() => handleDecrease()}></i>
                    <span className='mx-3'>1</span>
                    <i className="fa fa-circle-plus" onClick={() => handleIncrease()}></i>
                </div>
            </div>
            <div className="flex justify-start items-center h-9 w-4/5 my-5 mx-auto">
                <i className="fa fa-heart pr-4 hover:text-pink-600"></i>

                <button className='hover:bg-black'>Add to cart</button>
            </div>
        </div>
    </section>
  )
}

export default ProductDetails