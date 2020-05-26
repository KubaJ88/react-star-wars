import React, { useEffect } from 'react';
import './character.styles.scss';
import {connect} from 'react-redux';
import { useRouteMatch} from 'react-router-dom';
import gsap from 'gsap';


const Characters = ({characters}) => {

    const charAnimation = () => {
    const tl = gsap.timeline();
    
        tl.from('.character-box', {
            duration: 3,          
            y:-5,             
            ease: "back",
            stagger: {
                amount:0.5
            }
    })
}
    
    

    let match = useRouteMatch("/details/:movieId");
    const movie_id = match.params.movieId

    const choosen_movie = characters.characters.find(movie => movie.episode_id == movie_id);

    
    useEffect(() => {
        charAnimation()
    }, [])



    return( 
        <div className="character">
            {choosen_movie.character.map(person => (
                <div key={person.name} className="character-box">
                    <div className="character-box__name">{person.name}</div>
                    <div className="character-box__others">Height: {person.height}</div>
                    <div className="character-box__others">Gender: {person.gender}</div>
                    <div className="character-box__others">Mass: {person.mass}</div>
                    </div>

            ))}
            
            
        </div>
    )
};


const mapStateToProps = state => {
    return {
      characters: state.rootReducer.characters
      
    }
  };
 

export default connect(mapStateToProps)(Characters);