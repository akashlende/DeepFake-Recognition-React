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

// reactstrap components
import {
    Card,
    CardBody,
    Row,
    Col,
    Progress,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    FormGroup,
    Button,
    Label,
    Input,
    FormText,
    CardHeader,
} from "reactstrap";
import Dropzone from "react-dropzone";
import ReactPlayer from "react-player";
import Result from "./Result";
import Axios from "axios";
import LoginModal from "../components/Modals/LoginModal";

import path from "path";
import config from "../config";
import content from "../content.json";

class ProgressBar extends React.Component {
    render() {
        if (this.props.dropped) this.props.updateProgress();
        return (
            <>
                <Col sm="12" className="mb-3 mt-3 text-center">
                    {this.props.result == null && this.props.progress < 100 ? (
                        <>
                            <h4>{this.props.text}</h4>
                            <Progress value={this.props.progress} />
                        </>
                    ) : null}
                </Col>
            </>
        );
    }
}

class Classify extends React.Component {
    lang;
    constructor(props) {
        super(props);
        this.state = {
            image: false,
            progress: 0,
            dropped: false,
            url: "",
            text: "Uploading File...",
            result: null,
            lang: config.language,
        };
        this.player = React.createRef();
        this.changeClicked = this.changeClicked.bind(this);
        this.updateProgress = this.updateProgress.bind(this);
    }

    componentDidUpdate() {
        if (this.state.lang !== config.language)
            this.setState({
                lang: config.language,
            });
    }

    updateProgress() {
        if (this.state.progress < 100) {
            setTimeout(() => {
                this.setState({
                    text:
                        this.state.progress >= 60
                            ? "Classifying File..."
                            : "Pre-processing File...",
                    progress: this.state.progress + 1,
                });
            }, Math.random() * 1000);
        }
    }
    readFileAsync(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onerror = reject;
            reader.readAsDataURL(file);
            reader.onload = () => {
                const formData = new FormData();
                const ext = path.extname(file.path);
                if (ext === ".mp4" || ext === ".avi") {
                    const video = file;
                    const user = JSON.parse(localStorage.getItem("user"));
                    formData.append("video", video);
                    formData.append("userId", user.id);
                    Axios.post(`${config.serverURL}/classify`, formData, {
                        headers: {
                            "Content-Type": "multipart/form-data",
                            Authorization: `Bearer ${user.token}`,
                        },
                    })
                        .then((res) => {
                            this.setState({
                                image: false,
                                result: res.data.message,
                                progress: 100,
                            });
                            resolve(reader.result);
                        })
                        .catch((err) => reject(err));
                } else if (
                    ext === ".jpg" ||
                    ext === ".png" ||
                    ext === ".jpeg"
                ) {
                    const image = file;
                    const user = JSON.parse(localStorage.getItem("user"));
                    formData.append("image", image);
                    formData.append("userId", user.id);
                    Axios.post(`${config.serverURL}/get-image`, formData, {
                        headers: {
                            "Content-Type": "multipart/form-data",
                            Authorization: `Bearer ${user.token}`,
                        },
                    })
                        .then((res) => {
                            this.setState({
                                image: true,
                                result: res.data.message,
                                progress: 100,
                            });
                            resolve(reader.result);
                        })
                        .catch((err) => reject(err));
                } else {
                    this.setState({
                        result: "Invalid File",
                        progress: 100,
                    });
                    resolve(reader.result);
                }
            };
        });
    }
    onDrop(acceptedFiles) {
        acceptedFiles.forEach(async (file) => {
            await this.readFileAsync(file)
                .then((value) => {
                    this.setState({ url: value });
                })
                .catch((err) => console.log(err));
        });
    }

    changeClicked() {
        this.setState({ clicked: true });
    }

    render() {
        return (
            <>
                <div className="content">
                    <LoginModal></LoginModal>
                    <Row className="justify-content-center">
                        <Col sm="12">
                            <h2>{content[this.state.lang].routes.title42}</h2>
                        </Col>
                        <Col sm="12" md="12" lg="12">
                            <Card>
                                <CardHeader>
                                    Officer Incharge Details
                                </CardHeader>
                                <CardBody>
                                    <form>
                                        <Row>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <Label for="exampleEmail">
                                                        Officer Name
                                                    </Label>
                                                    <Input
                                                        type="text"
                                                        name="officername"
                                                        id="officername"
                                                        placeholder="Enter Officer's Name"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="3">
                                                <FormGroup>
                                                    <Label for="exampleEmail">
                                                        Officer ID
                                                    </Label>
                                                    <Input
                                                        type="text"
                                                        name="officerid"
                                                        id="officerid"
                                                        placeholder="Enter Officer Id"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="3">
                                                <FormGroup>
                                                    <Label for="exampleEmail">
                                                        Police Station
                                                    </Label>
                                                    <Input
                                                        type="text"
                                                        name="police_station"
                                                        id="police_station"
                                                        placeholder="Enter Police Station's Name"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col lg="4">
                                                <FormGroup>
                                                    <Label for="exampleEmail">
                                                        District Name
                                                    </Label>
                                                    <Input
                                                        type="text"
                                                        name="dist_name"
                                                        id="dist_name"
                                                        placeholder="Enter the Disctict's Name"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="4">
                                                <FormGroup>
                                                    <Label for="exampleEmail">
                                                        City Name
                                                    </Label>
                                                    <Input
                                                        type="text"
                                                        name="city_name"
                                                        id="city_name"
                                                        placeholder="Enter the City's Name"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="4">
                                                <FormGroup>
                                                    <Label for="exampleEmail">
                                                        State Name
                                                    </Label>
                                                    <Input
                                                        type="text"
                                                        name="state_name"
                                                        id="state_name"
                                                        placeholder="Enter the State Name"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </form>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardHeader>Complaint Details</CardHeader>
                                <CardBody>
                                    <Row>
                                        <Col lg="4">
                                            <FormGroup>
                                                <Label for="exampleEmail">
                                                    FIR ID
                                                </Label>
                                                <Input
                                                    type="text"
                                                    name="firid"
                                                    id="firid"
                                                    placeholder="Enter FIR ID"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col lg="2">
                                            <FormGroup>
                                                <Label for="exampleEmail">
                                                    FIR Date
                                                </Label>
                                                <Input
                                                    type="date"
                                                    name="date"
                                                    id="date"
                                                    placeholder="Enter date"
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <FormGroup>
                                        <Label for="exampleEmail">
                                            FIR Description
                                        </Label>
                                        <Input
                                            type="textarea"
                                            name="firdesp"
                                            id="firdesp"
                                        />
                                    </FormGroup>
                                    <Row>
                                        <Col lg="4">
                                            <FormGroup>
                                                <Label for="exampleEmail">
                                                    Person Mentioned In The
                                                    Video
                                                </Label>
                                                <Input
                                                    type="text"
                                                    name="vid_person"
                                                    id="vid_person"
                                                    placeholder="Enter Name Of The Person In The Video"
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardHeader>Complainant Details</CardHeader>
                                <CardBody>
                                    <Row>
                                        <Col lg="4">
                                            <FormGroup>
                                                <Label for="exampleEmail">
                                                    Complainant Name
                                                </Label>
                                                <Input
                                                    type="text"
                                                    name="comp_name"
                                                    id="comp_name"
                                                    placeholder="Enter the Complainant's Name"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col lg="4">
                                            <FormGroup>
                                                <Label for="exampleEmail">
                                                    Contact Number Of The
                                                    Complainant
                                                </Label>
                                                <Input
                                                    className="col-lg-6"
                                                    type="Number"
                                                    name="complainant_no"
                                                    id="complainant_no"
                                                    placeholder="Enter Contact Number Of The Complainant"
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg="4">
                                            <FormGroup>
                                                <Label for="exampleEmail">
                                                    Aadhar Card Number
                                                </Label>
                                                <Input
                                                    type="number"
                                                    name="aadhar"
                                                    id="aadhar"
                                                    placeholder="Enter The Aadhar Number"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col lg="4">
                                            <FormGroup>
                                                <Label for="exampleEmail">
                                                    Email Address
                                                </Label>
                                                <Input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    placeholder="Email Address"
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg="8">
                                            <FormGroup>
                                                <Label for="exampleEmail">
                                                    Complainant's Address
                                                </Label>
                                                <Input
                                                    type="text"
                                                    name="comp_add"
                                                    id="comp_add"
                                                    placeholder="comp_add"
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <FormGroup>
                                        <UncontrolledDropdown>
                                            <DropdownToggle
                                                caret
                                                data-toggle="dropdown"
                                            >
                                                Gender
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem>
                                                    Male
                                                </DropdownItem>
                                                <DropdownItem>
                                                    Female
                                                </DropdownItem>
                                                <DropdownItem>
                                                    Others
                                                </DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                    </FormGroup>
                                </CardBody>
                            </Card>
                            <Row>
                                <Col className="mr-auto ml-auto" lg="2">
                                    <Button color="primary" type="submit">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                            <Card>
                                <CardBody>
                                    <Row className="justify-content-center">
                                        {this.state.url && this.state.image ? (
                                            <img
                                                className="mr-3 ml-3"
                                                src={this.state.url}
                                                alt=""
                                            />
                                        ) : this.state.url ? (
                                            <ReactPlayer
                                                url={this.state.url}
                                                controls
                                                className="mr-3 ml-3"
                                                ref={this.player}
                                            />
                                        ) : null}

                                        {!this.state.dropped ? (
                                            <Dropzone
                                                multiple={false}
                                                onDropAccepted={() =>
                                                    this.setState({
                                                        dropped: true,
                                                    })
                                                }
                                                onDrop={(acceptedFiles) => {
                                                    this.onDrop(acceptedFiles);
                                                }}
                                            >
                                                {({
                                                    getRootProps,
                                                    getInputProps,
                                                }) => (
                                                    <div
                                                        {...getRootProps()}
                                                        className="ml-5 mr-5"
                                                    >
                                                        <Col
                                                            sm="12"
                                                            className="mt-5 mb-5"
                                                        >
                                                            <input
                                                                {...getInputProps()}
                                                            />
                                                            <h4 className="text-center">
                                                                {
                                                                    content[
                                                                        this
                                                                            .state
                                                                            .lang
                                                                    ].classify
                                                                        .title6
                                                                }
                                                            </h4>
                                                        </Col>
                                                    </div>
                                                )}
                                            </Dropzone>
                                        ) : (
                                            <ProgressBar
                                                progress={this.state.progress}
                                                dropped={this.state.dropped}
                                                text={this.state.text}
                                                changeClicked={
                                                    this.changeClicked
                                                }
                                                updateProgress={
                                                    this.updateProgress
                                                }
                                                result={this.state.result}
                                            />
                                        )}
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    {this.state.url ? (
                        <Result
                            url={this.state.url}
                            result={this.state.result}
                            image={this.state.image}
                        />
                    ) : null}
                </div>
            </>
        );
    }
}

export default Classify;
