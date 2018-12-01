import React from 'react';
import './Bouton.css';

const isOperator = val => {
    return !isNaN(val) || val === "." || val === "=";
}

const Bouton = props => 
            <div className= {`button-wrapper
             ${isOperator(props.children) ? null : "operator"}`}  >
                   {props.children}
            </div>


export default Bouton;