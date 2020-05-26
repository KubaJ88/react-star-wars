import logger from 'redux-logger';
import {persistStore} from 'redux-persist';
import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import rootReducer from './rootReducer';



const middlewares = [thunkMiddleware]

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}

const rootReducers = combineReducers({rootReducer});
export const store = createStore(rootReducers,
applyMiddleware(...middlewares))

export const persistor = persistStore(store);