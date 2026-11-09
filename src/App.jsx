import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Sidebar from "./components/Sidebar";
import ReplayViewerPage from "./components/ReplayViewerPage";
import WeatherAppPage from "./components/WeatherAppPage";
import SensorsProjectPage from "./components/SensorsProjectPage";
import "./App.css";

function App() {
	return (
		<Router>
			<div className="app-container">
				<Sidebar />
				<main className="main-content">
					<Routes>
						<Route path="/project1" element={<ReplayViewerPage />} />
						<Route path="/project2" element={<WeatherAppPage />} />
						<Route path="/project3" element={<SensorsProjectPage />} />
						<Route path="/" element={<HomePage />} />
					</Routes>
				</main>
			</div>
		</Router>
	);
}

export default App;
