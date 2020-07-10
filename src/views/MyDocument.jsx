import React from "react";
import { Page, Text, View, Document, Image } from "@react-pdf/renderer";
import logo from "assets/img/sih-logo.png";
import tick from "assets/img/tick.png";
import wrong from "assets/img/quit.png";
import line from "assets/img/line.png";

class MyDocument extends React.Component {
	getWeekDay(n) {
		switch (n) {
			case 0:
				return "Sunday";
			case 1:
				return "Monday";
			case 2:
				return "Tuesday";
			case 3:
				return "Wednesday";
			case 4:
				return "Thursday";
			case 5:
				return "Friday";
			case 6:
				return "Saturday";
			default:
				return "";
		}
	}
	render() {
		console.log(this.props);
		const ans = this.props.ans;
		let d = new Date();
		return (
			<Document>
				<Page>
					<View>
						<View style={{ position: "absolute", top: 30, left: 30 }}>
							{/* <Image style={{ width: "40px" }} src={logo}></Image> */}
							<Text
								style={{
									position: "relative",
									top: 13,
									fontSize: 14,
								}}>
								The Sentinels
							</Text>
						</View>

						<View style={{ position: "absolute", right: 67, top: 30 }}>
							<Image style={{ width: "40px" }} src={logo}></Image>
							<Text
								style={{
									position: "relative",
									top: "-27px",
									left: "40px",
									fontSize: 14,
								}}>
								Smart India Hackathon 2020
							</Text>
						</View>
					</View>

					<View
						style={{
							position: "absolute",
							left: "30",
							top: 90,
							width: "90%",
						}}>
						<Image
							src={line}
							styles={{ position: "absolute", top: 50 }}></Image>
					</View>

					<View style={{ position: "absolute", right: 70, top: 150 }}>
						<Text
							style={{
								position: "relative",
								top: "-27px",
								left: "40px",
								fontSize: 14,
							}}>
							{`${this.getWeekDay(d.getDay())}, ${d.getDate()}/${
								d.getMonth() + 1
							}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`}
						</Text>
					</View>
					<View style={{ position: "absolute", top: 200, left: 110 }}>
						<Text>DEEP FAKE VIDEO RECOGNITION REPORT</Text>
					</View>
					<View style={{ position: "absolute", top: 270, left: 245 }}>
						{ans === "null" ? (
							<Image
								src={tick}
								style={{ width: "100px", height: "auto" }}></Image>
						) : (
							<Image
								src={wrong}
								style={{ width: "100px", height: "auto" }}></Image>
						)}
						{ans === "null" ? (
							<Text style={{ position: "relative", top: 30, left: -25 }}>
								Video Verified Real
							</Text>
						) : (
							<Text style={{ position: "relative", top: 30, left: -25 }}>
								Video Verified Fake
							</Text>
						)}
					</View>
					<View
						style={{ fontSize: 14, position: "absolute", top: 480, left: 30 }}>
						<Text style={{ position: "absolute", textDecoration: "bold" }}>
							CHECKSUM :
						</Text>
						<Text style={{ position: "absolute", left: 96 }}>
							{this.props.hash}
						</Text>
					</View>
					<View
						style={{ fontSize: 14, position: "absolute", top: 510, left: 30 }}>
						<Text style={{ position: "absolute", textDecoration: "bold" }}>
							URL :
						</Text>
						<Text style={{ position: "absolute", left: 44 }}>
							{this.props.path}
						</Text>
					</View>
					<View
						style={{ fontSize: 14, position: "absolute", top: 540, left: 30 }}>
						<Text style={{ position: "absolute", textDecoration: "bold" }}>
							Duration :
						</Text>
						<Text style={{ position: "absolute", left: 62 }}>
							{this.props.duration}
						</Text>
					</View>
					<View
						style={{ fontSize: 14, position: "absolute", top: 570, left: 30 }}>
						<Text style={{ position: "absolute", textDecoration: "bold" }}>
							Size :
						</Text>
						<Text style={{ position: "absolute", left: 38 }}>
							{this.props.size}
						</Text>
					</View>
					<View
						style={{ fontSize: 14, position: "absolute", top: 600, left: 30 }}>
						<Text style={{ position: "absolute", textDecoration: "bold" }}>
							Bitrate :
						</Text>
						<Text style={{ position: "absolute", left: 52 }}>
							{this.props.bit} frames/second
						</Text>
					</View>
					<View
						style={{ fontSize: 14, position: "absolute", top: 630, left: 30 }}>
						<Text style={{ position: "absolute", textDecoration: "bold" }}>
							Real to Fake Frame Ratio :
						</Text>
						<Text style={{ position: "absolute", left: 164 }}>
							{this.props.ratio}
						</Text>
					</View>
					<View
						style={{
							position: "absolute",
							left: "30",
							bottom: 60,
							width: "90%",
						}}>
						<Image
							src={line}
							styles={{ position: "absolute", top: 50 }}></Image>
					</View>
					<View
						style={{
							fontSize: 10,
							position: "absolute",
							width: "100%",
							bottom: 40,
						}}>
						<View style={{ position: "absolute", left: 30 }}>
							<Text>SMART INDIA HACKATHON 2020</Text>
						</View>
						<View style={{ position: "absolute", right: 30 }}>
							<Text>THE SENTINELS | MES COLLEGE OF ENGINEERING, PUNE</Text>
						</View>
					</View>
				</Page>
			</Document>
		);
	}
}

export default MyDocument;

// Checksum
// Fake/Real Ratio
// Url
// Timestamp
// Duration
// Size
// Bitrate
