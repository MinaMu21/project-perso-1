import React, { Component } from 'react';
import Cards from './Cards';
import HeaderDeck from './HeaderDeck';
import Clear from './Clear';
import { Container, Row, Col } from 'reactstrap';
import './Deck.css';

const cards = [
    {
        id: 1,
        image: "http://lecourrieraustralien.cdnartwhere.eu/wp-content/uploads/2017/09/peppa-pig-2.jpg",
        titre: "Peppa-Pig",
    },
    {
        id: 2,
        image: "https://img-31.ccm2.net/rghQi65cd9WfHbKUH7apsxhdRSM=/1240x/smart/31e34f0acfa04f45bdc47e7fe1cf1ba6/ccmcms-hugo/10557926.jpg",
        titre: "Princesse Sofia",
    },
    {
        id: 3,
        image: "https://i.ytimg.com/vi/7q3uKDOk3cI/maxresdefault.jpg",
        titre: "Octonauts",
    },
    {
        id: 4,
        image: "https://img1.gtv.digimondo.net/var/gtv/storage/gtvimages/9/6/1/3/4/96134253/515298800800.jpg",
        titre: "Yakari",
    },
    {
        id: 5,
        image: "https://is1-ssl.mzstatic.com/image/thumb/Music69/v4/a4/fa/09/a4fa09f4-5eee-8cfe-7cf5-7c2b1d3af34b/source/1200x630bb.jpg",
        titre: "Puffin Rock",
    },
    {
        id: 6,
        image: "https://static.ladepeche.fr/content/media/image/zoom/2011/03/06/31363.jpg",
        titre: "Max et Ruby",
    },
]

class Deck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deck: [],
            reserve: [],
            titre: 'Deck Countainer'
        }
        this.getClear = this.getClear.bind(this);
    }

    componentDidMount = () => {
        this.setState({
            reserve: cards,
        });
    }

    getClear() {
        this.setState({
            deck: [],
            reserve: cards,
        })
    }

    toDeck = (card) => {
        this.setState(prevState => ({
            reserve: prevState.reserve.filter(c => c.id !== card.id),
            deck: [...prevState.deck, card]
        }));

    }
    render() {
        return (
            <div className="cardVisible" >
                <Container>
                    <Row>
                        <Col justify-content-center className="mb-5 mt-5" sm={{ size: 4, offset: 4 }} >
                            <HeaderDeck titre={this.state.titre} />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="textDeck mr-5" sm={{ size: 5 }}>
                            <h2>Selection Images</h2>
                        </Col>
                        <Col className="textDeck" sm={{ size: 5 }}>
                            <h2>Réserve</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="clearText" sm={{ size: 6 }}>
                            <Clear classname="clearDeck"
                                getClear={this.getClear}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col className='deck-container-box pl-3 pr-3 pt-3 pb-3' sm={{ size: 6 }}>
                            <Cards className="cardDeck"
                                title='Current Deck'
                                cards={this.state.deck}
                                moveToDeck={this.toDeck}
                            />
                        </Col>
                        <Col className='deck-container-box pl-3 pr-3 pt-3 pb-3' sm={{ size: 6 }}>
                            <Cards className="cardDeck"
                                title='Reserve'
                                cards={this.state.reserve}
                                moveToDeck={this.toDeck}

                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Deck;