import {combineReducers} from 'redux';
import movieReducer from './movies/movie.reducer';
import charactersReducer from './movies/characters.reducer';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key: 'root',
    storage,
    whitelist:['movies', 'characters']
}



const rootReducer = combineReducers({
    movies: movieReducer,
    characters: charactersReducer    
});

export default persistReducer(persistConfig, rootReducer);