import React, { useContext } from 'react';
import { productsData } from '../../assets/data/ProductData';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { addItems } from '../../redux/cart';
import { Link } from 'react-router-dom';
import { Contexts } from '../../context/ProductContext';


const ProductCard = () => {
    const { addToWishList, scrollRef } = useContext(Contexts)

    const dispatch = useDispatch();

    const handleWishlist = ( product ) => {
        addToWishList(product)
    }

    const addToCart = ( product ) => {
        dispatch(addItems(product))
    }

  return (
    <div className="trend-container overflow-x-auto relative" ref={ scrollRef }>
        {productsData.map((product, index) => {
            return(
                <motion.div whileHover={{scale: 1.1, transition : "0.3s"}}
                    className="card cursor-pointer rounded-sm mx-3 py-1 
                     shadow-md w-40 inline-block bg-white overflow-hidden" key={index}>

                        <Link to={`/details/${product.id}`}>

                            <div className="image relative w-full mx-auto h-28">
                                <img src={ product.img1 } className='relative w-full' 
                        alt="" />
                                <div className="hover-img absolute w-full h-full top-0
                                    left-0 transition-opacity duration-300 opacity-0">
                                    <img src={ product.img2 } className='w-full' alt="" />
                                </div>
                            </div>

                        </Link>
                        
                    <div className="text-center mx-2">
                        <h1 className='font-bold text-sm'>{product.name}</h1>
                        <h3 className='text-pink-400 font-bold text-xs'>${product.price}</h3>

                        <div className="flex w-full  justify-between">
                            <i className="fa fa-heart" onClick={() => handleWishlist(product)}></i>
                            <i className="fa fa-circle-plus" onClick = {() => addToCart(product)}></i>
            
                        </div>
                    </div>
                </motion.div>
            )
        })}
    </div>
  )
}

export default ProductCard;