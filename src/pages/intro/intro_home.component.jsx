import React, {useEffect, useState} from 'react';
import IntroOverlay from '../../components/intro-overlay/introOverlay';
import gsap from 'gsap';

const homeAnimation = (completeAnimation) => {
    const tl = gsap.timeline();
    
        tl.from('.star', {
            duration: 3,
            scale:1.5,
            opacity:0,
            skewY:0,
            ease: "expo.inOut"
        })
        .to('.star', {
            duration:.3,
            x:"+=20",            
            yoyo:true, 
            repeat:5
        })
        .to('.star', {
            duration:2,
            opacity:0,
            scale:0,
            ease: 'expo.inOut'
        })
        .from('.line span', {
          duration: 1.8,
          opacity:0,
          y:100,
          ease: 'power4.out',
          delay:1,
          skewY: 7,
          stagger: {
            amount: .3
          }
    
        })
        .to('.overlay-top', {
          duration: 1.6,
          height:0,
          ease: 'expo.inOut',
          stagger: 0.4
        })        
        .to('.intro-overlay', {
          duration:0, 
          css: {
            display: 'none'
          }          ,
          onComplete: completeAnimation
        })

    }

const Intro = () => {

    const [animationComplete, setAnimationComplete] = useState(false);

    const completeAnimation = () => {
        setAnimationComplete(true);
    }   


    useEffect( () => {    
        homeAnimation(completeAnimation)    
        
          }, [])


          return (
            <>
            {animationComplete ? '' : <IntroOverlay/>}
            </>
          )

};



export default Intro;
