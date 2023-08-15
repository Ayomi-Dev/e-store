import React from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { decreaseQty, increaseQty, removeItems } from '../redux/cart';



const CartPage = () => {

  const { cartItems, totalQty, totalPrice } = useSelector(state => state.cart)
  
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

  return (
    <section className="page relative">

      {cartItems.length != 0 ? (<h2 className='text-lg text-gray-400 text-center'>Your items are here</h2>) : 
      (<div className='absolute top-3/4 left-1/4 '>

        <h2 className='text-lg text-gray-400 text-center'> Cart is empty</h2>

        <button>Continue Shopping</button>
        
      </div>)}
      
      <div className="w-full flex">

        <table className='mx-auto'>
          <thead>

          <tr className=' shadow-md '>
          <th>
            <h1>Image</h1>
          </th>
          <th>
            <h1>Name</h1>
          </th>
          <th>
            <h1>Price</h1>
          </th>
          <th>
            <h1>Quantity</h1>
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

            <tr className='p-0 shadow-md' key={index}>

              <td className="w-10">
                <img src={ product.img1 } className='w-full rounded-full'/>
              </td>

              <td>{product.name}</td>

              <td>{product.price}</td>

              <td className=''>
                <div className="flex justify-center  items-center">
              <i className="fa fa-circle-minus" onClick={() => handleDecrease(product)}></i>
              <span className='mx-3'>{product.quantity}</span>
              <i className="fa fa-circle-plus" onClick={() => handleIncrease(product)}></i>
                </div>
              </td>

              <td>{product.total}</td>

              <td>
            <button className="bg-red-500" onClick={() => handleRemove(product)}>Remove</button>
              </td>
            </tr>
            )
            }) 

            
        
          }

          </tbody>
        </table>

        <div className="w-1/4 mx-2 rounded shadow-md bg-white-400 h-44">
          <h1 className='text-center font-bold mt-3'>Subtotal</h1>
          <h2 className='font-bold mx-3 text-gray-600 mt-2'>Total items: { totalQty }</h2>
          <h2 className='font-bold mx-3 text-gray-600'>Total Price: ${ totalPrice }</h2>

          <div className="text-center ">
            <button className='bg-green-700 text-sm py-1 mt-4'>Checkout</button>
          </div>
        </div>
      </div>

    </section>
  )
}

export default CartPage;