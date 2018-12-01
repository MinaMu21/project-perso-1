import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import './Compteur.css';

class Compteur extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    incrementSimple = () => {
        this.setState({
            count: this.state.count + 1
        });
    }
    incrementCinq = () => {
        this.setState({
            count: this.state.count + 5
        })
    }
    decrementSimple = () => {
        this.setState({
            count: this.state.count - 1
        });
    }
    decrementCinq = () => {
        this.setState({
            count: this.state.count - 5
        });
    }
    clearState = () => {
        this.setState({
            count: 0
        })
    }

    render() {
        return (
            <div className="fondCompteur" >
                <Container >
                    <Row>
                        <Col className="mt-5 mb-5 ml-5 mr-5" sm={{ size: 12}} >
                            <p className="colorCompteur"> Mon compteur:
                        <br /><span className="affichageCompteur" >{this.state.count}</span></p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={{ size: 2, offset: 1 }}>
                            <Button color="secondary" onClick={this.incrementCinq} className="colorBouton ">+ 5</Button>
                        </Col>
                        <Col sm={{ size: 2 }}>
                            <Button color="secondary" onClick={this.incrementSimple} className="colorBouton ">+ 1</Button>
                        </Col>
                        <Col sm={{ size: 2 }}>
                            <Button  onClick={this.clearState} className="colorBoutonClear">Clear</Button>
                        </Col>
                        <Col sm={{ size: 2 }}>
                            <Button color="secondary" onClick={this.decrementSimple} className="colorBouton ">- 1</Button>
                        </Col>
                        <Col sm={{ size: 2 }}>
                            <Button color="secondary" onClick={this.decrementCinq} className="colorBouton ">- 5</Button>
                        </Col>
                    </Row>
                </Container>
            </div >
        );
    }
}

export default Compteur;