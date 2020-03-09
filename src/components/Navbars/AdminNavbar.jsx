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
import { Collapse, NavbarBrand, Navbar, Container } from "reactstrap";

class AdminNavbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			collapseOpen: false,
			modalSearch: false,
			color: "navbar-transparent"
		};
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
				color: "bg-white"
			});
		} else {
			this.setState({
				color: "navbar-transparent"
			});
		}
	};
	// this function opens and closes the collapse on small devices
	toggleCollapse = () => {
		if (this.state.collapseOpen) {
			this.setState({
				color: "navbar-transparent"
			});
		} else {
			this.setState({
				color: "bg-white"
			});
		}
		this.setState({
			collapseOpen: !this.state.collapseOpen
		});
	};
	// this function is to open the Search modal
	toggleModalSearch = () => {
		this.setState({
			modalSearch: !this.state.modalSearch
		});
	};
	render() {
		return (
			<>
				<Navbar
					className={classNames("navbar-absolute", this.state.color)}
					expand='lg'>
					<Container fluid>
						<div className='navbar-wrapper mt-4'>
							<div
								className={classNames("navbar-toggle d-inline", {
									toggled: this.props.sidebarOpened
								})}>
								<button
									className='navbar-toggler'
									type='button'
									onClick={this.props.toggleSidebar}>
									<span className='navbar-toggler-bar bar1' />
									<span className='navbar-toggler-bar bar2' />
									<span className='navbar-toggler-bar bar3' />
								</button>
							</div>
							<NavbarBrand href='#' onClick={e => e.preventDefault()}>
								{this.props.brandText}
							</NavbarBrand>
						</div>
						<button
							aria-expanded={false}
							aria-label='Toggle navigation'
							className='navbar-toggler'
							data-target='#navigation'
							data-toggle='collapse'
							id='navigation'
							type='button'
							onClick={this.toggleCollapse}>
							<span className='navbar-toggler-bar navbar-kebab' />
							<span className='navbar-toggler-bar navbar-kebab' />
							<span className='navbar-toggler-bar navbar-kebab' />
						</button>
						<Collapse navbar isOpen={this.state.collapseOpen}></Collapse>
					</Container>
				</Navbar>
			</>
		);
	}
}

export default AdminNavbar;
