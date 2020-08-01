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
// nodejs library that concatenates classes
import classNames from "classnames";

// reactstrap components
import { NavbarBrand, Navbar, Nav, Container } from "reactstrap";
import config from "../../config";
import content from "../../content.json";

class AdminNavbar extends React.Component {
    lang;
    constructor(props) {
        super(props);
        this.state = {
            collapseOpen: false,
            modalSearch: false,
            color: "navbar-transparent",
            loggedIn: localStorage.getItem("loggedIn") === "true",
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
    componentDidMount() {
        window.addEventListener("resize", this.updateColor);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateColor);
    }
    // function that adds color white/transparent to the navbar on resize (this is for the collapse)
    updateColor = () => {
        if (window.innerWidth < 993 && this.state.collapseOpen) {
            this.setState({
                color: "bg-white",
            });
        } else {
            this.setState({
                color: "navbar-transparent",
            });
        }
    };
    // this function opens and closes the collapse on small devices
    toggleCollapse = () => {
        if (this.state.collapseOpen) {
            this.setState({
                color: "navbar-transparent",
            });
        } else {
            this.setState({
                color: "bg-white",
            });
        }
        this.setState({
            collapseOpen: !this.state.collapseOpen,
        });
    };

    render() {
        let username = "";
        if (localStorage.getItem("user") !== "") {
            username = this.state.loggedIn
                ? ` - ${JSON.parse(localStorage.getItem("user")).name}`
                : "";
        }
        return (
            <>
                <Navbar
                    className={classNames("navbar-absolute", this.state.color)}
                    expand="lg"
                >
                    <Container fluid>
                        <div className="navbar-wrapper">
                            <div
                                className={classNames(
                                    "navbar-toggle d-inline",
                                    {
                                        toggled: this.props.sidebarOpened,
                                    }
                                )}
                            >
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    onClick={this.props.toggleSidebar}
                                >
                                    <span className="navbar-toggler-bar bar1" />
                                    <span className="navbar-toggler-bar bar2" />
                                    <span className="navbar-toggler-bar bar3" />
                                </button>
                            </div>
                            <NavbarBrand href="/">
                                {content[this.state.lang].adminNavbar.title39}
                                {username}
                            </NavbarBrand>
                        </div>
                        <button
                            aria-expanded={false}
                            aria-label="Toggle navigation"
                            className="navbar-toggler"
                            data-target="#navigation"
                            data-toggle="collapse"
                            id="navigation"
                            type="button"
                            onClick={this.toggleCollapse}
                        ></button>
                        <Nav className="ml-auto" navbar>
                            <a
                                className="d-none d-md-block"
                                href="https://www.sih.gov.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    className="pr-1"
                                    height="50px"
                                    alt="..."
                                    src={require("assets/img/sih-logo.png")}
                                />
                                <p
                                    className="d-none d-md-inline"
                                    style={{
                                        fontSize: "16px",
                                        position: "relative",
                                        top: "3px",
                                    }}
                                >
                                    {
                                        content[this.state.lang].adminNavbar
                                            .title40
                                    }
                                </p>
                            </a>
                        </Nav>
                    </Container>
                </Navbar>
            </>
        );
    }
}

export default AdminNavbar;
