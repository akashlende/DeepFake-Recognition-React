/* eslint-disable react/jsx-no-target-blank */
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
import config from "../config";
import content from "../content.json";

// reactstrap components
import { Button, Card, CardBody, CardFooter, Row, Col } from "reactstrap";

class About extends React.Component {
    lang;

    constructor(props) {
        super(props);
        this.state = {
            lang: config.language,
        };
    }

    componentDidUpdate() {
        //4
        if (this.state.lang !== config.language) {
            this.setState({
                lang: config.language,
            });
        }
    }
    render() {
        return (
            <>
                <div className="content">
                    <Row>
                        <Col md="4">
                            <Card className="card-user">
                                <CardBody style={{ minHeight: 390 }}>
                                    <div className="author">
                                        <img
                                            alt="sakshi"
                                            src={require("assets/img/sakshi.jpeg")}
                                            className="avatar"
                                        />
                                        <h5 className="title">
                                            {
                                                content[this.state.lang].about
                                                    .title6
                                            }
                                        </h5>
                                        <p className="description pb-3">
                                            {
                                                content[this.state.lang].about
                                                    .title7
                                            }
                                        </p>
                                        <i
                                            class="fa fa-quote-left"
                                            aria-hidden="true"
                                            style={{
                                                position: "relative",
                                                top: -5,
                                            }}
                                        ></i>
                                        <p
                                            className="description d-inline pl-1 pr-1"
                                            style={{ lineHeight: 2.0 }}
                                        >
                                            {
                                                content[this.state.lang].about
                                                    .quote1
                                            }
                                        </p>
                                        <i
                                            class="fa fa-quote-right"
                                            aria-hidden="true"
                                            style={{
                                                position: "relative",
                                                top: -5,
                                            }}
                                        ></i>
                                    </div>
                                </CardBody>
                                <CardFooter>
                                    <div className="button-container">
                                        <a
                                            href="https://github.com/SaShaShady"
                                            // eslint-disable-next-line react/jsx-no-target-blank
                                            target="_blank"
                                        >
                                            <Button className="btn-icon btn-round">
                                                <i className="fab fa-github" />
                                            </Button>
                                        </a>
                                        <a
                                            href="http://www.linkedin.com/in/sakshi-doshi-84b899a3"
                                            // eslint-disable-next-line react/jsx-no-target-blank
                                            target="_blank"
                                        >
                                            <Button className="btn-icon btn-round">
                                                <i className="fab fa-linkedin" />
                                            </Button>
                                        </a>
                                    </div>
                                </CardFooter>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card className="card-user">
                                <CardBody style={{ minHeight: 390 }}>
                                    <div className="author">
                                        <img
                                            alt="parag"
                                            src={require("assets/img/parag.jpeg")}
                                            className="avatar"
                                        />
                                        <h5 className="title">
                                            {
                                                content[this.state.lang].about
                                                    .title8
                                            }
                                        </h5>
                                        <p className="description pb-3">
                                            {
                                                content[this.state.lang].about
                                                    .title9
                                            }
                                        </p>
                                        <i
                                            class="fa fa-quote-left"
                                            aria-hidden="true"
                                            style={{
                                                position: "relative",
                                                top: -5,
                                            }}
                                        ></i>
                                        <p className="description d-inline pl-1 pr-1">
                                            {
                                                content[this.state.lang].about
                                                    .quote5
                                            }
                                        </p>
                                        <i
                                            class="fa fa-quote-right"
                                            aria-hidden="true"
                                            style={{
                                                position: "relative",
                                                top: -5,
                                            }}
                                        ></i>
                                    </div>
                                </CardBody>
                                <CardFooter>
                                    <div className="button-container">
                                        <a
                                            href="https://github.com/Parag0506"
                                            target="_blank"
                                        >
                                            <Button className="btn-icon btn-round">
                                                <i className="fab fa-github" />
                                            </Button>
                                        </a>
                                        <a
                                            href="https://www.linkedin.com/in/parag-ghorpade"
                                            target="_blank"
                                        >
                                            <Button className="btn-icon btn-round">
                                                <i className="fab fa-linkedin" />
                                            </Button>
                                        </a>
                                    </div>
                                </CardFooter>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card className="card-user">
                                <CardBody style={{ minHeight: 390 }}>
                                    <div className="author">
                                        <img
                                            alt="akash"
                                            src={require("assets/img/akash.jpeg")}
                                            className="avatar"
                                        />
                                        <h5 className="title">
                                            {
                                                content[this.state.lang].about
                                                    .title10
                                            }
                                        </h5>
                                        <p className="description pb-3">
                                            {
                                                content[this.state.lang].about
                                                    .title11
                                            }
                                        </p>
                                        <i
                                            class="fa fa-quote-left"
                                            aria-hidden="true"
                                            style={{
                                                position: "relative",
                                                top: -5,
                                            }}
                                        ></i>
                                        <p className="description d-inline pl-1 pr-1">
                                            {
                                                content[this.state.lang].about
                                                    .quote2
                                            }
                                        </p>
                                        <i
                                            class="fa fa-quote-right"
                                            aria-hidden="true"
                                            style={{
                                                position: "relative",
                                                top: -5,
                                            }}
                                        ></i>
                                    </div>
                                </CardBody>
                                <CardFooter>
                                    <div className="button-container">
                                        <a
                                            href="https://github.com/akashlende"
                                            target="_blank"
                                        >
                                            <Button className="btn-icon btn-round">
                                                <i className="fab fa-github" />
                                            </Button>
                                        </a>
                                        <a
                                            href="https://www.linkedin.com/in/akash-lende-b24338193"
                                            target="_blank"
                                        >
                                            <Button className="btn-icon btn-round">
                                                <i className="fab fa-linkedin" />
                                            </Button>
                                        </a>
                                    </div>
                                </CardFooter>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="4">
                            <Card className="card-user">
                                <CardBody style={{ minHeight: 390 }}>
                                    <div className="author">
                                        <img
                                            alt="richa"
                                            src={require("assets/img/richa.jpg")}
                                            className="avatar"
                                        />
                                        <h5 className="title">
                                            {
                                                content[this.state.lang].about
                                                    .title12
                                            }
                                        </h5>
                                        <p className="description pb-3">
                                            {
                                                content[this.state.lang].about
                                                    .title13
                                            }
                                        </p>
                                        <i
                                            class="fa fa-quote-left"
                                            aria-hidden="true"
                                            style={{
                                                position: "relative",
                                                top: -5,
                                            }}
                                        ></i>
                                        <p className="description d-inline pl-1 pr-1">
                                            {
                                                content[this.state.lang].about
                                                    .quote3
                                            }
                                        </p>
                                        <i
                                            class="fa fa-quote-right"
                                            aria-hidden="true"
                                            style={{
                                                position: "relative",
                                                top: -5,
                                            }}
                                        ></i>
                                    </div>
                                </CardBody>
                                <CardFooter>
                                    <div className="button-container">
                                        <a
                                            href="https://github.com/richa7maurya"
                                            target="_blank"
                                        >
                                            <Button className="btn-icon btn-round">
                                                <i className="fab fa-github" />
                                            </Button>
                                        </a>
                                        <a
                                            href="https://www.linkedin.com/in/richa-maurya-566469193"
                                            target="_blank"
                                        >
                                            <Button className="btn-icon btn-round">
                                                <i className="fab fa-linkedin" />
                                            </Button>
                                        </a>
                                    </div>
                                </CardFooter>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card className="card-user">
                                <CardBody style={{ minHeight: 390 }}>
                                    <div className="author">
                                        <img
                                            alt="varun"
                                            src={require("assets/img/varun.jpeg")}
                                            className="avatar"
                                        />
                                        <h5 className="title">
                                            {
                                                content[this.state.lang].about
                                                    .title14
                                            }
                                        </h5>
                                        <p className="description pb-3">
                                            {
                                                content[this.state.lang].about
                                                    .title15
                                            }
                                        </p>
                                        <i
                                            class="fa fa-quote-left"
                                            aria-hidden="true"
                                            style={{
                                                position: "relative",
                                                top: -5,
                                            }}
                                        ></i>
                                        <p
                                            className="description d-inline pl-1 pr-1"
                                            style={{ lineHeight: 2.0 }}
                                        >
                                            {
                                                content[this.state.lang].about
                                                    .quote4
                                            }
                                        </p>
                                        <i
                                            class="fa fa-quote-right"
                                            aria-hidden="true"
                                            style={{
                                                position: "relative",
                                                top: -5,
                                            }}
                                        ></i>
                                    </div>
                                </CardBody>
                                <CardFooter>
                                    <div className="button-container">
                                        <a
                                            href="https://github.com/VarunIrani"
                                            target="_blank"
                                        >
                                            <Button className="btn-icon btn-round">
                                                <i className="fab fa-github" />
                                            </Button>
                                        </a>
                                        <a
                                            href="https://www.linkedin.com/in/varun-irani-b4275b192/"
                                            target="_blank"
                                        >
                                            <Button
                                                className="btn-icon btn-round"
                                                color="google"
                                            >
                                                <i className="fab fa-linkedin" />
                                            </Button>
                                        </a>
                                    </div>
                                </CardFooter>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card className="card-user">
                                <CardBody style={{ minHeight: 390 }}>
                                    <div className="author">
                                        <img
                                            alt="mane"
                                            src={require("assets/img/mane.jpeg")}
                                            className="avatar"
                                        />
                                        <h5 className="title">
                                            {
                                                content[this.state.lang].about
                                                    .title16
                                            }
                                        </h5>
                                        <p className="description pb-3">
                                            {
                                                content[this.state.lang].about
                                                    .title17
                                            }
                                        </p>
                                        <i
                                            class="fa fa-quote-left"
                                            aria-hidden="true"
                                            style={{
                                                position: "relative",
                                                top: -5,
                                            }}
                                        ></i>
                                        <p className="description d-inline pl-1 pr-1">
                                            {
                                                content[this.state.lang].about
                                                    .quote6
                                            }
                                        </p>
                                        <i
                                            class="fa fa-quote-right"
                                            aria-hidden="true"
                                            style={{
                                                position: "relative",
                                                top: -5,
                                            }}
                                        ></i>
                                    </div>
                                </CardBody>
                                <CardFooter>
                                    <div className="button-container">
                                        <a
                                            href="https://github.com/hrishikeshmane"
                                            target="_blank"
                                        >
                                            <Button className="btn-icon btn-round">
                                                <i className="fab fa-github" />
                                            </Button>
                                        </a>
                                        <a
                                            href="https://www.linkedin.com/in/hrishikesh-mane-755bab16a"
                                            target="_blank"
                                        >
                                            <Button className="btn-icon btn-round">
                                                <i className="fab fa-linkedin" />
                                            </Button>
                                        </a>
                                    </div>
                                </CardFooter>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}

export default About;
