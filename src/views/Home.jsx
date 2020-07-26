/*!

=========================================================
* Black Dashboard React v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin used to create charts
import { Line } from "react-chartjs-2";
import { Link } from "react-router-dom";

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

// core components
import chartExample2 from "variables/charts.jsx";
import ReactPlayer from "react-player";
import config from "../config";
import content from "../content.json";

class Home extends React.Component {
    lang;
    constructor(props) {
        super(props);
        this.state = {
            bigChartData: "data1",
            lang: config.language,
        };
    }
    setBgChartData = (name) => {
        this.setState({
            bigChartData: name,
        });
    };

    componentDidUpdate() {
        if (this.state.lang != config.language)
            this.setState({
                lang: config.language,
            });
    }

    render() {
        return (
            <>
                <div className="content">
                    <Row>
                        <Col sm="12">
                            <Card>
                                <CardBody>
                                    <Row className="justify-content-center">
                                        <Col lg="6" sm="12">
                                            <ReactPlayer
                                                url="https://www.youtube.com/watch?v=C8FO0P2a3dA"
                                                controls
                                                className="mt-4"
                                                width="parent"
                                                style={{
                                                    border: "0.3em solid #e14eca",
                                                    borderRadius: "1em",
                                                    padding: "0.5em",
                                                }}
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm="12" className="mt-3">
                                            <h3 className="text-justify ml-4 mr-4">
                                                {content[this.state.lang].home.title1}
                                            </h3>
                                            <h4 className="text-justify ml-4 mr-4">
                                                {content[this.state.lang].home.para1}
                                            </h4>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="12">
                            <Card>
                                <CardBody>
                                    <Row>
                                        <Col sm="12" className="mt-1">
                                            <h3 className="text-justify ml-4 mr-4">Our Approach</h3>
                                            <h4 className="text-justify ml-4 mr-4">
                                                Our method is based on the observations that current
                                                DeepFake algorithm can only generate images of
                                                limited resolutions, which need to be further warped
                                                to match the original faces in the source video.
                                                Such transforms leave distinctive artifacts in the
                                                resulting DeepFake videos. Our method detects such
                                                artifacts by comparing the generated face areas and
                                                their surrounding regions with a dedicated
                                                Convolutional Neural Network (CNN) model. Along with
                                                detection of DeepFake images and video, we also
                                                propose a solution to detect DeepFake audio to
                                                discern between real and fake audio, the detector
                                                uses visual representations of audio clips called
                                                spectrograms. Which is later classified by another
                                                CNN model as real or fake.
                                            </h4>
                                            <h4 className="text-justify ml-4 mr-4">
                                                The models are deployed on the flask-based web-app
                                                which consists of ReactJS (front end) interface. It
                                                is the most efficient and economical solution for
                                                implementing it. It works on the principle “Train
                                                once, use anywhere”. These models can also be
                                                extended in the future to be implemented as a API
                                                service for third party applications.
                                                <br />
                                                <br />
                                                Technology Stack:
                                                <ol>
                                                    <li> Tensorflow / Keras / OpenCV</li>
                                                    <li>
                                                        {" "}
                                                        Python, Flask (Open Source Web Framework)
                                                    </li>
                                                    <li>
                                                        {" "}
                                                        Google Cloud Platform and/or Microsoft Azure
                                                    </li>
                                                    <li> ReactJS</li>
                                                </ol>
                                            </h4>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="8">
                            <Card className="card-chart">
                                <CardHeader>
                                    <CardTitle tag="h3">Performance History</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <div className="chart-area">
                                        <Line
                                            data={chartExample2.data}
                                            options={chartExample2.options}
                                        />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="4" className="mt-auto mb-auto">
                            <Row className="justify-content-center">
                                <Link className="btn-simple btn-primary btn" to="classify">
                                    Start Classifying
                                </Link>
                            </Row>
                        </Col>
                    </Row>
                </div>
                {/* ---------------------------- */}
            </>
        );
    }
}

export default Home;
