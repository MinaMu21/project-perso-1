import React, { Component } from 'react';
import './Historique2.css';

class Historique2 extends Component {
    
    render() {
        return (
            <div className="historique2" >
                {this.props.historique.map( (objet, index) =>
                    <div>
                        <h3>Historique : </h3>
                        <ul>
                            <li key={index} operation={objet.operation} total={objet.total} >Opération = {objet.operation} </li>
                            <li key={index} operation={objet.operation} total={objet.total} >Résultat = {objet.total}</li>
                        </ul>
                    </div>
                )}
            </div>
        );
    }
}

export default Historique2;