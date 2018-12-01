import React, { Component } from 'react';
import Affichage2 from './Affichage2';
import Historique2 from './Historique2';
import BoutonOperator2 from './BoutonOperator2';
import { Container, Row, Col } from 'reactstrap';
import './Calculatrice2.css';

class Calculatrice2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: '',
            valeur1: '',
            valeur2: '',
            operateur: '',
            historique: [],
        }
        this.getClear = this.getClear.bind(this);
        this.getElement = this.getElement.bind(this);
        this.getTotal = this.getTotal.bind(this);
    }

    getClear() {
        this.setState({
            result: '',
            historique: [],
        })
    }

    getElement(number) {
        if (!isNaN(number)) {
            this.setState({
                result: `${this.state.result}${number}`,
            })
        } else {
            this.setState({
                valeur1: this.state.result,
                result: '',
                operateur: number,
            })
            console.log(this.state.operateur)
        }
    }

    getTotal() {
        let operation = this.state.valeur1 + this.state.operateur + this.state.result;
        let total = eval(operation);
        this.setState({
            valeur2: this.state.result,
            result: total,
            historique: [...this.state.historique, {
                operation: operation,
                total: total,
            }]
        })
    }

    render() {
        return (
            <div className="calculatriceVisible">
                <Container>
                    <Row>
                        <Col>
                            <Affichage2 result={this.state.result} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Historique2 historique={this.state.historique} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <BoutonOperator2 getClear={this.getClear}
                                getElement={this.getElement}
                                getTotal={this.getTotal} />
                        </Col>
                    </Row>
                </Container>

            </div>
        );
    }
}

export default Calculatrice2;