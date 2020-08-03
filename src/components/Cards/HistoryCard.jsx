import React from "react";

import { Row, Col, Card, CardBody, Button } from "reactstrap";
import PlayerModal from "../Modals/PlayerModal";
import { PulseLoader } from "react-spinners";
import Axios from "axios";
import config from "../../config";
import content from "../../content.json";

class HistoryCard extends React.Component {
	lang;
	constructor(props) {
		super(props);
		this.state = {
			generating: false,
			deleting: false,
			playerModal: false,
			currentFile: "",
			lang: config.language,
		};
		this.generateReport = this.generateReport.bind(this);
		this.deleteVideo = this.deleteVideo.bind(this);
		this.togglePlayer = this.togglePlayer.bind(this);
	}

	componentDidUpdate() {
		if (this.state.lang !== config.language) {
			this.setState({
				lang: config.language,
			});
		}
	}
	generateReport(id) {
		this.setState({ generating: true });
		const user = JSON.parse(localStorage.getItem("user"));
		let c = {
			headers: {
				Authorization: "Bearer " + user.token,
			},
		};
		Axios.get(`${config.serverURL}/pdf?userId=${user.id}&videoId=${id}`, c)
			.then((res) => {
				var link = document.createElement("a");
				link.href = `${config.serverURL}/${res.data.report}`;
				link.target = "_blank";
				link.download = "report.pdf";
				this.setState({ generating: false });

				link.click();
			})
			.catch((err) => console.log(err));
	}

	deleteVideo(id, isImage) {
		this.setState({ deleting: true });
		const user = JSON.parse(localStorage.getItem("user"));
		let c = {
			headers: {
				Authorization: "Bearer " + user.token,
			},
		};
		if (!isImage) {
			Axios.post(
				`${config.serverURL}/remove/video`,
				{ userId: user.id, videoId: id },
				c
			)
				.then((res) => {
					if (res.data.success) {
						this.setState({ deleting: false }, () => window.location.reload());
					}
				})
				.catch((err) => console.log(err));
		} else {
			Axios.post(
				`${config.serverURL}/remove/image`,
				{ userId: user.id, imageId: id },
				c
			)
				.then((res) => {
					if (res.data.success) {
						this.setState({ deleting: false }, () => window.location.reload());
					}
				})
				.catch((err) => console.log(err));
		}
	}

	togglePlayer(id, isImage) {
		this.setState(
			{
				playerModal: !this.state.playerModal,
			},
			() => {
				if (this.state.playerModal) {
					const user = JSON.parse(localStorage.getItem("user"));
					let c = {
						headers: {
							Authorization: "Bearer " + user.token,
						},
					};
					if (!isImage) {
						Axios.get(
							`${config.serverURL}/get-video?userId=${user.id}&videoId=${id}`,
							c
						)
							.then((res) => {
								this.setState({
									currentFile: res.data.videoFile,
								});
							})
							.catch((err) => console.log(err));
					} else {
						Axios.get(
							`${config.serverURL}/get-image?userId=${user.id}&imageId=${id}`,
							c
						)
							.then((res) => {
								this.setState({
									currentFile: res.data.imageFile,
								});
							})
							.catch((err) => console.log(err));
					}
				}
			}
		);
	}

	render() {
		return (
			<Card>
				<PlayerModal
					isImage={this.props.isImage}
					file={this.state.currentFile}
					fileName={this.props.fileName}
					toggle={this.togglePlayer}
					isOpen={this.state.playerModal}></PlayerModal>
				<CardBody>
					<Row>
						<Col lg='8' md='12' sm='12'>
							<h4>
								<b>{content[this.state.lang].history.vidFile}</b> –{" "}
								{this.props.fileName}
							</h4>
							<h4>
								<b>{content[this.state.lang].history.result}</b> –{" "}
								{this.props.result}
							</h4>
							<h4>
								<b>{content[this.state.lang].history.date}</b> –{" "}
								{this.props.dateTime}
							</h4>
						</Col>
						<Col lg='4' md='8' sm='12'>
							<Row>
								<Col lg='12' md='4' sm='4'>
									<PulseLoader
										color={"#1d8cf8"}
										loading={this.state.generating}></PulseLoader>
									{this.props.isImage ? null : (
										<Button
											hidden={this.state.generating}
											className='btn btn-info btn-block'
											onClick={() => this.generateReport(this.props._id)}>
											<i
												className='far fa-file-pdf mr-2'
												style={{
													fontSize: 18,
												}}></i>
											Generate Report
										</Button>
									)}
								</Col>
								<Col lg='12' md='4' sm='4'>
									<PulseLoader
										color={"#1d8cf8"}
										loading={this.state.deleting}></PulseLoader>
									<Button
										hidden={this.state.deleting}
										className='btn btn-success btn-block'
										onClick={() =>
											this.deleteVideo(this.props._id, this.props.isImage)
										}>
										<i
											className='fas fa-archive mr-2'
											style={{
												fontSize: 18,
											}}></i>
										Archive
									</Button>
								</Col>
								<Col lg='12' md='4' sm='4'>
									<Button
										className='btn btn-primary btn-block'
										onClick={() =>
											this.togglePlayer(this.props._id, this.props.isImage)
										}>
										<i
											className={`fa ${
												this.props.isImage ? "fa-image" : "fa-play"
											} mr-2`}
											style={{
												fontSize: 18,
											}}></i>
										{this.props.isImage ? "Show Image" : "Play Video"}
									</Button>
								</Col>
							</Row>
						</Col>
					</Row>
				</CardBody>
			</Card>
		);
	}
}

export default HistoryCard;
