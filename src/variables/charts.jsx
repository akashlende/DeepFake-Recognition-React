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

let chart1_2_options = {
	maintainAspectRatio: false,
	legend: {
		display: false
	},
	tooltips: {
		backgroundColor: "#f5f5f5",
		titleFontColor: "#333",
		bodyFontColor: "#666",
		bodySpacing: 4,
		xPadding: 12,
		mode: "nearest",
		intersect: 0,
		position: "nearest"
	},
	responsive: true,
	scales: {
		yAxes: [
			{
				gridLines: {
					drawBorder: true,
					color: "#1F8EF111",
					zeroLineColor: "#1F8EF111"
				},
				ticks: {
					suggestedMin: 0,
					suggestedMax: 100,
					padding: 20,
					fontColor: "#9a9a9a"
				}
			}
		],
		xAxes: [
			{
				barPercentage: 1.6,
				gridLines: {
					drawBorder: false,
					color: "rgba(29,140,248,0.1)",
					zeroLineColor: "transparent"
				},
				ticks: {
					padding: 20,
					fontColor: "#9a9a9a"
				}
			}
		]
	}
};

let labels = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
let data = [800, 1000, 700, 800, 1200, 800, 3000];

const chartExample2 = {
	data: canvas => {
		let ctx = canvas.getContext("2d");

		let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

		gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
		gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
		gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

		return {
			labels: labels,
			datasets: [
				{
					label: "Data",
					fill: true,
					backgroundColor: gradientStroke,
					borderColor: "#1f8ef1",
					borderWidth: 2,
					borderDash: [],
					borderDashOffset: 0.0,
					pointBackgroundColor: "#1f8ef1",
					pointBorderColor: "rgba(255,255,255,0)",
					pointHoverBackgroundColor: "#1f8ef1",
					data: data
				}
			]
		};
	},
	options: chart1_2_options
};

export default chartExample2;
