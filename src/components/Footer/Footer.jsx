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
/*eslint-disable*/
import React from "react";
// used for making the prop types of this component
import PropTypes from "prop-types";

// reactstrap components
import { Container, Row, Nav, NavItem, NavLink } from "reactstrap";
import config from "../../config"; //1
import content from "../../content.json"; //2

class Footer extends React.Component {
    lang;
    constructor(props) {
        super(props);
        this.state = {
            lang: config.language,
        };
    }

    componentDidUpdate() {
        if (this.state.lang != config.language) {
            this.setState({
                lang: config.language,
            });
        }
    }
    render() {
        return (
            <footer className="footer">
                <Container fluid>
                    <Nav>
                        <h5>{content[this.state.lang].footer.title31}</h5>
                    </Nav>
                    <div className="copyright">
                        <h5>{content[this.state.lang].footer.title32}</h5>
                    </div>
                </Container>
            </footer>
        );
    }
}

export default Footer;
