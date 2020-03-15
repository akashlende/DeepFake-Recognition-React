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
import soundFile from "../assets/sample.mp3";

// reactstrap components
import {
	Card,
	CardHeader,
	CardBody,
	Row,
	Col,
	CardTitle,
	CardText,
	Button
} from "reactstrap";
import ReactPlayer from "react-player";
import WaveSurfer from "wavesurfer.js";

class Result extends React.Component {
	timestamps = [60, 120, 180, 240];
	constructor(props) {
		super(props);
		this.player = React.createRef();
		this.state = { seeked: false, time: 0, playing: false };
		this.wavesurfer = null;
	}

	createButton(seconds, id) {
		let minutes = Math.floor(seconds / 60) % 60;
		let hours = Math.floor(seconds / 3600);
		seconds = seconds % 60;
		let time = "";
		time += hours < 10 ? `0${hours}:` : `${hours}:`;
		time += minutes < 10 ? `0${minutes}:` : `${minutes}:`;
		time += seconds < 10 ? `0${seconds}` : `${seconds}`;
		return (
			<Button
				className='pl-2 pr-2 pt-1 pb-1'
				id={"timestamp-" + id}
				onClick={() => {
					this.setState({ time: seconds, playing: true });
					this.player.current.seekTo(this.state.time, "seconds");
				}}>
				{time}
			</Button>
		);
	}
	createButtons() {
		let buttons = [];
		for (let index = 0; index < this.timestamps.length; index++) {
			buttons.push(this.createButton(this.timestamps[index], index));
		}
		return buttons;
	}
	componentDidMount() {
		this.wavesurfer = WaveSurfer.create({
			container: "#waveform",
			waveColor: "violet",
			progressColor: "purple",
			respnsive: true,
			scrollParent: true,
			mediaControls: true,
			backend: "MediaElement",
			cursorColor: "white"
		});
		console.log(soundFile);
		this.wavesurfer.load(soundFile);
	}

	render() {
		return (
			<div className='content'>
				<Row>
					<Col md='12'>
						<Row tag='h3' className='ml-2'>
							Results
						</Row>
						<Row>
							<Col md='6'>
								<Card>
									<CardHeader>
										<CardTitle tag='h4'>Video</CardTitle>
									</CardHeader>
									<CardBody>
										<CardText tag='center'>
											<ReactPlayer
												url={this.props.url}
												width='parent'
												className='mb-3'
												controls
												ref={this.player}
												onReady={() => {
													if (!this.state.seeked) {
														this.player.current.seekTo(
															this.state.time,
															"seconds"
														);
														this.setState({ seeked: true });
													}
												}}
											/>
											<br />
											<i
												className={
													this.props.result
														? "fa fa-times fa-5x"
														: "fa fa-check fa-5x"
												}
												style={{ color: this.props.result ? "Red" : "Green" }}
												aria-hidden='true'
											/>
											<p className='mt-2 mb-4'>
												The video is {this.props.result ? "FAKE" : "REAL"}
											</p>
										</CardText>
									</CardBody>
								</Card>
							</Col>

							<Col md='6'>
								<Card>
									<CardHeader>
										<CardTitle tag='h4'>Audio</CardTitle>
									</CardHeader>
									<CardBody>
										<div id='waveform'></div>
										<CardText tag='center'>
											<i
												className='fa fa-times fa-5x'
												style={{ color: "Red" }}
											/>
											<p className='mt-2 mb-4'>The audio is fake</p>
										</CardText>
									</CardBody>
								</Card>
							</Col>
						</Row>
					</Col>
				</Row>
				<Row className='justify-content-center'>
					<Col md='6' sm='12' lg='4'>
						<Card>
							<CardBody>
								<CardTitle className='h4'>Result Satisfaction</CardTitle>
								<CardText>
									Are you satisfied with the results? This will help us improve
									our model.
								</CardText>
								<Row className='justify-content-center'>
									<Button className='btn-simple btn-success'>
										Yes <i className='fa fa-thumbs-up' aria-hidden='true'></i>
									</Button>
									<Button className='btn-simple btn-danger'>
										No <i className='fa fa-thumbs-down' aria-hidden='true'></i>
									</Button>
								</Row>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</div>
		);
	}
}

export default Result;
