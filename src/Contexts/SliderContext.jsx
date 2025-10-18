import React, { useState } from 'react'
import { createContext, useContext } from "react";

//step:1 creat 
const SliderContext = createContext();

export const useSliderContext = () => useContext(SliderContext)


export const SliderProvider = ({ children }) => {

    
    function handleScrollToTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }

    function handleScrollToBottom() {
        window.scrollTo({
            top: document.body.scrollHeight,
            left: 0,
            behavior: "smooth",
        });
    }



    const sliderValue = {
        handleScrollToTop,
        handleScrollToBottom
    }

    return <SliderContext.Provider value={sliderValue}>
        {children}
    </SliderContext.Provider>
}


//write where you want to add/ use Slider
//import { useSliderContext } from '../Contexts/SliderContext';
//const { handleScrollToTop, handleScrollToBottom } = useSliderContext();

// and all wrap app with SliderProvide