import React, { Component } from 'react';
import ChartBar from './ChartBar';
import BubbleChart from './BubbleChart';
import { Container, Row, Col } from 'reactstrap';
import './AllChart.css';

class AllChart extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="allchart" >
                <div className="chartBar" >
                    <Container>
                        <Row>
                            <Col d-flex justify-content-start className="mb-1 mt-5" sm={{ size: 5}}>
                                <h1 className="titre" >1/ Graphique Bar vertical</h1>
                            </Col>
                        </Row>
                        <ChartBar />
                    </Container>
                </div>
                <div className="chartBubble" >
                    <Container>
                        <Row>
                            <Col d-flex justify-content-start className="mb-1 mt-5" sm={{ size: 5}}>
                                <h1 className="titre" >2/ Graphique Bubble</h1>
                            </Col>
                        </Row>
                        <BubbleChart />
                    </Container>
                </div>
            </div>
        );
    }
}

export default AllChart;