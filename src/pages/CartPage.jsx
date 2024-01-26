import React, { useContext } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { chooseSize, decreaseQty, increaseQty, removeItems, initCartFromLocalStorage} from '../redux/cart';
import { Link } from 'react-router-dom';
import { Contexts } from '../context/ProductContext';



const CartPage = () => {

  const { cartItems, totalQty, totalPrice } = useSelector(state => state.cart)

  const { sizes } = useContext(Contexts);
  
  const dispatch = useDispatch();

  const handleIncrease = (product) => {
      dispatch(increaseQty(product))
  }

  const handleDecrease = (product) => {
    dispatch(decreaseQty(product))
  }

  const handleRemove = (product) => {
    dispatch(removeItems(product))
  }

  const handleSize = (size) => {
    dispatch(chooseSize(size))
  }

  return (
    <section className="page  relative">

      {cartItems.length != 0 ? (<h2 className=' text-gray-600 text-center my-5 text-xl'>Your items are here</h2>) : 
      (<div className='absolute top-3/4 left-1/4 '>

        <h2 className='text-lg text-gray-400 text-center'> Cart is empty</h2>

        <button>Continue Shopping</button>
        
      </div>)}
      
      <div className="w-full flex flex-col md:flex-row">

        <table className='mx-auto px-2'>
          <thead >

            <tr className='shadow-md h-16 mb-4 '>
              <th>
            <h1>Image</h1>
              </th>
              <th>
            <h1>Desc.</h1>
              </th>
              <th>
            <h1>Size</h1>
              </th>
              <th>
            <h1>Price</h1>
              </th>
              <th>
            <h1>Qty</h1>
              </th>
              <th>
            <h1>Total</h1>
              </th>
              <th>
            <h1 className='text-red-500'>Action</h1>
              </th>
            </tr>

          </thead>

          <tbody>

          {cartItems && cartItems.map((product, index) => {
            return(

            <tr className='shadow-md bg-white border-b-black border-2 h-16 md:h-24' key={index}>

              <td>

                <Link to={`/details/${product.id}`}>
                  <img src={ product.img1 } className='w-8 h-8 md:w-12 md:h-12 ml-2 rounded-full'/>
                </Link>
                
              </td>

              <td className='font-bold'>{product.name}</td>

              <td>
                <select name="" id="">
                  <option value="">{ product.size }</option>

                  { sizes.map((size, index) => {
                    return(
                      <option key={index} onClick={() => handleSize(size)} value={size}> {size} </option>
                    )
                  })}
                </select>
              </td>

              <td className='font-bold'>{product.price}</td>

              <td className=''>
                <div className="flex justify-center  items-center">
                  <i className="fa fa-circle-minus" onClick={() => handleDecrease(product)}></i>
                  <span className='mx-3'>{product.quantity}</span>
                  <i className="fa fa-circle-plus" onClick={() => handleIncrease(product)}></i>
                </div>
              </td>

              <td className='font-bold'>{product.total}</td>

              <td>
                <i className="fa fa-trash bg-red-500 m-0" onClick={() => handleRemove(product)}></i>
              </td>
            </tr>
            )
            }) 

            
        
          }

          </tbody>
        </table>

        <div className="w-1/2 md:w-1/4 mx-auto md:mx-2 rounded mt-4 shadow-md bg-white h-44">
          <h1 className='text-center font-bold mt-3'>Subtotal</h1>
          <h2 className='font-bold mx-3 text-gray-600 mt-2'>Total items: <span className='font-bold'>{ totalQty }</span></h2>
          <h2 className='font-bold mx-3 text-gray-600'>Total Price: <span className='font-bold'>${ totalPrice }</span> </h2>

          <div className="text-center ">
            <button className='bg-green-700 text-sm py-1 mt-4'>Checkout</button>
          </div>
        </div>
      </div>

    </section>
  )
}

export default CartPage;