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
// react plugin used to create google mapsimport { Document, Page, Text, View, StyleSheet } from "react-pdf";
// reactstrap components
import { Row, Col, Card, CardBody, Button } from "reactstrap";
import Axios from "axios";
import LoginModal from "../components/LoginModal";
import config from "../config";

import { PulseLoader } from "react-spinners";

class History extends React.Component {
	constructor() {
		super();
		this.getHistory = this.getHistory.bind(this);
		this.getHistory();
		this.state = {
			videos: [],
			loadingHistory: localStorage.getItem("loggedIn") === "true",
		};
	}
	getHistory() {
		const userString = localStorage.getItem("user");
		if (userString !== "") {
			const user = JSON.parse(userString);
			let c = {
				headers: {
					Authorization: "Bearer " + user.token,
				},
			};
			Axios.post(
				`${config.serverURL}/fetch-history`,
				{
					userId: user.id,
				},
				c
			)
				.then((res) => {
					const vdata = res.data.vdata;
					let videoArray = [];
					vdata.forEach((video) => {
						let date = new Date(video.createdAt);
						let dateTime = date.toLocaleString();
						let v = {
							_id: video._id,
							fileName: video.fileName,
							result: video.status,
							dateTime: dateTime,
						};
						videoArray.push(v);
					});
					videoArray = videoArray.reverse();
					this.setState({
						loadingHistory: !this.state.loadingHistory,
						videos: videoArray,
					});
				})
				.catch((err) => console.log(err));
		}
	}

	render() {
		return (
			<>
				<div className='content'>
					<LoginModal></LoginModal>

					<Row className='justify-content-left'>
						<Col sm='12' md='12' lg='8'>
							<PulseLoader
								color={"#1d8cf8"}
								loading={this.state.loadingHistory}></PulseLoader>
							{this.state.videos.map((item, index) => (
								<HistoryCard
									key={item._id}
									_id={item._id}
									fileName={item.fileName}
									result={item.result}
									dateTime={item.dateTime}></HistoryCard>
							))}
						</Col>
					</Row>
				</div>
			</>
		);
	}
}

class HistoryCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			generating: false,
			deleting: false,
		};
		this.generateReport = this.generateReport.bind(this);
		this.deleteVideo = this.deleteVideo.bind(this);
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

	deleteVideo(id) {
		this.setState({ deleting: true });
		const user = JSON.parse(localStorage.getItem("user"));
		let c = {
			headers: {
				Authorization: "Bearer " + user.token,
			},
		};
		Axios.post(
			`${config.serverURL}/remove`,
			{ userId: user.id, videoId: id },
			c
		)
			.then((res) => {
				if (res.data.success) {
					this.setState({ deleting: false }, () => window.location.reload());
				}
			})
			.catch((err) => console.log(err));
	}

	render() {
		return (
			<Card>
				<CardBody>
					<Row>
						<Col lg='8' md='12' sm='12'>
							<h4>
								<b>Video File </b> – {this.props.fileName}
							</h4>
							<h4>
								<b>Result </b> – {this.props.result}
							</h4>
							<h4>
								<b>Date/Time </b> – {this.props.dateTime}
							</h4>
						</Col>
						<Col lg='4' md='8' sm='12'>
							<Row>
								<Col lg='12' md='6' sm='6' className='mb-lg-3'>
									<PulseLoader
										color={"#1d8cf8"}
										loading={this.state.generating}></PulseLoader>
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
								</Col>
								<Col lg='12' md='6' sm='6'>
									<PulseLoader
										color={"#1d8cf8"}
										loading={this.state.deleting}></PulseLoader>
									<Button
										hidden={this.state.deleting}
										className='btn btn-danger btn-block'
										onClick={() => this.deleteVideo(this.props._id)}>
										<i
											className='fa fa-trash mr-2'
											style={{
												fontSize: 18,
											}}></i>
										Delete
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

export default History;
