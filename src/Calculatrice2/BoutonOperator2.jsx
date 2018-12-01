import React, { Component } from 'react';
import Bouton2 from './Bouton2';
import { Container, Row, Col } from 'reactstrap';



class BoutonOperator2 extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="calcul" >

                <Container>
                    <Row>
                        <Col md="6" className="pl-0 pr-0">
                            <Bouton2 name="C" getElement={this.props.getClear} />
                        </Col>
                        <Col md="6" className="pad pl-0 pr-0">
                            <Bouton2 name="/" getElement={this.props.getElement} />
                        </Col>
                    </Row>
                    <Row>
                        <Col md="3" className="pad pl-0 pr-0">
                            <Bouton2 name={7} getElement={this.props.getElement} />
                        </Col>
                        <Col md="3" className="pad pl-0 pr-0">
                            <Bouton2 name={8} getElement={this.props.getElement} />
                        </Col>
                        <Col md="3" className="pad pl-0 pr-0">
                            <Bouton2 name={9} getElement={this.props.getElement} />
                        </Col>
                        <Col md="3" className="pad pl-0 pr-0">
                            <Bouton2 name="*" getElement={this.props.getElement} />
                        </Col>
                    </Row>
                    <Row>
                        <Col md="3" className="pad pl-0 pr-0">
                            <Bouton2 name={4} getElement={this.props.getElement} />
                        </Col>
                        <Col md="3" className="pad pl-0 pr-0">
                            <Bouton2 name={5} getElement={this.props.getElement} />
                        </Col>
                        <Col md="3" className="pad pl-0 pr-0">
                            <Bouton2 name={6} getElement={this.props.getElement} />
                        </Col>
                        <Col md="3" className="pad pl-0 pr-0">
                            <Bouton2 name="-" getElement={this.props.getElement} />
                        </Col>
                    </Row>
                    <Row>
                        <Col md="3" className="pad pl-0 pr-0">
                            <Bouton2 name={1} getElement={this.props.getElement} />
                        </Col>
                        <Col md="3" className="pad pl-0 pr-0">
                            <Bouton2 name={2} getElement={this.props.getElement} />
                        </Col>
                        <Col md="3" className="pad pl-0 pr-0">
                            <Bouton2 name={3} getElement={this.props.getElement} />
                        </Col>
                        <Col md="3" className="pad pl-0 pr-0">
                            <Bouton2 name="+" getElement={this.props.getElement} />
                        </Col>

                    </Row>
                    <Row>
                        <Col md="6" className="pad pl-0 pr-0">
                            <Bouton2 name={0} getElement={this.props.getElement} />
                        </Col>
                        <Col md="6" className="pad pl-0 pr-0">
                            <Bouton2 name="=" getElement={this.props.getTotal} />
                        </Col>
                    </Row>
                </Container>

            </div >

        );
    }
}

export default BoutonOperator2;