import React, { useContext, useEffect, useState } from 'react';
import { Contexts } from '../../context/ProductContext';
import { AnimatePresence, motion } from 'framer-motion';

const ImageSlider = () => {

    const { images } = useContext(Contexts)
    
    const [currentIndex, setCurrentIndex] = useState(0);//keeping track of index of currently displayed image

    //automatically updating index to display images one after the other
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length)
        }, 3000);

        return () => {
            clearInterval(interval)
        }
    }, [images.length])

  return (
       <div className='w-full h-full'>
        <AnimatePresence initial={false} >
            { images.map((image, index) => (
                
                <motion.img src={image} alt="" className='w-full object-fill absolute h-full'
                    key={ index }
                    initial={{ opacity: 0 }}
                    animate=
                    {{ opacity: index === currentIndex ? 1 : 0,
                        y: index === currentIndex ? 0 : -100,
                        
                    }}
                    transition= {{ duration: 0.7}}
                    exit={{ opacity: 0 }}
                
                />
            ))}
        </AnimatePresence>
       </div>
  )
}

export default ImageSlider;