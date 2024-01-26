import React, { useContext } from 'react';
import { Contexts } from '../../context/ProductContext';

const ScrollBtn = () => {
    const { scrollRef } = useContext(Contexts);

    const scrollLeft = () => {
        scrollRef.current.scrollBy({
            left: -180,
            behavior: 'smooth'
        })
    }

    const scrollRight = () => {
        scrollRef.current.scrollBy({
            left: 180,
            behavior: 'smooth'
        })
    }
  return (
    <div className="flex">
        <i className="fa fa-chevron-left scrollbtn absolute left-0"  onClick={ scrollLeft }></i>
        <i className="fa fa-chevron-right scrollbtn absolute right-5 md:right-20 z-50" onClick={ scrollRight }></i>
    </div>
  )
}

export default ScrollBtn