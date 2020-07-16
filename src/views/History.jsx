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
import { Row, Col } from "reactstrap";
import Axios from "axios";
import LoginModal from "../components/Modals/LoginModal";
import config from "../config";
import HistoryCard from "../components/Cards/HistoryCard";

import { PulseLoader } from "react-spinners";

class History extends React.Component {
	constructor() {
		super();
		this.getHistory = this.getHistory.bind(this);
		this.getHistory();
		this.state = {
			history: [],
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
					const idata = res.data.idata;
					const vdata = res.data.vdata;
					let historyArray = [];
					vdata.forEach((video) => {
						let date = new Date(video.createdAt);
						let dateTime = date.toLocaleString();
						let v = {
							isImage: false,
							createdAt: video.createdAt,
							_id: video._id,
							fileName: video.fileName,
							filePath: video.filePath,
							result: video.status,
							dateTime: dateTime,
						};
						historyArray.push(v);
					});
					idata.forEach((image) => {
						let date = new Date(image.createdAt);
						let dateTime = date.toLocaleString();
						let v = {
							isImage: true,
							createdAt: image.createdAt,
							_id: image._id,
							fileName: image.fileName,
							filePath: image.filePath,
							result: image.status,
							dateTime: dateTime,
						};
						historyArray.push(v);
					});
					historyArray.sort((a, b) => {
						let keyA = new Date(a.createdAt),
							keyB = new Date(b.createdAt);
						if (keyA < keyB) return -1;
						if (keyA > keyB) return 1;
						return 0;
					});

					historyArray = historyArray.reverse();

					this.setState({
						loadingHistory: !this.state.loadingHistory,
						history: historyArray,
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
							{this.state.history.map((item, index) => (
								<HistoryCard
									isImage={item.isImage}
									key={item._id}
									_id={item._id}
									filePath={item.filePath}
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

export default History;
