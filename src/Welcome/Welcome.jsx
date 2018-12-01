import React, { Component } from 'react';
import './Welcome.css';

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Mon Projet 1',
        }
    }
    render() {
        return (
            <div classname="welcome" >
                <h1 className="positionTitre" >Welcome <span>{this.state.name}</span></h1>
            </div >
        );
    }
}
export default Welcome;