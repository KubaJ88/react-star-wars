import React, {lazy, Suspense} from 'react';
import './styles/base.scss';
import Header from './components/header/header.component';
import ErrorBoundary from './components/error-boundry/error-boundry.component';
import {Switch, Route} from 'react-router-dom';


const Home = lazy(() => import('./pages/home/home.component'));
const MovieDetails = lazy( () => import('./pages/movie-details/movie-details..component'));

function App() {
  return (
    
    <div className="container">
            
      <Header/>
      <Switch>
      <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
      <Route exact path ='/' component={Home}></Route>
      <Route exact path ='/details/:movieId' component={MovieDetails}></Route>
      </Suspense>
      </ErrorBoundary>
      </Switch>
      
    </div>
  );
}

export default App;
