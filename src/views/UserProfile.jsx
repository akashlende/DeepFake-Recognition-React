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

// reactstrap components
import { Button, Card, CardBody, CardFooter, Row, Col } from "reactstrap";

class UserProfile extends React.Component {
	render() {
		return (
			<>
				<div className='content'>
					<Row>
						<Col md='4'>
							<Card className='card-user'>
								<CardBody>
									<div className='author'>
										<img
											alt='sakshi'
											src={require("assets/img/sakshi.jpeg")}
											className='avatar'
										/>
										<h5 className='title'>Sakshi Doshi</h5>
										<p className='description'>TEAM-LEAD</p>
									</div>
								</CardBody>
								<CardFooter>
									<div className='button-container'>
										<a
											href='https://www.linkedin.com/in/richa-maurya-566469193'
											// eslint-disable-next-line react/jsx-no-target-blank
											target='_blank'>
											<Button className='btn-icon btn-round'>
												<i className='fab fa-github' />
											</Button>
										</a>
										<a
											href='https://www.linkedin.com/in/richa-maurya-566469193'
											// eslint-disable-next-line react/jsx-no-target-blank
											target='_blank'>
											<Button className='btn-icon btn-round'>
												<i className='fab fa-linkedin' />
											</Button>
										</a>
									</div>
								</CardFooter>
							</Card>
						</Col>
						<Col md='4'>
							<Card className='card-user'>
								<CardBody>
									<div className='author'>
										<img
											alt='parag'
											src={require("assets/img/parag.jpeg")}
											className='avatar'
										/>
										<h5 className='title'>Parag Ghorpade</h5>
										<p className='description'>MACHINE-LEARNING</p>
									</div>
								</CardBody>
								<CardFooter>
									<div className='button-container'>
										<a
											href='https://www.linkedin.com/in/richa-maurya-566469193'
											target='_blank'>
											<Button className='btn-icon btn-round'>
												<i className='fab fa-github' />
											</Button>
										</a>
										<a
											href='https://www.linkedin.com/in/richa-maurya-566469193'
											target='_blank'>
											<Button className='btn-icon btn-round'>
												<i className='fab fa-linkedin' />
											</Button>
										</a>
									</div>
								</CardFooter>
							</Card>
						</Col>
						<Col md='4'>
							<Card className='card-user'>
								<CardBody>
									<div className='author'>
										<img
											alt='akash'
											src={require("assets/img/akash.jpeg")}
											className='avatar'
										/>
										<h5 className='title'>Akash Lende</h5>
										<p className='description'>FRONT-END</p>
									</div>
								</CardBody>
								<CardFooter>
									<div className='button-container'>
										<a href='https://github.com/akashlende' target='_blank'>
											<Button className='btn-icon btn-round'>
												<i className='fab fa-github' />
											</Button>
										</a>
										<a
											href='https://www.linkedin.com/in/akash-lende-b24338193'
											target='_blank'>
											<Button className='btn-icon btn-round'>
												<i className='fab fa-linkedin' />
											</Button>
										</a>
									</div>
								</CardFooter>
							</Card>
						</Col>
					</Row>
					<Row>
						<Col md='4'>
							<Card className='card-user'>
								<CardBody>
									<div className='author'>
										<img
											alt='richa'
											src={require("assets/img/richa.jpg")}
											className='avatar'
										/>
										<h5 className='title'>Richa Maurya</h5>
										<p className='description'>FRONT-END</p>
									</div>
								</CardBody>
								<CardFooter>
									<div className='button-container'>
										<a
											href='https://www.linkedin.com/in/richa-maurya-566469193'
											target='_blank'>
											<Button className='btn-icon btn-round'>
												<i className='fab fa-github' />
											</Button>
										</a>
										<a
											href='https://www.linkedin.com/in/richa-maurya-566469193'
											target='_blank'>
											<Button className='btn-icon btn-round'>
												<i className='fab fa-linkedin' />
											</Button>
										</a>
									</div>
								</CardFooter>
							</Card>
						</Col>
						<Col md='4'>
							<Card className='card-user'>
								<CardBody>
									<div className='author'>
										<img
											alt='richa'
											src={require("assets/img/richa.jpg")}
											className='avatar'
										/>
										<h5 className='title'>Varun Irani</h5>
										<p className='description'>FRONT-END</p>
									</div>
								</CardBody>
								<CardFooter>
									<div className='button-container'>
										<a
											href='https://www.linkedin.com/in/hrishikesh-mane-755bab16a'
											target='_blank'>
											<Button className='btn-icon btn-round'>
												<i className='fab fa-github' />
											</Button>
										</a>
										<a
											href='https://www.linkedin.com/in/hrishikesh-mane-755bab16a'
											target='_blank'>
											<Button className='btn-icon btn-round' color='google'>
												<i className='fab fa-linkedin' />
											</Button>
										</a>
									</div>
								</CardFooter>
							</Card>
						</Col>
						<Col md='4'>
							<Card className='card-user'>
								<CardBody>
									<div className='author'>
										<img
											alt='mane'
											src={require("assets/img/mane.jpeg")}
											className='avatar'
										/>
										<h5 className='title'>hrishikesh Mane</h5>
										<p className='description'>BACK-END</p>
									</div>
								</CardBody>
								<CardFooter>
									<div className='button-container'>
										<a href='https://github.com/hrishikeshmane' target='_blank'>
											<Button className='btn-icon btn-round'>
												<i className='fab fa-github' />
											</Button>
										</a>
										<a
											href='https://www.linkedin.com/in/hrishikesh-mane-755bab16a'
											target='_blank'>
											<Button className='btn-icon btn-round'>
												<i className='fab fa-linkedin' />
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

export default UserProfile;
