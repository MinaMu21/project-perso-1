import React from 'react';
import './HeaderDeck.css';

const HeaderDeck = (props) => {
    return (
        <div className="HeaderTitre" >
            <h1>{props.titre} </h1>
        </div>
    )
}
export default HeaderDeck;