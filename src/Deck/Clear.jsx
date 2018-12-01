import React from 'react';
import { Button } from 'reactstrap';

const Clear = (props) => {
    return (
        <Button
            color="success"
            className='clear-btn'
            onClick={() => props.getClear(props.card)}>
            Clear section
        </Button>
    );
}
export default Clear;