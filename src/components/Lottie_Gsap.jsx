// import {useRef,useEffect} from 'react'
// import lottie from 'lottie-react'
// import { gsap } from "gsap";
//     import { ScrollTrigger } from "gsap/ScrollTrigger";
// // gsap.registerPlugin(ScrollTrigger);

// const Lottie_Gsap = () => {
//     const lottie_Ref = useRef(null)
//     useEffect(() => {
//         const  animation = lottie.loadAnimation({
//             container: lottie_Ref.current,
//             path:"../assets/11041434-hd_1920_1080_30fps.mp4.lottie (1).json",
//             render: "svg",
//             autoplay: true
//         })
//         gsap.registerPlugin(ScrollTrigger);
//         ScrollTrigger.create({
//             trigger: lottie_Ref.current,
//            scrub: true,
//            onUpdate: (self) => {
//             const progress = self.progress;
//             animation.goToAndStop(animation.totalFrames * progress,true);
//            }
//         })
//     },[])
    
//   return (
//     <div className='lottie-container' ref={lottie_Ref}></div>
//   )
// }

// export default Lottie_Gsap
import { useRef, useEffect } from "react";
import lottie from "lottie-web";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import animationData from "../assets/5322668-hd_1920_1080_30fps.mp4.lottie (1).json"; // Correct import
import { ReactLenis, useLenis } from 'lenis/react'


const Lottie_Gsap = () => {
  const lenis = useLenis()
  const lottieRef = useRef(null);

  useEffect(() => {
    if (!lottieRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    // Load Lottie animation
    const animation = lottie.loadAnimation({
      container: lottieRef.current,
      renderer: "svg", // Fixed 'render' to 'renderer'
      loop: true,
      autoplay: true,
      animationData, // Use imported JSON
    });

    // ScrollTrigger.create({
    //   trigger: lottieRef.current,
    //   scrub: 10,
    //   duration:4,
    //   marker:true,
    //   onUpdate: (self) => {
    //     const progress = self.progress;
    //     console.log(animation.totalFrames)
    //     animation.goToAndStop((animation.totalFrames * progress), true);
    //     // animation.goToAndPlay(true);
    //   },
    // });
    ScrollTrigger.create({
      trigger: lottieRef.current,
      scrub: 4, // Adjust for smoother effect
  end: "210%", 
      markers: true, // Show ScrollTrigger markers for debugging
      onUpdate: (self) => {
        if (animation) {
          const progress = self.progress; // Value from 0 to 1
          const frame = animation.totalFrames * progress;
          animation.goToAndStop(frame, true);
        }
      },
    });
    

    // return () => {
    //   animation.destroy(); 
    // };
  }, []);

  return (<> <ReactLenis root>
  <div className="lottie-container" ref={lottieRef}></div> 

  </ReactLenis>
  </>);
};

export default Lottie_Gsap;



