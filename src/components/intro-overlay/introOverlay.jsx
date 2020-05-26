import React from 'react';
import './intro.style.scss'

const IntroOverlay = () => {
    
    return (
        <>
        
            <div className='intro-overlay'>
         
            <img src='/images/logo.svg' alt="Star" className="star"></img>
            
                <div className='top'>
               
                    <div className='overlay-top'></div>
                    <div className='overlay-top'></div>
                    <div className='overlay-top'></div>
                </div>            
            </div>
        </>
    )

}


export default IntroOverlay;