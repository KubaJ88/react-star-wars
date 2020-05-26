import MovieActionType from './movie.type';



const initialStateProfile = {
    isPending: false,
    characters: [],
    error: ''
}



const charactersReducer = (state=initialStateProfile, action={}) => {
    switch(action.type) {
        case MovieActionType.REQUEST_CHARACTERS_PENDING:
            return {...state, 
            isPending: true
            }
        case MovieActionType.REQUEST_CHARACTERS_SUCCESS:
            return {...state, 
            characters: action.payload,
            isPending: false
        }
        case MovieActionType.REQUEST_CHARACTERS_FAILED:
            return {...state, 
            error: action.payload,
            isPending: false
            }
        default:
            return state;
    }
}

export default charactersReducer;
