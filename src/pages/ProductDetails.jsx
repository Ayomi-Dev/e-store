import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addItems } from '../redux/cart';
import { productsData } from '../assets/data/ProductData';
import { Contexts } from '../context/ProductContext';



const ProductDetails = () => {
    const {sizes, addToWishList} = useContext(Contexts)
    
    const { id } = useParams();

    const [size, setSize] = useState('')

    const { cartItems } = useSelector(state => state.cart);

    const dispatch = useDispatch();

    const product = productsData.find(item => item.id === id);

    const [quantity, setQuantity] = useState(1);

    let total = (product.total)
    
    const chooseSize = (size) => {
        setSize(size);
    }


    //switching between review and description tabs
    const [tab, setTab] = useState('desc');
    const activeTab = (tabbName) => {
        setTab(tabbName)
    }


    //increasing product quantity by 1 on every click
    const handleIncrease = ( ) => {
        setQuantity(quantity + 1)
    }


    //decreasing product quantity by 1 on every click
    const handleDecrease = ( ) => {
        setQuantity(Math.max(1, quantity - 1))//minimum value of product quantity must be 1
    }

    
    //adding selected item by user to the cart list
    const addItemToCart = (product) => {
        dispatch(addItems({...product, quantity, total, size}))
        
    }

    //displaying individual image on the main image view
    const [mainImg, setMainImg] = useState(product.img1)
    const changeImg = (image) => {
        setMainImg(image)
    }


    //adding selected item by user to the wishlist
    const addItemToWishList = ( product ) => {
        addToWishList( product )
    }

    useEffect(() => { //automatically updating product prices whenever the quantity changes
        total = (total * quantity)
    }, [quantity]);

    //adding product reviews
    const [review, setReview] = useState('');
    const [user, setUser] = useState('');

    const handleReview = (e) => {
        e.preventDefault();

        const reviews = []

        if(product){
            reviews.push([...{review, user}]);
            product.reviews = reviews
            console.log(review, product.reviews)
        }
        
    }
    
  return (
    <section className="page gap-1">
        <div className="flex flex-col md:flex-row py-3 gap-2 mx-auto shadow-lg rounded-sm bg-white mt-4 w-11/12">
            <div className="img-width">
                <div className="imgh w-full overflow-hidden">
                    <img src={mainImg} className='rounded-md w-full' alt="" />
                </div>

                <div className="more mx-auto my-5 h-20">
                    {product.images.map((image, index) => {
                        return(
                            <img src={image} key={index} onClick={() => changeImg(image)} className="rounded-sm w-20 inline-block mx-2"></img>
                        )
                    })

                    }
                </div>
            </div>

            <div className="flex-col justify-center md:justify-start mt-4 ml-8 ">
                <h1 className='mb-4 font-bold md:text-2xl'>{product.name}</h1>
                <div className="rating  flex gap-2 mb-3">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half"></i>
                    <p className="font-bold ml-8">(4.5)</p>
                </div>
                <h2 className='mb-4 text-pink-500 md:text-2xl font-bold '>${product.price}</h2>
            
                
                <div className="size flex  mb-4 ">
                        
                        {sizes.map((size,index) => 
                            (<span className='bg-gray-600'  key={index} onClick={() => chooseSize(size)}>
                                {size}
                            </span>)
                        )}
                        
                </div>


                <div className="flex  mb-4">
                        <i className="fa fa-circle-minus md:text-2xl" onClick={() => handleDecrease()}></i>
                        <span className='mx-3 md:text-2xl text-pink-400 font-bold'>{ quantity }</span>
                        <i className="fa fa-circle-plus md:text-2xl" onClick={() => handleIncrease()}></i>
                </div>
                
                <div className="flex  h-9 w-4/5 mt-5">
                
                    <button className='hover:bg-black m-0 shadow-md'
                        onClick={() => addItemToWishList(product)}>
                        <i className="fa fa-heart"></i>
                    </button>

                    <button className='hover:bg-black my-0 ml-4 shadow-md'
                        onClick={() => addItemToCart(product)}>
                        Add to cart
                    </button>
                </div>
                
                
            </div>
        </div>


        <div className="review w-11/12 mx-auto flex">
            <h1 className={`${tab !== 'desc' ? 'inactive' : 'active' } active font-bold cursor-pointer`}
             onClick={() => activeTab('desc') }>
                Details
            </h1>
            <h1 className={`${tab === 'review' ? 'active' : '' } mx-5 font-bold cursor-pointer`}
             onClick={() => activeTab('review') }>
                Reviews <span className=''>(4.5)</span>
            </h1>
        </div>
        

        <div className="w-11/12 mx-auto">
            {tab ===  'desc' ? 
                (<div className="review">
                    <h2>{product.desc}</h2>
                </div>)
            
                :  

                (<div className="review">
                    <h2>This is review</h2>
                </div>)
            }
        </div>
        



        <div className="block mt-8 w-11/12 mx-auto">
            <h1 className='font-bold text-lg mb-4 text-center md:text-left'>Let's hear from you</h1>
            <form action="" className='pt-4 mx-auto md:m-0' onSubmit={ handleReview}>
                
                <div className="form-group">
                    <input required type="text" value={user}  onChange={(e) => setUser(e.target.value)} />
                    <label htmlFor="" >Name</label>
                </div>

                <div className="form-group">
                    <textarea required id="" cols="30" rows="10" value={review} onChange={(e) => setReview(e.target.value)}></textarea>
                    <label htmlFor="">Share your experience here</label>
                </div>

                <button>Send Review</button>
            </form>
        </div>
    </section>
  )
}

export default ProductDetails