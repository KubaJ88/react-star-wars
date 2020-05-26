import React from 'react';
import './fly-text.styles.scss';






const FlyingText = ({text,title, episode_id}) => {

   

    return (
        <div className="fly">
            
            <div className="fly__text">
               <h3>Episode: {episode_id}</h3>
               <h1>{title}</h1>
               {text}
            </div>
            
        </div>
    )
};





export default(FlyingText);