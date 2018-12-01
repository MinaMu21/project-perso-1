import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Welcome from './Welcome/Welcome';
import Horloge from './Horloge/Horloge';
import Compteur from './Compteur/Compteur';
import Chronometre from './Chronometre/Chronometre';
// import Calculatrice from './Calculatrice/Calculatrice';
import Calculatrice2 from './Calculatrice2/Calculatrice2';
import Deck from './Deck/Deck';
import AllChart from './AllChart/AllChart';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return ( 
      
      <div className = "App" > 
            <NavBar />
           <Welcome />
        <Switch>
            <Route  exact path="/"
                render={() => (     
                  <Horloge />
            )}
              />
            <Route
            onUpdate={window.scrollTo(0, 0)}
            path="/compteur/"
            component={Compteur }
              />
            <Route
            onUpdate={window.scrollTo(0, 0)}
            path="/chronometre/"
            component={Chronometre }
              />
            <Route
            onUpdate={window.scrollTo(0, 0)}
            path="/calculatrice2/"
            component={Calculatrice2 }
              />
             <Route
            onUpdate={window.scrollTo(0, 0)}
            path="/deck/"
            component={Deck }
              />
              <Route
            onUpdate={window.scrollTo(0, 0)}
            path="/allchart/"
            component={AllChart }
              />            
        </Switch>
  
      </div>
    );
  }
}
export default App;
