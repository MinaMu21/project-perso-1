import React, { Component } from 'react';
import Bouton from './Bouton';
import Affichage from './Affichage';
import { Container, Row, Col } from 'reactstrap';


class Calculatrice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            affichage: ""

        }
    }

    render() {
        return (
            <div className="calcul" >
                <div className="calc-wrapper">
                <Affichage affichage={this.state.affichage} ></Affichage>
                    <Container>
                        <Row className="row" >
                            <Col className="ml-5 pl-0 pr-0">
                            <Bouton>C</Bouton>
                            </Col>
                            <Col className="mr-5 pl-0 pr-0">
                            <Bouton>/</Bouton>
                            </Col >
                        </Row>
                        <Row>
                            <Col className="ml-5 pl-0 pr-0" >
                                <Bouton>7</Bouton>
                            </Col>
                            <Col className="pl-0 pr-0">
                                <Bouton>8</Bouton>
                            </Col>
                            <Col className="pl-0 pr-0">
                                <Bouton>9</Bouton>
                            </Col>
                            <Col className="mr-5 pl-0 pr-0">
                                <Bouton>*</Bouton>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="ml-5 pl-0 pr-0" >
                                <Bouton>4</Bouton>
                            </Col>
                            <Col className="pl-0 pr-0">
                                <Bouton>5</Bouton>
                            </Col>
                            <Col className="pl-0 pr-0">
                                <Bouton>6</Bouton>
                            </Col>
                            <Col className="mr-5 pl-0 pr-0">
                                <Bouton>-</Bouton>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="ml-5 pl-0 pr-0" >
                                <Bouton>1</Bouton>
                            </Col>
                            <Col className="pl-0 pr-0">
                                <Bouton>2</Bouton>
                            </Col>
                            <Col className="pl-0 pr-0">
                                <Bouton>3</Bouton>
                            </Col>
                            <Col className="mr-5 pl-0 pr-0">
                                <Bouton>+</Bouton>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="ml-5 pl-0 pr-0" >
                                <Bouton>0</Bouton>
                            </Col>
                            <Col className="mr-5 pl-0 pr-0">
                                <Bouton>=</Bouton>
                            </Col>
                        </Row>


                    </Container>
                </div>
            </div>
        );
    }
}

export default Calculatrice;