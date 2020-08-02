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
import {
    Card,
    CardBody,
    Row,
    Col,
    CardTitle,
    CardText,
    Button,
} from "reactstrap";

class Result extends React.Component {
    lang; //3

    timestamps = [60, 120, 180, 240];
    constructor(props) {
        super(props);
        this.player = React.createRef();
        this.state = { seeked: false, time: 0, playing: false };
        this.state = {
            lang: config.language,
        };
        this.wavesurfer = null;
    }

    componentDidUpdate() {
        //4
        if (this.state.lang !== config.language) {
            this.setState({
                lang: config.language,
            });
        }
    }

    createButton(seconds, id) {
        let minutes = Math.floor(seconds / 60) % 60;
        let hours = Math.floor(seconds / 3600);
        seconds = seconds % 60;
        let time = "";
        time += hours < 10 ? `0${hours}:` : `${hours}:`;
        time += minutes < 10 ? `0${minutes}:` : `${minutes}:`;
        time += seconds < 10 ? `0${seconds}` : `${seconds}`;
        return (
            <Button
                className="pl-2 pr-2 pt-1 pb-1"
                id={"timestamp-" + id}
                onClick={() => {
                    this.setState({ time: seconds, playing: true });
                    this.player.current.seekTo(this.state.time, "seconds");
                }}
            >
                {time}
            </Button>
        );
    }
    createButtons() {
        let buttons = [];
        for (let index = 0; index < this.timestamps.length; index++) {
            buttons.push(this.createButton(this.timestamps[index], index));
        }
        return buttons;
    }

    render() {
        return (
            <div className="content">
                <Row className="justify-content-center">
                    <Col md="6" sm="12" lg="6">
                        <Card>
                            <CardBody>
                                <CardTitle className="h4">
                                    {this.props.image ? "Image" : "Video"} added
                                    to queue
                                </CardTitle>
                                <CardText>
                                    {content[this.state.lang].result.title19}
                                </CardText>
                                <Row className="justify-content-center">
                                    <a
                                        className="btn btn-success"
                                        href="history"
                                    >
                                        Ok{" "}
                                        <i
                                            className="fa fa-thumbs-up"
                                            aria-hidden="true"
                                        ></i>
                                    </a>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Result;
