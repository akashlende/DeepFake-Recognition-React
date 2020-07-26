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
import React, { Component } from "react";
import {
    Button,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
} from "reactstrap";
import config from "../../config";
import context from "../../content.json";

class FixedPlugin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classes: "dropdown show-dropdown",
            loggedIn: localStorage.getItem("loggedIn") === "true",
            isLangDropdownOpen: false,
        };
        this.handleLogout = this.handleLogout.bind(this);
        this.toggleLangDropdown = this.toggleLangDropdown.bind(this);
    }
    handleClick = () => {
        if (this.state.classes === "dropdown show-dropdown") {
            this.setState({ classes: "dropdown show-dropdown show" });
        } else {
            this.setState({ classes: "dropdown show-dropdown" });
        }
    };
    activateMode = (mode) => {
        switch (mode) {
            case "light":
                document.body.classList.add("white-content");
                break;
            default:
                document.body.classList.remove("white-content");
                break;
        }
    };
    handleLogout() {
        localStorage.setItem("loggedIn", "false");
        localStorage.setItem("user", "");
        this.setState(
            {
                loggedIn: localStorage.getItem("loggedIn") === "true",
            },
            () => {
                window.location.reload();
            },
        );
    }

    toggleLangDropdown = () => {
        this.setState((prevState) => {
            return {
                isLangDropdownOpen: !prevState.isLangDropdownOpen,
            };
        });
    };

    render() {
        return (
            <div className="fixed-plugin">
                <div className={this.state.classes}>
                    <div onClick={this.handleClick}>
                        <i className="fa fa-cog fa-2x" />
                    </div>
                    <ul className="dropdown-menu show">
                        <li className="header-title">SIDEBAR BACKGROUND</li>
                        <li className="adjustments-line">
                            <div className="badge-colors text-center">
                                <span
                                    className={
                                        this.props.bgColor === "primary"
                                            ? "badge filter badge-primary "
                                            : "badge filter badge-primary active"
                                    }
                                    data-color="primary"
                                    onClick={() => {
                                        this.props.handleBgClick("primary");
                                    }}
                                />{" "}
                                <span
                                    className={
                                        this.props.bgColor === "blue"
                                            ? "badge filter badge-info "
                                            : "badge filter badge-info active"
                                    }
                                    data-color="blue"
                                    onClick={() => {
                                        this.props.handleBgClick("blue");
                                    }}
                                />{" "}
                            </div>
                        </li>
                        <li className="header-title">Language</li>
                        <li className="adjustments-line text-center color-change">
                            <UncontrolledDropdown
                                toggle={(e) => {
                                    this.toggleLangDropdown();
                                }}
                                isOpen={this.state.isLangDropdownOpen}
                            >
                                <DropdownToggle
                                    caret
                                    data-toggle="dropdown"
                                    size="sm"
                                    style={{ fontWeight: 300 }}
                                >
                                    Select your language
                                </DropdownToggle>
                                <DropdownMenu
                                    hidden={!this.state.isLangDropdownOpen}
                                    className="pb-1"
                                >
                                    <DropdownItem
                                        onClick={() => {
                                            this.props.changeLanguage("en");
                                            config.language = "en";
                                        }}
                                        className="text-white"
                                    >
                                        English
                                    </DropdownItem>
                                    <DropdownItem
                                        onClick={() => {
                                            this.props.changeLanguage("hi");
                                            config.language = "hi";
                                        }}
                                        className="text-white"
                                    >
                                        Hindi
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </li>
                        <li className="header-title">Theme</li>
                        <li className="adjustments-line text-center color-change">
                            <span className="color-label">LIGHT MODE</span>{" "}
                            <span
                                className="badge light-badge mr-2"
                                onClick={() => this.activateMode("light")}
                            />{" "}
                            <span
                                className="badge dark-badge ml-2"
                                onClick={() => this.activateMode("dark")}
                            />{" "}
                            <span className="color-label">DARK MODE</span>{" "}
                        </li>
                        <li className="ml-5" hidden={!this.state.loggedIn}>
                            <Button onClick={this.handleLogout} color="danger" className="ml-3">
                                Logout
                            </Button>
                        </li>
                        <li className="header-title">Like our solution?</li>
                        <li className="button-container">
                            <Button href="" className="btn-round" block color="info">
                                Read Documentation
                            </Button>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default FixedPlugin;
