import React from 'react';
import './movie-profile.styles.scss';
import { withRouter, useHistory, useRouteMatch} from 'react-router-dom';


const MoviePreview = ({details}) => {

    const {title, episode_id, release_date} = details
    let history = useHistory();
    let match = useRouteMatch("/");
    


    return (
        <section className="movie-preview">
            <div className="movie-preview__details">
                <h1>{title}</h1>
                <h5>Episode: {episode_id}</h5>                
                <h5 className="year">{release_date}</h5>                
            <button className='btn' onClick={() => {
                history.push(`${match.url}details/${episode_id}`)
            }} >Detalis</button>
            </div>
            <div className='movie-preview__image'
            style={{
                backgroundImage: `url('images/${episode_id}.jpg`}}></div>
        </section>
    )
}

export default withRouter(MoviePreview);