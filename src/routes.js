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
import Home from "views/Home.jsx";
import Classify from "views/Classify.jsx";
import Map from "views/Map.jsx";
import UserProfile from "views/UserProfile.jsx";

var routes = [
	{
		path: "/home",
		name: "Home",
		icon: "tim-icons icon-chart-pie-36",
		component: Home,
		layout: "/admin"
	},
	{
		path: "/classify",
		name: "Classify",
		icon: "tim-icons icon-atom",
		component: Classify,
		layout: "/admin"
	},
	{
		path: "/map",
		name: "Map",
		icon: "tim-icons icon-pin",
		component: Map,
		layout: "/admin"
	},
	{
		path: "/about",
		name: "About Us",
		icon: "tim-icons icon-single-02",
		component: UserProfile,
		layout: "/admin"
	},
];
export default routes;
