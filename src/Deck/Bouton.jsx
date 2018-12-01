import React from 'react';
import { Button } from 'reactstrap';

const Bouton = (props) => {
    return (
        <Button
        color='danger'
            className='to-deck-btn'
            onClick={() => props.moveToDeck(props.card)}>
            Ajouter
        </Button>
    );
}
export default Bouton;