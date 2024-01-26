import React from 'react'
import { Contexts } from '../context/ProductContext'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { addItems } from '../redux/cart';

const Shop = () => {
    const { allProducts, addToWishList, handleFilter } = React.useContext(Contexts)

    const dispatch = useDispatch()

    const addToCart = ( product ) => {
        dispatch(addItems(product))
    }

    const handleWishlist = ( product ) => {
        addToWishList(product)
    }

    const selectCategory = ( category ) => {
        handleFilter(category)
    }
  return (
    <section className="page relative flex">
        <div className="category mt-3">
        {allProducts.map((product, index) => {
            return(
                <motion.div whileHover={{scale: 1.1, transition : "0.3s"}}
                    className="card cursor-pointer rounded-sm  py-1 bg-white
                     shadow-md w-40 inline-block overflow-hidden" key={index}>

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

        <div className="cat-panel my-4 fixed right-0 h-screen">
            <h1 className='font-bold text-center text-lg mb-3'>Filter categories</h1>
            <ul className='mx-auto w-3/5'>
                <li className='cat-list cursor-pointer w-full my-3 py-3 duration-50 rounded-md bg-white text-center' onClick={() => selectCategory('men')}>Men</li>
                <li className='cat-list cursor-pointer w-full my-3 py-3 duration-50 rounded-md bg-white text-center' onClick={() => selectCategory('women')}>Women</li>
                <li className='cat-list cursor-pointer w-full my-3 py-3 duration-50 rounded-md bg-white text-center' onClick={() => selectCategory('women')}>Suit</li>
                <li className='cat-list cursor-pointer w-full my-3 py-3 duration-50 rounded-md bg-white text-center' onClick={() => selectCategory('women')}>Trousers</li>
                <li className='cat-list cursor-pointer w-full my-3 py-3 duration-50 rounded-md bg-white text-center' onClick={() => selectCategory('women')}>Natives</li>
                <li className='cat-list cursor-pointer w-full my-3 py-3 duration-50 rounded-md bg-white text-center' onClick={() => selectCategory('women')}>Jacket</li>
            </ul>
        </div>
    </section>
  )
}

export default Shop;