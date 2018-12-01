import React, { Component } from 'react';
import Clock from './Clock';
import Header from './Header';

class Horloge extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: 'Mon Horloge',
         }
    }
    render() { 
        return ( 
            <div>
                <Header title={this.state.title}/>
                <Clock />
            </div>
         );
    }
}
 
export default Horloge;