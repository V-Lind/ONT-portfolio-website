import React, { useState } from "react";
import "../App.css";
import img0 from "../images/WeatherApp/img0.png";
import img1 from "../images/WeatherApp/img1.png";
import img2 from "../images/WeatherApp/img2.png";
import img3 from "../images/WeatherApp/img3.png";

const images = [
	// First img = main showcase on right
	{ src: img0, alt: "Current weather screen", title: "Current weather screen" },
	{ src: img1, alt: "Seven day forecast", title: "Seven day forecast" },
	{ src: img2, alt: "Hourly data", title: "Hourly data" },
	{ src: img3, alt: "Map and geocoding", title: "Map and geocoding" },
];

function WeatherAppPage() {
	const [isOpen, setIsOpen] = useState(false);
	const [currentImage, setCurrentImage] = useState("");

	const openModal = (image) => {
		setCurrentImage(image);
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
		setCurrentImage("");
	};

	return (
		<>
			<div className="project-header">
				<h1>Android Weather App</h1>
			</div>
			<div className="project-container">
				<div className="project-description">
					<div className="tech-columns-container">
						<div className="tech-column">
							<ul>
								<h4>Themes</h4>
								<li>API integration</li>
								<li>Mobile Development</li>
								<li>MVVM Architecture</li>
								<li>Jetpack Compose</li>
								<li>UI/UX Design</li>
								<li>Databases</li>
							</ul>
						</div>
						<div className="tech-column">
							<ul>
								<h4>Technologies</h4>
								<li>
									<a href="https://kotlinlang.org/">Kotlin</a>
								</li>
								<li>
									<a href="https://developer.android.com/develop/ui/compose">
										Jetpack Compose
									</a>
								</li>
								<li>
									<a href="https://developer.android.com/training/data-storage/room">
										Android Room Database (SQL)
									</a>
								</li>
								<li>
									<a href="https://www.openstreetmap.org/">OpenStreetMap</a>
								</li>
								<li>
									<a href="https://open-meteo.com/">OpenMeteo weather API</a>
								</li>
								<li>
									<a href="https://open-meteo.com/en/docs/geocoding-api">
										OpenMeteo Geocoding API
									</a>
								</li>
								<li>
									<a href="https://basmilius.github.io/weather-icons/">
										Basmilius weather icons
									</a>
								</li>
							</ul>
						</div>
					</div>
					<h3>
						<a href="https://github.com/V-Lind/ONT-Android-Weather-App">
							Project on GitHub
						</a>
					</h3>
					<h4>What is it?</h4>
					<p>
						This is a typical Android weather app project done in Kotlin/Jetpack
						Compose. This was the course-end project for the Mobile Development
						course. I felt that the project requirements were too simple, so I
						purposefully over-engineered it by creating a proper normalized Room
						database (SQL) for the weather data, and implementing a map with
						geolocation functionality.
						<br />I ended up running out of time due to some unfortunate events
						and had to rush/cut some features such as the favourites page.
					</p>
					<h4>Key Features</h4>
					<ul>
						<li>Current and forecasted weather data</li>
						<li>Location search and geolocation using a map</li>
						<li>Persistent storage using Room Database</li>
						<li>Modern UI built with Jetpack Compose</li>
					</ul>
					<h4>What did I learn from it?</h4>
					<ul>
						<li>
							How to use the Android Room Database, and improved in general SQL
							design and implementation.
						</li>
						<li>
							Learned multiple new APIs: OpenStreetMap, OpenMeteo weather &
							geocoding APIs, and integrating them into an Android app.
						</li>
						<li>
							Improved at applying the MVVM architecture in a real-world
							project.
						</li>
						<li>
							Improved at designing mobile user interfaces and using Jetpack
							Compose.
						</li>
					</ul>
				</div>
				<div className="project-main-image">
					<img
						src={images[0].src}
						alt={images[0].alt}
						title={images[0].title}
						onClick={() => openModal(images[0])}
					/>
				</div>
			</div>
			<div className="project-thumbnails">
				{images.slice(1).map((image, index) => (
					<img
						key={index}
						src={image.src}
						alt={image.alt}
						className="thumbnail"
						title={image.title}
						onClick={() => openModal(image)}
					/>
				))}
			</div>
			{isOpen && (
				<div className="modal" onClick={closeModal}>
					<div className="modal-content">
						<h2>{currentImage.title}</h2>
						<img src={currentImage.src} alt={currentImage.alt} />
					</div>
				</div>
			)}
		</>
	);
}

export default WeatherAppPage;
