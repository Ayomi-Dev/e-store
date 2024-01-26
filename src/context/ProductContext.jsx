import Img1 from '../assets/images/women/women10.jpeg'
import Img2 from '../assets/images/men/img1.jpg'
import Img3 from '../assets/images/women/women2.jpeg'
import Img4 from '../assets/images/men/img2.jpg'
import Img5 from '../assets/images/women/women11.jpg'
import Img6 from '../assets/images/men/img5.jpg'

import { createContext, useEffect, useRef, useState } from "react"; 
import { productsData } from "../assets/data/ProductData";
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { initCartFromLocalStorage } from '../redux/cart'

export const Contexts = createContext();

const ProductContext = ( { children } ) => {
    const sizes = ['S','M','L','XL']

    const c = console.log.bind(document);

    const [allProducts, setAllProducts] = useState(productsData);

    const [wishlist, setWishlist] = useState([])//creating state to store items in the wishlist

    const images = [Img1, Img2, Img3, Img4, Img5, Img6]

    const dispatch = useDispatch()

    useEffect(() => {
        const storedItem = JSON.parse(localStorage.getItem('wishlist'))

        if(storedItem){

            setWishlist(storedItem);
        }

        dispatch( initCartFromLocalStorage())//initializing function to retrieving items sored in the local storage
    }, []);

   

    //adding a new item to the wishlist array
    const  addToWishList = ( product ) => {
        const itemProps = {//creates a new object containing properties to be used as the properties of the added item
            id: product.id,
            img1: product.img1,
            price: product.price,
            name: product.name,
        }

        const wishItem = wishlist.find(item => item.id === product.id);//checks if the item to beadded exists in the array

        if(!wishItem){
            setWishlist([...wishlist, itemProps])
            localStorage.setItem('wishlist', JSON.stringify([...wishlist, itemProps]))
            toast.success('Item added to wishlist')
        }
        else{
           toast.warning('Item already in wishlist')
            return;
        }
    }

    //remooving item from wishlist array
    const removeFromWishlist = ( item ) => {
        setWishlist(wishlist.filter(product => product.id !== item.id))

        localStorage.setItem('wishlist', JSON.stringify(wishlist.filter(product => product.id !== item.id)));

        toast.error('Item removed from wishlist')
    }

    //setting list of items based on the category selected by the user
    const handleFilter = ( category ) => {
        const filteredProducts = productsData.filter(products => {
            
            if(products.category === category){
                return products
            }
        })

        return setAllProducts(filteredProducts)
    }

    //seting scroll function for carousel components
    const scrollRef = useRef();





    const value = {images, sizes, c, wishlist, allProducts, scrollRef, handleFilter, addToWishList, removeFromWishlist}

    return( 

        <Contexts.Provider value={ value  } >

        { children }

        </Contexts.Provider> 
    );
}

export default ProductContext;