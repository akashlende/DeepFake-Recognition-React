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
import { Line } from "react-chartjs-2";
import { Link } from "react-router-dom";

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

// core components
import { chartExample2 } from "variables/charts.jsx";
import ReactPlayer from "react-player";

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			bigChartData: "data1"
		};
	}
	setBgChartData = name => {
		this.setState({
			bigChartData: name
		});
	};

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
												url='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
												controls
												className=''
												width='parent'
											/>
										</Col>
									</Row>
									<Row>
										<Col sm='12' className='mt-5'>
											<h3 className='text-justify ml-4 mr-4'>
												What are we solving?
											</h3>
											<p className='text-justify ml-4 mr-4'>
												Cyber Criminals are using Image processing tools and
												techniques for producing the variety of crimes,
												including Image Modification, Fabrication using Cheap &
												Deep Fake Videos/Image. Desired Solution: The solution
												should focus on help the Image/Video verifier/examiner
												find out and differentiate a fabricated Image/Video with
												an original one. Technology that can help address the
												issue: AI/ML techniques can be used.
											</p>
										</Col>
									</Row>
								</CardBody>
							</Card>
						</Col>
						<Col sm='12'>
							<Card>
								<CardBody>
									<Row>
										<Col sm='12' className='mt-5'>
											<h3 className='text-justify ml-4 mr-4'>Our Approach</h3>
											<p className='text-justify ml-4 mr-4'>
												Our method is based on the observations that current
												DeepFake algorithm can only generate images of limited
												resolutions, which need to be further warped to match
												the original faces in the source video. Such transforms
												leave distinctive artifacts in the resulting DeepFake
												videos. Our method detects such artifacts by comparing
												the generated face areas and their surrounding regions
												with a dedicated Convolutional Neural Network (CNN)
												model. Along with detection of DeepFake images and
												video, we also propose a solution to detect DeepFake
												audio to discern between real and fake audio, the
												detector uses visual representations of audio clips
												called spectrograms. Which is later classified by
												another CNN model as real or fake.
											</p>
											<p className='text-justify ml-4 mr-4'>
												The models are deployed on the flask-based web-app which
												consists of ReactJS (front end) interface. It is the
												most efficient and economical solution for implementing
												it. It works on the principle “Train once, use
												anywhere”. These models can also be extended in the
												future to be implemented as a API service for third
												party applications.
												<br />
												<br />
												Technology Stack:
												<ol>
													<li> Tensorflow / Keras / OpenCV</li>
													<li> Python, Flask (Open Source Web Framework)</li>
													<li> Google Cloud Platform and/or Microsoft Azure</li>
													<li> ReactJS</li>
												</ol>
											</p>
										</Col>
									</Row>
									<Row className='justify-content-center'>
										<Col lg='6' sm='12'>
											<ReactPlayer
												url='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
												controls
												className=''
												width='parent'
											/>
										</Col>
									</Row>
								</CardBody>
							</Card>
						</Col>
						<Col lg='8'>
							<Card className='card-chart'>
								<CardHeader>
									<h5 className='card-category'>Performance History</h5>
									<CardTitle tag='h3'>
										<i className='tim-icons icon-bell-55 text-info' /> 763,215
									</CardTitle>
								</CardHeader>
								<CardBody>
									<div className='chart-area'>
										<Line
											data={chartExample2.data}
											options={chartExample2.options}
										/>
									</div>
								</CardBody>
							</Card>
						</Col>
						<Col lg='4' className='mt-auto mb-auto'>
							<Row className='justify-content-center'>
								<Link className='btn-simple btn-primary btn' to='classify'>
									Start Classifying
								</Link>
								{/* <Button className=' '></Button> */}
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
