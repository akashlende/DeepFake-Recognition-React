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
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
} from "reactstrap";
import config from "../../config";
import content from "../../content.json";

class FixedPlugin extends Component {
    lang;
    constructor(props) {
        super(props);
        this.state = {
            classes: "dropdown show-dropdown",
            loggedIn: localStorage.getItem("loggedIn") === "true",
            isLangDropdownOpen: false,
            lang: config.language,
        };
        this.handleLogout = this.handleLogout.bind(this);
        this.toggleLangDropdown = this.toggleLangDropdown.bind(this);
    }

    componentDidUpdate() {
        if (this.state.lang !== config.language) {
            this.setState({
                lang: config.language,
            });
        }
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
                localStorage.setItem("theme", "light");
                document.body.classList.add("white-content");
                break;
            default:
                localStorage.setItem("theme", "dark");
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
            }
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
                        <li className="header-title">
                            {content[this.state.lang].fixedplugin.title20}
                        </li>
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
                        <li className="header-title">
                            {content[this.state.lang].fixedplugin.title21}
                        </li>
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
                                    style={{
                                        fontWeight: 300,
                                        maxWidth: 280,
                                        wordWrap: "break-word",
                                    }}
                                >
                                    {
                                        content[this.state.lang].fixedplugin
                                            .title22
                                    }
                                </DropdownToggle>
                                <DropdownMenu
                                    hidden={!this.state.isLangDropdownOpen}
                                    className="pb-1"
                                    style={{ width: 100 }}
                                >
                                    <DropdownItem
                                        onClick={() => {
                                            this.props.changeLanguage("en");
                                            config.language = "en";
                                        }}
                                        className="text-white"
                                    >
                                        {
                                            content[this.state.lang].fixedplugin
                                                .title23
                                        }
                                    </DropdownItem>
                                    <DropdownItem
                                        onClick={() => {
                                            this.props.changeLanguage("hi");
                                            config.language = "hi";
                                        }}
                                        className="text-white"
                                    >
                                        {
                                            content[this.state.lang].fixedplugin
                                                .title24
                                        }
                                    </DropdownItem>
                                    <DropdownItem
                                        onClick={() => {
                                            this.props.changeLanguage("gu");
                                            config.language = "gu";
                                        }}
                                        className="text-white"
                                    >
                                        {
                                            content[this.state.lang].fixedplugin
                                                .title31
                                        }
                                    </DropdownItem>
                                    <DropdownItem
                                        onClick={() => {
                                            this.props.changeLanguage("mr");
                                            config.language = "mr";
                                        }}
                                        className="text-white"
                                    >
                                        {
                                            content[this.state.lang].fixedplugin
                                                .title32
                                        }
                                    </DropdownItem>
                                    <DropdownItem
                                        onClick={() => {
                                            this.props.changeLanguage("te");
                                            config.language = "te";
                                        }}
                                        className="text-white"
                                    >
                                        {
                                            content[this.state.lang].fixedplugin
                                                .title33
                                        }
                                    </DropdownItem>
                                    <DropdownItem
                                        onClick={() => {
                                            this.props.changeLanguage("ben");
                                            config.language = "ben";
                                        }}
                                        className="text-white"
                                    >
                                        {
                                            content[this.state.lang].fixedplugin
                                                .title34
                                        }
                                    </DropdownItem>
                                    <DropdownItem
                                        onClick={() => {
                                            this.props.changeLanguage("pa");
                                            config.language = "pa";
                                        }}
                                        className="text-white"
                                    >
                                        {
                                            content[this.state.lang].fixedplugin
                                                .title35
                                        }
                                    </DropdownItem>
                                    <DropdownItem
                                        onClick={() => {
                                            this.props.changeLanguage("ml");
                                            config.language = "mal";
                                        }}
                                        className="text-white"
                                    >
                                        {
                                            content[this.state.lang].fixedplugin
                                                .title36
                                        }
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </li>
                        <li className="header-title">
                            {content[this.state.lang].fixedplugin.title25}
                        </li>
                        <li className="adjustments-line text-center color-change">
                            <span className="color-label">
                                {content[this.state.lang].fixedplugin.title26}
                            </span>{" "}
                            <span
                                className="badge light-badge mr-2"
                                onClick={() => this.activateMode("light")}
                            />{" "}
                            <span
                                className="badge dark-badge ml-2"
                                onClick={() => this.activateMode("dark")}
                            />{" "}
                            <span className="color-label">
                                {content[this.state.lang].fixedplugin.title27}
                            </span>{" "}
                        </li>
                        <li className="ml-5" hidden={!this.state.loggedIn}>
                            <Button
                                onClick={this.handleLogout}
                                color="danger"
                                className="ml-3"
                            >
                                {content[this.state.lang].fixedplugin.title28}
                            </Button>
                        </li>

                        <li className="button-container">
                            <Button
                                href=""
                                className="btn-round"
                                block
                                color="info"
                                style={{ maxWidth: 320 }}
                            >
                                {content[this.state.lang].fixedplugin.title29}
                            </Button>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default FixedPlugin;
