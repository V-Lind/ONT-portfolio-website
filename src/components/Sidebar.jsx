import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
	return (
		<div className="sidebar">
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<h3>Projects:</h3>
				</li>
				<li>
					<Link to="/project1">ReplayViewer</Link>
				</li>
				<li>
					<Link to="/project2">Android Weather App</Link>
				</li>
				<li>
					<Link to="/project3">HM-insighthub</Link>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
