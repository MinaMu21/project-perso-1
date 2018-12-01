import React from 'react';
import Bouton from './Bouton';
import './Cards.css';


const Cards = (props) => {
        return (

            <div className='deck-container'>
                <ul className='deck-list'>
                    {props.cards.map(card =>(
                        <li className='card-item' key={card.id}>
                            <br/>
                            <h2>{card.titre}</h2>
                            <img className='imageSize' src={card.image}  alt="imageCard"/>
                            <br/><br/>
                        <Bouton 
                            moveToDeck={props.moveToDeck}
                            card={card}
                            />
                        </li>                      
                    ))}
                </ul>
            </div>
        );
}
export default Cards;