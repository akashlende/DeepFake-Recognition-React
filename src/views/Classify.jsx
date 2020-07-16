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
import { Card, CardBody, Row, Col, Progress } from "reactstrap";
import Dropzone from "react-dropzone";
import ReactPlayer from "react-player";
import Result from "./Result";
import Axios from "axios";
import LoginModal from "../components/Modals/LoginModal";
import config from "../config";
import path from "path";

class ProgressBar extends React.Component {
	render() {
		if (this.props.dropped) this.props.updateProgress();
		return (
			<>
				<Col sm='12' className='mb-3 mt-3 text-center'>
					{this.props.result == null && this.props.progress < 100 ? (
						<>
							<h4>{this.props.text}</h4>
							<Progress value={this.props.progress} />
						</>
					) : null}
				</Col>
			</>
		);
	}
}

class Classify extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			image: false,
			progress: 0,
			dropped: false,
			url: "",
			text: "Uploading File...",
			result: null,
		};
		this.player = React.createRef();
		this.changeClicked = this.changeClicked.bind(this);
		this.updateProgress = this.updateProgress.bind(this);
	}

	updateProgress() {
		if (this.state.progress < 100) {
			setTimeout(() => {
				this.setState({
					text:
						this.state.progress >= 60
							? "Classifying File..."
							: "Pre-processing File...",
					progress: this.state.progress + 1,
				});
			}, Math.random() * 1000);
		}
	}
	readFileAsync(file) {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.onerror = reject;
			reader.readAsDataURL(file);
			reader.onload = () => {
				const formData = new FormData();
				const ext = path.extname(file.path);
				if (ext === ".mp4" || ext === ".avi") {
					const video = file;
					const user = JSON.parse(localStorage.getItem("user"));
					formData.append("video", video);
					formData.append("userId", user.id);
					Axios.post(`${config.serverURL}/classify`, formData, {
						headers: {
							"Content-Type": "multipart/form-data",
							Authorization: `Bearer ${user.token}`,
						},
					})
						.then((res) => {
							this.setState({
								image: false,
								result: res.data.message,
								progress: 100,
							});
							resolve(reader.result);
						})
						.catch((err) => reject(err));
				} else if (ext === ".jpg" || ext === ".png" || ext === ".jpeg") {
					const image = file;
					const user = JSON.parse(localStorage.getItem("user"));
					formData.append("image", image);
					formData.append("userId", user.id);
					Axios.post(`${config.serverURL}/get-image`, formData, {
						headers: {
							"Content-Type": "multipart/form-data",
							Authorization: `Bearer ${user.token}`,
						},
					})
						.then((res) => {
							this.setState({
								image: true,
								result: res.data.message,
								progress: 100,
							});
							resolve(reader.result);
						})
						.catch((err) => reject(err));
				} else {
					this.setState({
						result: "Invalid File",
						progress: 100,
					});
					resolve(reader.result);
				}
			};
		});
	}
	onDrop(acceptedFiles) {
		acceptedFiles.forEach(async (file) => {
			await this.readFileAsync(file)
				.then((value) => {
					this.setState({ url: value });
				})
				.catch((err) => console.log(err));
		});
	}

	changeClicked() {
		this.setState({ clicked: true });
	}

	render() {
		return (
			<>
				<div className='content'>
					<LoginModal></LoginModal>
					<Row className='justify-content-center'>
						<Col sm='12'>
							<h2>Classify</h2>
						</Col>
						<Col sm='12' md='12' lg='6'>
							<Card>
								<CardBody>
									<Row className='justify-content-center'>
										{this.state.url && this.state.image ? (
											<img className='mr-3 ml-3' src={this.state.url} alt='' />
										) : this.state.url ? (
											<ReactPlayer
												url={this.state.url}
												controls
												className='mr-3 ml-3'
												ref={this.player}
											/>
										) : null}

										{!this.state.dropped ? (
											<Dropzone
												multiple={false}
												onDropAccepted={() => this.setState({ dropped: true })}
												onDrop={(acceptedFiles) => {
													this.onDrop(acceptedFiles);
												}}>
												{({ getRootProps, getInputProps }) => (
													<div {...getRootProps()} className='ml-5 mr-5'>
														<Col sm='12' className='mt-5 mb-5'>
															<input {...getInputProps()} />
															<h4 className='text-center'>
																DRAG 'N' DROP FILE HERE, OR CLICK TO SELECT FILE
															</h4>
														</Col>
													</div>
												)}
											</Dropzone>
										) : (
											<ProgressBar
												progress={this.state.progress}
												dropped={this.state.dropped}
												text={this.state.text}
												changeClicked={this.changeClicked}
												updateProgress={this.updateProgress}
												result={this.state.result}
											/>
										)}
									</Row>
								</CardBody>
							</Card>
						</Col>
					</Row>
					{this.state.url ? (
						<Result url={this.state.url} result={this.state.result} />
					) : null}
				</div>
			</>
		);
	}
}

export default Classify;
