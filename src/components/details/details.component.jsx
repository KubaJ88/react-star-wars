import React from 'react';
import './details.styles.scss';
import Characters from '../characters/characters.component';
import {useRouteMatch} from 'react-router-dom';
import {connect} from 'react-redux'


const Detail = ({movies}) => {

   



    
    let match = useRouteMatch("/details/:movieId");
    const movie_id = match.params.movieId

    const choosen_movie = movies.movies.find(movie => movie.episode_id == movie_id);

    console.log(choosen_movie)
   
    const {title, director, episode_id, producer, characters,
         planets, spacies, starships, vehicles, release_date} = choosen_movie
   

    return (
        <div className="main">
        <div className='movie-info'>
            
            <div className="movie-info__text">
                <h1>{title}</h1>
            <div className="movie-info__text__details">
                <div className="movie-info__text__details--item">
                <div className="item-name">Director</div>
                <h5>{director}</h5>
                </div>
                <div className="movie-info__text__details--item">
                <div className="item-name">Producer</div>
                <h5>{producer}</h5>
                </div>
                <div className="movie-info__text__details--item">
                <div className="item-name">Relase Date</div>
                <h5>{release_date}</h5>
                </div>
                <div className="movie-info__text__details--item">
                <div className="item-name">Episode</div>
                <h5>{episode_id}</h5>                
                </div>
                
                <div className="movie-info__text__details--item">
                <div className="item-name">Characters #</div>
                <h5>{characters.length}</h5>                
                </div>                
                <div className="movie-info__text__details--item">
                <div className="item-name">Starships #</div>
                <h5>{starships.length}</h5>                
                </div>                
                <div className="movie-info__text__details--item">
                <div className="item-name">Vehicles #</div>
                <h5>{vehicles.length}</h5>                
                </div>                
                <div className="movie-info__text__details--item">
                <div className="item-name">Planet #</div>
                <h5>{planets.length}</h5>                
                </div>                
                             
                
                
            </div>
                
            </div>
            <div className="movie-info__img" style={{
                backgroundImage: `url('../images/${episode_id}.jpg`}}>            
            </div>         
          
            
        </div>
        <div className='characters'>
            <h1>Characters in movie</h1>
                <Characters/>
            </div>
        
        </div>
    )

}


const mapStateToProps = state => {
    return {
      movies: state.rootReducer.movies,
      isPending: state.rootReducer.movies.isPending
    }
  };
 


export default connect(mapStateToProps)(Detail);


