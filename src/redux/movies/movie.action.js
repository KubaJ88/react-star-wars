import MovieActionType from './movie.type';



export const getMovies = () => (dispatch) => {

    dispatch({type: MovieActionType.REQUEST_MOVIE_PENDING});
    fetch('https://swapi.dev/api/films')
    .then(response => response.json())
    .then(response => response)
    .then(movies => {dispatch({
        type: MovieActionType.REQUEST_MOVIE_SUCCESS,
        payload: movies.results.sort((ma,mb) => 
        ma.episode_id - mb.episode_id
        )})
        dispatch(getMoviesCharacters(movies.results))
    }
    )
    .catch(error => dispatch(
        {type: MovieActionType.REQUEST_MOVIE_FAILED, 
            payload: error
        })) ;
}




export const getMoviesCharacters = (movieUrl) => 
async (dispatch) => {
dispatch({type: MovieActionType.REQUEST_CHARACTERS_PENDING});

const all_characters = [];

await movieUrl.map(async urls => {

    try {

    let episode_id = urls.episode_id

    const character = await Promise.all(urls.characters.map( async url => {
        
        let characterResponse = await fetch(url)        
        let respond =  await characterResponse.json()
        return respond

    }))

    
    
    

    

    const data = {episode_id, character}

    all_characters.push(data)

    // console.log(all_characters)
    
    }

    catch(error) {

        dispatch({type: MovieActionType.REQUEST_CHARACTERS_FAILED, 
                payload: error}
        )
    }


    finally {
        dispatch({
                type: MovieActionType.REQUEST_CHARACTERS_SUCCESS,
                payload: all_characters
            })
    }

    
     
       
       
})


}