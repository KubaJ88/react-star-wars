import React, {useRef} from 'react';
import './movie.styles.scss';
import FlyingText from '../../components/fly-text/fly-text.component';
import MoviePreview from '../../components/movie-profile/movie-profile.component';
import gsap from 'gsap';
import { useIntersection } from "react-use";



const fadeIn = (name) => {
    gsap.to(`.${name}`, {
        duration: .3,
       opacity:1,
       y:0,        
        ease: "power1.in",
       
    })
}

const fadeOut = (name) => {
    gsap.to(`.${name}`, {
        duration: .3,        
        opacity:0,
        y:-30,      
        ease: "power1.in",
        
    })
}



const MoviesPreview = ({props}) => {

    
    const {opening_crawl, episode_id, title} = props;
    
    const sectionRef = useRef(null);
   
    const intersection = useIntersection(sectionRef, {
        root: null,
        rootMargin: "0px",
        threshold: 0.8
    });

    intersection && intersection.intersectionRatio < 0.8
      ?   fadeOut(`movie-${episode_id}`) : fadeIn(`movie-${episode_id}`);

 
    

    return (
        
        <section className={`movie movie-${episode_id}`} ref={sectionRef}>
            
            <FlyingText text={opening_crawl} episode_id={episode_id} title={title}/>
            <MoviePreview details={props} />
            
            
         
            
        </section>
        
    )
}


export default MoviesPreview;