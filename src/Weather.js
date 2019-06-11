import React from 'react';
import {Container, Row, Col, Tabs, Tab} from "react-bootstrap";

import './weather.css'
import {Weekly} from "./Weekly";
import {Hourly} from './Hourly'

class Weather extends React.Component{
    render() {
        console.log(this.props.currentData);
        return (
            <Container style={{padding: '20px'}}>
                <Row>
                    <Container style={{'boxShadow': '2px 2px 10px lightgray', maxWidth: '900px'}}>
                        <Row>
                            <Col lg={4} className={"left-side"}>
                                <Row>
                                    <Col lg={12}>
                                        <img src={this.props.currentData.temperature == undefined ? 'weather-icons/179.png' : this.props.currentData.icon} className="large-icon-size"/>
                                    </Col>
                                </Row>
                                <Row className={"mb-3"}>
                                    <Col lg={12}>
                                        <h3>{this.props.currentData.temperature == undefined ? 'Enter a city' : <span>{this.props.currentData.temperature}  <sup>o</sup>C</span> }</h3>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={12}>
                                        <Tabs defaultActiveKey="Today" style={{'justify-content': 'center'}}>
                                            <Tab eventKey="Today" title="Today">
                                                <Hourly/>
                                            </Tab>
                                            <Tab eventKey="Week" title="Week">
                                                <Weekly/>
                                            </Tab>
                                        </Tabs>
                                    </Col>
                                </Row>
                            </Col>

                            <Col lg={8} className={"p-0"}>
                                <Container style={{height: '100%', padding: 0}}>
                                    <div style={{position: 'relative', height: '100%'}}>
                                        <img src={"defualt.jpg"} className="image-style"/>
                                        <div className={"temperature"}>
                                            <span>{this.props.currentData.temperature}<sup>o</sup></span>
                                        </div>

                                        <div className={"city"}>
                                            <span>{this.props.currentData.city}</span>
                                        </div>

                                        <div className={"time"}>
                                            <span>{this.props.currentData.time}</span>
                                        </div>

                                    </div>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </Row>
            </Container>
        )
    }
}

Weather.defaultProps = {
    weatherData : {
        data : {
            current: {
                cloud : 20
            }
        }
    }
};

export default Weather



