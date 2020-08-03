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
import {
	Card,
	CardBody,
	Row,
	Col,
	Progress,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	FormGroup,
	Button,
	Label,
	Input,
	CardHeader,
} from "reactstrap";
import Dropzone from "react-dropzone";
import ReactPlayer from "react-player";
import Result from "./Result";
import Axios from "axios";
import LoginModal from "../components/Modals/LoginModal";

import path from "path";
import config from "../config";
import content from "../content.json";

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
	lang;
	classifyTitle;
	constructor(props) {
		super(props);
		this.classifyTitle = React.createRef();
		this.state = {
			step: 0,
			image: false,
			progress: 0,
			dropped: false,
			url: "",
			text: "Uploading File...",
			result: null,
			lang: config.language,
			officerName: "",
			officerId: "",
			station: "",
			district: "",
			city: "",
			state: "",
			firId: "",
			firDate: "",
			firDesc: "",
			personMentioned: "",
			cmpltName: "",
			cmpltNumber: "",
			aadhar: "",
			cmpltEmail: "",
			cmpltAddr: "",
			cmpltGender: "Gender",
		};
		this.player = React.createRef();
		this.changeClicked = this.changeClicked.bind(this);
		this.updateProgress = this.updateProgress.bind(this);
	}

	componentDidUpdate() {
		if (this.state.lang !== config.language)
			this.setState({
				lang: config.language,
			});
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
					formData.append("officerName", this.state.officerName);
					formData.append("officerName", this.state.officerId);
					formData.append("officerName", this.state.station);
					formData.append("officerName", this.state.district);
					formData.append("officerName", this.state.city);
					formData.append("officerName", this.state.state);
					formData.append("officerName", this.state.firId);
					formData.append("officerName", this.state.firDate);
					formData.append("officerName", this.state.firDesc);
					formData.append("officerName", this.state.personMentioned);
					formData.append("officerName", this.state.cmpltName);
					formData.append("officerName", this.state.cmpltEmail);
					formData.append("officerName", this.state.cmpltNumber);
					formData.append("officerName", this.state.aadhar);
					formData.append("officerName", this.state.cmpltAddr);
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

	handleChange(event) {
		if (
			event.target.type === "text" ||
			event.target.type === "textarea" ||
			event.target.type === "date"
		)
			this.setState({
				[event.target.name]: event.target.value,
			});
	}

	handleDropdown(field, event) {
		console.log(field);

		this.setState({
			[field]: event.target.innerText,
		});
	}

	render() {
		return (
			<>
				<div className='content'>
					<LoginModal></LoginModal>
					<Row className='justify-content-center' ref={this.classifyTitle}>
						<Col sm='12'>
							<h2>{content[this.state.lang].routes.title42}</h2>
						</Col>
						<Col sm='12' md='12' lg='12'>
							<div className={this.state.step === 0 ? "d-block" : "d-none"}>
								<Card>
									<CardHeader>Officer Incharge Details</CardHeader>
									<CardBody>
										<form>
											<Row>
												<Col lg='6'>
													<FormGroup>
														<Label for='exampleEmail'>Officer Name</Label>
														<Input
															type='text'
															value={this.state.officerName}
															onChange={(e) => this.handleChange(e)}
															name='officerName'
															id='officerName'
															placeholder="Enter Officer's Name"
														/>
													</FormGroup>
												</Col>
												<Col lg='3'>
													<FormGroup>
														<Label for='exampleEmail'>Officer ID</Label>
														<Input
															type='text'
															value={this.state.officerId}
															onChange={(e) => this.handleChange(e)}
															name='officerId'
															id='officerId'
															placeholder='Enter Officer Id'
														/>
													</FormGroup>
												</Col>
												<Col lg='3'>
													<FormGroup>
														<Label for='exampleEmail'>Police Station</Label>
														<Input
															type='text'
															value={this.state.station}
															onChange={(e) => this.handleChange(e)}
															name='station'
															id='station'
															placeholder="Enter Police Station's Name"
														/>
													</FormGroup>
												</Col>
											</Row>

											<Row>
												<Col lg='4'>
													<FormGroup>
														<Label for='exampleEmail'>District Name</Label>
														<Input
															type='text'
															value={this.state.district}
															onChange={(e) => this.handleChange(e)}
															name='district'
															id='district'
															placeholder="Enter the Disctict's Name"
														/>
													</FormGroup>
												</Col>
												<Col lg='4'>
													<FormGroup>
														<Label for='exampleEmail'>City Name</Label>
														<Input
															type='text'
															value={this.state.city}
															onChange={(e) => this.handleChange(e)}
															name='city'
															id='city'
															placeholder="Enter the City's Name"
														/>
													</FormGroup>
												</Col>
												<Col lg='4'>
													<FormGroup>
														<Label for='exampleEmail'>State Name</Label>
														<Input
															type='text'
															value={this.state.state}
															onChange={(e) => this.handleChange(e)}
															name='state'
															id='state'
															placeholder='Enter the State Name'
														/>
													</FormGroup>
												</Col>
											</Row>
										</form>
									</CardBody>
								</Card>
								<Card>
									<CardHeader>Complaint Details</CardHeader>
									<CardBody>
										<Row>
											<Col lg='4'>
												<FormGroup>
													<Label for='exampleEmail'>FIR ID</Label>
													<Input
														type='text'
														value={this.state.firId}
														onChange={(e) => this.handleChange(e)}
														name='firId'
														id='firId'
														placeholder='Enter FIR ID'
													/>
												</FormGroup>
											</Col>
											<Col lg='2'>
												<FormGroup>
													<Label for='exampleEmail'>FIR Date</Label>
													<Input
														type='date'
														value={this.state.firDate}
														onChange={(e) => this.handleChange(e)}
														name='firDate'
														id='firDate'
														placeholder='Enter date'
													/>
												</FormGroup>
											</Col>
										</Row>

										<FormGroup>
											<Label for='exampleEmail'>FIR Description</Label>
											<Input
												type='textarea'
												value={this.state.firDesc}
												onChange={(e) => this.handleChange(e)}
												name='firDesc'
												id='firDesc'
											/>
										</FormGroup>
										<Row>
											<Col lg='4'>
												<FormGroup>
													<Label for='exampleEmail'>
														Person Mentioned In The Video
													</Label>
													<Input
														type='text'
														value={this.state.personMentioned}
														onChange={(e) => this.handleChange(e)}
														name='personMentioned'
														id='personMentioned'
														placeholder='Enter Name Of The Person In The Video'
													/>
												</FormGroup>
											</Col>
										</Row>
									</CardBody>
								</Card>
								<Card>
									<CardHeader>Complainant Details</CardHeader>
									<CardBody>
										<Row>
											<Col lg='4'>
												<FormGroup>
													<Label for='exampleEmail'>Complainant Name</Label>
													<Input
														type='text'
														name='cmpltName'
														value={this.state.cmpltName}
														onChange={(e) => this.handleChange(e)}
														id='cmpltName'
														placeholder="Enter the Complainant's Name"
													/>
												</FormGroup>
											</Col>
											<Col lg='4'>
												<FormGroup>
													<Label for='exampleEmail'>
														Contact Number Of The Complainant
													</Label>
													<Input
														className='col-lg-6'
														value={this.state.cmpltNumber}
														onChange={(e) => this.handleChange(e)}
														type='Number'
														name='cmpltNumber'
														id='cmpltNumber'
														placeholder='Enter Contact Number Of The Complainant'
													/>
												</FormGroup>
											</Col>
										</Row>
										<Row>
											<Col lg='4'>
												<FormGroup>
													<Label for='aadhar'>Aadhar Card Number</Label>
													<Input
														type='number'
														value={this.state.aadhar}
														onChange={(e) => this.handleChange(e)}
														name='aadhar'
														id='aadhar'
														placeholder='Enter The Aadhar Number'
													/>
												</FormGroup>
											</Col>
											<Col lg='4'>
												<FormGroup>
													<Label for='cmpltEmail'>Email Address</Label>
													<Input
														type='email'
														value={this.state.cmpltEmail}
														onChange={(e) => this.handleChange(e)}
														name='cmpltEmail'
														id='cmpltEmail'
														placeholder='Email Address'
													/>
												</FormGroup>
											</Col>
										</Row>
										<Row>
											<Col lg='8'>
												<FormGroup>
													<Label for='exampleEmail'>
														Complainant's Address
													</Label>
													<Input
														type='text'
														value={this.state.cmpltAddr}
														onChange={(e) => this.handleChange(e)}
														name='cmpltAddr'
														id='cmpltAddr'
														placeholder="Enter Complainant's Address"
													/>
												</FormGroup>
											</Col>
										</Row>

										<FormGroup>
											<UncontrolledDropdown>
												<DropdownToggle caret data-toggle='dropdown'>
													{this.state.cmpltGender}
												</DropdownToggle>
												<DropdownMenu>
													<DropdownItem
														value='male'
														onClick={(event) =>
															this.handleDropdown("cmpltGender", event)
														}>
														Male
													</DropdownItem>
													<DropdownItem
														value='female'
														onClick={(event) =>
															this.handleDropdown("cmpltGender", event)
														}>
														Female
													</DropdownItem>
													<DropdownItem
														value='others'
														onClick={(event) =>
															this.handleDropdown("cmpltGender", event)
														}>
														Others
													</DropdownItem>
												</DropdownMenu>
											</UncontrolledDropdown>
										</FormGroup>
									</CardBody>
								</Card>
							</div>
							<div className={this.state.step === 1 ? "d-block" : "d-none"}>
								<Card>
									<CardBody>
										<Row className='justify-content-center'>
											{this.state.url && this.state.image ? (
												<img
													className='mr-3 ml-3'
													src={this.state.url}
													alt=''
												/>
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
													onDropAccepted={() =>
														this.setState({
															dropped: true,
														})
													}
													onDrop={(acceptedFiles) => {
														this.onDrop(acceptedFiles);
													}}>
													{({ getRootProps, getInputProps }) => (
														<div {...getRootProps()} className='ml-5 mr-5'>
															<Col sm='12' className='mt-5 mb-5'>
																<input {...getInputProps()} />
																<h4 className='text-center'>
																	{content[this.state.lang].classify.title6}
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
							</div>
							<Row className={this.state.step === 1 ? "d-none" : "d-block"}>
								<Col className='mr-auto ml-auto' lg='2'>
									<Button
										color='primary'
										type='submit'
										onClick={(e) => {
											if (this.state.step !== 1) {
												this.setState((prevState) => {
													return { step: prevState.step + 1 };
												});
												console.log("clicked");
											} else {
											}
										}}>
										{this.state.step !== 1 ? "Next" : "Review"}
									</Button>
								</Col>
							</Row>
						</Col>
					</Row>
					{this.state.url ? (
						<Result
							url={this.state.url}
							result={this.state.result}
							image={this.state.image}
						/>
					) : null}
				</div>
			</>
		);
	}
}

export default Classify;
