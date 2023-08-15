import React from 'react';
import { productsData } from '../../assets/data/ProductData';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { addItems } from '../../redux/cart';


const ProductCard = () => {
    const dispatch = useDispatch();

    const addToCart = ( product ) => {
        dispatch(addItems(product))
    }

  return (
    <section className="trend-container mx-auto overflow-x-auto relative border-2 border-black">
        {productsData.map((product, index) => {
            return(
                <motion.div whileHover={{scale: 1.1, transition : "0.5s"}}
                    className="cursor-pointer rounded-sm mx-3 py-1 
                     shadow-md w-40 inline-block overflow-hidden" key={index}>

                    <div className="image relative w-4/5 mx-auto h-28">
                        <img src={ product.img1 } className='relative w-full' 
                        alt="" />
                        <div className="hover-img absolute w-full h-full top-0
                            left-0 transition-opacity duration-300 opacity-0">
                            <img src={ product.img2 } className='w-full' alt="" />
                        </div>
                    </div>
                    <div className="text-center mx-2">
                        <h1 className='font-bold text-sm'>{product.name}</h1>
                        <h3 className='text-gray-800 text-xs'>${product.price}</h3>

                        <div className="flex w-full  justify-between">
                            <i className="fa fa-heart"></i>
                            <i className="fa fa-circle-plus" onClick = {() => addToCart(product)}></i>
            
                        </div>
                    </div>
                </motion.div>
            )
        })}
    </section>
  )
}

export default ProductCard;