import React, { Component } from 'react';
import './Bouton2.css';

class Bouton2 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div >
            <button className="bouton" onClick={() => this.props.getElement(this.props.name)} >{this.props.name}</button>
            </div>
         );
    }
}
 
export default Bouton2;