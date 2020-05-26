import React from 'react';
import {useHistory} from 'react-router-dom';
import './header.styles.scss';
import Intro from '../../pages/intro/intro_home.component';



const Header = () => {

   

    let history = useHistory();

   
    
    return (
        <>
        <header className="header">
            <Intro/>
        
        
        <img src='/images/logo.svg' alt="Star" className="star_header" onClick={() => {
                history.push(`/`)
            }}></img>
        <h2> 
                        <div className='line'>
                            <span>A long time ago in a galaxy </span>
                        </div>
                        <div className='line'>
                            <span>far, far away.... </span>
                        </div>
                        
            </h2>
        
    </header>
    </>
)
}

export default Header;