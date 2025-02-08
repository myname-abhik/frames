import React from 'react'
import {useLottie, useLottieInteractivity } from "lottie-react"
import confetti from "../assets/3314.json"
const style = {
    height:800,
}
const options ={
    animationData:confetti,
    autoplay:true,  
};

const Lottie = () => {
const lottieObj = useLottie(options,style)
const Animation = useLottieInteractivity({
    lottieObj,
    mode:"scroll",
    actions:[
        {
            visibility:[0,0.9],
            type:"seek",
            frames:[0,53]
        }
    ]
})
    
  return Animation;
}

export default Lottie