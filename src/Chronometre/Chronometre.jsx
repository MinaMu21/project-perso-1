import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import './Chronometre.css';


class Chronometre extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0,
        }
        this.getSecond = this.getSecond.bind(this);
        this.getMinute = this.getMinute.bind(this);
    }
    getInitialTime = () => {
        this.setState({ time: 0 });
    }

    getSecond() {
        return ('0' + this.state.time % 60).slice(-2);
    }

    getMinute() {
        return Math.floor(this.state.time / 60);
    }

    handleStartClick = () => {
        this.incrementer = setInterval(() => {
            this.setState({
                time: this.state.time + 1
            });
        }, 1000)
    }

    handleStopClick = () => {
        clearInterval(this.incrementer);
    }

    handleClearClick = () => {
        this.setState({
            time: this.state.time = 0
        });
    }

    render() {
        return (
            <div className="fondChrono" >
                <Container>
                    <Row>
                        <Col className="mt-5">
                            <p className="colorChrono">Chronomètre
                            <br /><span>{this.getMinute()} : {this.getSecond()}</span></p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="mt-5 " sm={{ size: 3, offset: 3 }} >
                            <Button className="btnforme" color="primary" type='button' onClick={this.handleStartClick}>Start</Button>
                        </Col>
                        <Col className="mt-5" sm={{ size: 3 }}>
                            <Button className="btnforme" color="danger" type='button' onClick={this.handleStopClick}>Stop</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="mt-5" sm={{ size: 2, offset: 5 }} >
                            <Button className="btnformeClear" color="info" type='button' onClick={this.handleClearClick}>Clear</Button>
                        </Col>
                    </Row>
                </Container>


            </div>
        );
    }
}

export default Chronometre;