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
import History from "views/History.jsx";
import About from "views/About.jsx";
import Archive from "./views/Archive.jsx";
// import config from "./config";//1
// import content from "./content.json";//2

var routes = [
	{
		path: "/home",
		name: "Home",
		icon: "fa fa-home",
		component: Home,
		layout: "/admin",
	},
	{
		path: "/classify",
		name: "Classify",
		icon: "tim-icons icon-atom",
		component: Classify,
		layout: "/admin",
	},
	{
		path: "/history",
		name: "History",
		icon: "fa fa-history",
		component: History,
		layout: "/admin",
	},
	{
		path: "/archive",
		name: "Archive",
		icon: "fas fa-archive",
		component: Archive,
		layout: "/admin",
	},
	{
		path: "/about",
		name: "About",
		icon: "fas fa-users",
		component: About,
		layout: "/admin",
	},
];
export default routes;
