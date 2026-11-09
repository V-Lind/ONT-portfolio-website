import React, { useState } from "react";
import "../App.css";
import img0 from "../images/WeatherApp/img0.png";

const images = [
	// First img = main showcase on right
	{ src: img0, alt: "Current weather screen", title: "Current weather screen" },
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
				<h1>TITLE</h1>
			</div>
			<div className="project-container">
				<div className="project-description">
					<div className="tech-columns-container">
						<div className="tech-column">
							<ul>
								<li>GENERIC</li>
							</ul>
						</div>
						<div className="tech-column">
							<ul>
								<li>TECHS</li>
							</ul>
						</div>
					</div>
					<h3>
						<a href="https://github.com/V-Lind/Android-Weather-App">
							https://github.com/V-Lind/Android-Weather-App
						</a>
					</h3>
					<h4>What is it?</h4>
					<p>This is a</p>
					<h4>What did I learn from it?</h4>
					<p>
						INTRO
						<br />
						In this project, I Learnt:
					</p>
					<p>- SOMETHING GOOD</p>
					<p>- SOMETHING ELSE.</p>
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
