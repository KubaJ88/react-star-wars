import React, {useEffect} from 'react';
import MoviesPreview from '../movie/movie.component';
import {connect} from 'react-redux';
import {getMovies} from '../../redux/movies/movie.action';
import './home.styles.scss';





const Home = ({onRequestMovies, movies, isPending}) => {

    
    useEffect( () => {
        onRequestMovies()
      },[])
     
          

    return (
        <>
        
        {isPending ? <div className="loading">Loading</div> :
        movies.movies.map((movie) => <MoviesPreview key={movie.episode_id} props={movie}/>
       )}       
        </>
    )
};


const mapStateToProps = state => {
    return {
      movies: state.rootReducer.movies,
      isPending: state.rootReducer.movies.isPending
    }
  };

  const mapDispatchToProps = dispatch => {
    return {    
      onRequestMovies: () => dispatch(getMovies())
  
    }
  };


  export default connect(mapStateToProps,mapDispatchToProps)(Home);