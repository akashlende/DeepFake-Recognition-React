import React, { Component } from "react";
import { Modal, ModalBody, FormText, FormGroup, Label, Button, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { AvForm, AvField } from "availity-reactstrap-validation";
import Axios from "axios";
import config from "../../config";
import content from "../../content.json";

export default class LoginModal extends Component {
    lang;
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: localStorage.getItem("loggedIn") === "true",
            isLogin: true,
            lang: config.language,
        };
        this.handleLogin = this.handleLogin.bind(this);
        this.handleSignup = this.handleSignup.bind(this);
        this.changeForm = this.changeForm.bind(this);
    }

    componentDidUpdate() {
        if (this.state.lang !== config.language) {
            this.setState({
                lang: config.language,
            });
        }
    }

    handleLogin(e) {
        e.preventDefault();
        const username = this.username.value;
        const password = this.password.value;

        Axios.post(`${config.serverURL}/users/login`, {
            username: username,
            password: password,
        })
            .then((res) => {
                if (res.data.success) {
                    localStorage.setItem("loggedIn", "true");
                    localStorage.setItem("user", JSON.stringify(res.data));
                    this.setState({
                        loggedIn: localStorage.getItem("loggedIn") === "true",
                    });
                    window.location.reload();
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    changeForm() {
        this.setState({
            isLogin: !this.state.isLogin,
        });
    }

    handleSignup(e) {
        e.preventDefault();
        const username = this.username.value;
        const password = this.password.value;
        const fullName = this.fullName.value;
        const email = this.email.value;

        Axios.post(`${config.serverURL}/users/signup`, {
            username: username,
            password: password,
            name: fullName,
            email: email,
        })
            .then((res) => {
                if (res.data.success) {
                    this.handleLogin(e);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        return (
            <Modal isOpen={!this.state.loggedIn} toggle={this.toggleLoginModal}>
                <div className="modal-header">
                    <h4 className="modal-title" id="loginModal">
                        {this.state.isLogin
                            ? content[this.state.lang].loginmodal.title46
                            : content[this.state.lang].loginmodal.title47}
                    </h4>
                    <Link to="/home" className="" data-dismiss="modal" aria-hidden="true">
                        <i className="tim-icons icon-simple-remove text-danger" />
                    </Link>
                </div>
                <ModalBody>
                    <AvForm
                        onValidSubmit={this.state.isLogin ? this.handleLogin : this.handleSignup}
                    >
                        <FormGroup hidden={this.state.isLogin}>
                            <Label for="fullName" style={{ color: "black" }} className="h4">
                                {content[this.state.lang].loginmodal.title33}
                            </Label>
                            <AvField
                                innerRef={(node) => (this.fullName = node)}
                                type="text"
                                name="fullName"
                                id="fullName"
                                errorMessage={content[this.state.lang].loginmodal.title48}
                                bsSize="lg"
                                placeholder={content[this.state.lang].loginmodal.title49}
                                required={!this.state.isLogin}
                                style={{ color: "black" }}
                            />
                            <FormText color="muted">
                                {content[this.state.lang].loginmodal.title34}
                            </FormText>
                        </FormGroup>
                        <FormGroup hidden={this.state.isLogin}>
                            <Label for="email" style={{ color: "black" }} className="h4">
                                {content[this.state.lang].loginmodal.title35}
                            </Label>
                            <AvField
                                innerRef={(node) => (this.email = node)}
                                type="email"
                                name="email"
                                id="email"
                                errorMessage={content[this.state.lang].loginmodal.title50}
                                bsSize="lg"
                                placeholder={content[this.state.lang].loginmodal.title51}
                                required={!this.state.isLogin}
                                style={{ color: "black" }}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="username" style={{ color: "black" }} className="h4">
                                {content[this.state.lang].loginmodal.title36}
                            </Label>
                            <AvField
                                innerRef={(node) => (this.username = node)}
                                type="text"
                                name="username"
                                id="username"
                                errorMessage={content[this.state.lang].loginmodal.title52}
                                bsSize="lg"
                                placeholder={content[this.state.lang].loginmodal.title53}
                                required
                                style={{ color: "black" }}
                            />
                            <FormText color="muted">
                                {content[this.state.lang].loginmodal.title34}
                            </FormText>
                        </FormGroup>
                        <FormGroup className="mb-4">
                            <Label for="password" className="h4" style={{ color: "black" }}>
                                {content[this.state.lang].loginmodal.title37}
                            </Label>
                            <AvField
                                innerRef={(node) => (this.password = node)}
                                type="password"
                                name="password"
                                validate={{
                                    pattern: {
                                        value: this.state.isLogin
                                            ? ""
                                            : "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})",
                                    },
                                }}
                                id="password"
                                errorMessage={
                                    this.state.isLogin
                                        ? content[this.state.lang].loginmodal.title54
                                        : content[this.state.lang].loginmodal.title56
                                }
                                bsSize="lg"
                                placeholder={content[this.state.lang].loginmodal.title55}
                                required
                                autoComplete="off"
                                style={{ color: "black" }}
                            />
                        </FormGroup>
                        <Row className="justify-content-center">
                            <Button color="primary" type="submit">
                                {content[this.state.lang].loginmodal.title38}
                            </Button>
                        </Row>
                        <Row className="justify-content-center mt-3">
                            <h5 style={{ color: "black" }}>
                                {this.state.isLogin
                                    ? content[this.state.lang].loginmodal.title57
                                    : content[this.state.lang].loginmodal.title58}
                            </h5>
                        </Row>
                        <Row className="justify-content-center">
                            <Button color="info" onClick={this.changeForm}>
                                {this.state.isLogin
                                    ? content[this.state.lang].loginmodal.title59
                                    : content[this.state.lang].loginmodal.title60}
                            </Button>
                        </Row>
                    </AvForm>
                </ModalBody>
            </Modal>
        );
    }
}

// validate={{
// 	pattern: {
// 		value:
// 			"^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})",
// 	},
// }}
