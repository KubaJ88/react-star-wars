import MovieActionType from './movie.type';



const initialStateProfile = {
    isPending: false,
    movies: [],
    error: ''
}



const movieReducer = (state=initialStateProfile, action={}) => {
    switch(action.type) {
        case MovieActionType.REQUEST_MOVIE_PENDING:
            return {...state, 
            isPending: true
            }
        case MovieActionType.REQUEST_MOVIE_SUCCESS:
            return {...state, 
            movies: action.payload,
            isPending: false
        }
        case MovieActionType.REQUEST_MOVIE_FAILED:
            return {...state, 
            error: action.payload,
            isPending: false
            }
        default:
            return state;
    }
}

export default movieReducer;
