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
import { Link } from "react-router-dom";

// reactstrap components
import { Card, CardBody, Row, Col } from "reactstrap";

// core components
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
		//4
		if (this.state.lang !== config.language)
			this.setState({
				lang: config.language,
			});
	}

	render() {
		return (
			<>
				<div className='content'>
					<Row>
						<Col sm='12'>
							<Card>
								<CardBody>
									<Row className='justify-content-center'>
										<Col lg='6' sm='12'>
											<ReactPlayer
												url='https://www.youtube.com/watch?v=C8FO0P2a3dA'
												controls
												className='mt-4'
												width='parent'
												style={{
													border: "0.3em solid #e14eca",
													borderRadius: "1em",
													padding: "0.5em",
												}}
											/>
										</Col>
									</Row>
									<Row>
										<Col sm='12' className='mt-3'>
											<h3 className='text-justify ml-4 mr-4'>
												{content[this.state.lang].home.title1}
											</h3>
											<h4 className='text-justify ml-4 mr-4'>
												{content[this.state.lang].home.para1}
											</h4>
										</Col>
									</Row>
								</CardBody>
							</Card>
						</Col>
						<Col sm='12'>
							<Card>
								<CardBody>
									<Row>
										<Col sm='12' className='mt-1'>
											<h3 className='text-justify ml-4 mr-4'>
												{content[this.state.lang].home.title2}
											</h3>
											<h4 className='text-justify ml-4 mr-4'>
												{content[this.state.lang].home.para2}
											</h4>
											<h4 className='text-justify ml-4 mr-4'>
												{content[this.state.lang].home.title3}
												<ol>
													<li>{content[this.state.lang].home.para4}</li>
													<li> {content[this.state.lang].home.para5}</li>
													<li> {content[this.state.lang].home.para6}</li>
													<li>{content[this.state.lang].home.para7}</li>
													<li>{content[this.state.lang].home.para8}</li>
												</ol>
											</h4>
										</Col>
									</Row>
								</CardBody>
							</Card>
						</Col>

						<Col className='mt-auto mb-auto '>
							<Row className='justify-content-center'>
								<Link className='btn-simple btn-primary btn' to='classify'>
									{content[this.state.lang].home.title5}
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
