import React, { Component } from 'react';
import './Affichage2.css';

class Affichage2 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="affichage2" > 
                <h1>{this.props.result} </h1>
            </div>
         );
    }
}
 
export default Affichage2;