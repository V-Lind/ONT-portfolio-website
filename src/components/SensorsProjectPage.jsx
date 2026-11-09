import React, { useState } from "react";
import "../App.css";
import img0 from "../images/SensorsProject/img0.png";
import img1 from "../images/SensorsProject/img1.png";
import img2 from "../images/SensorsProject/img2.png";
import img3 from "../images/SensorsProject/img3.png";
import imgmobile from "../images/SensorsProject/imgmobile.png";

const images = [
	// First img = main showcase on right
	{
		src: img0,
		alt: "Filterable dataset creation",
		title: "Filterable dataset creation",
	},
	{ src: img2, alt: "Home page", title: "Home page" },
	{
		src: img1,
		alt: "Sensor explorer/individual datastream view",
		title: "Sensor explorer/individual datastream view",
	},
	{ src: img3, alt: "Battery lookup page", title: "Battery lookup page" },
	{
		src: imgmobile,
		alt: "Mobile View for specific sensor",
		title: "Mobile View for specific sensor",
	},
];

function SensorsProjectPage() {
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
				<h1>HM Insighthub</h1>
			</div>
			<div className="project-container">
				<div className="project-description">
					<div className="tech-columns-container">
						<div className="tech-column">
							<ul>
								<h4>Themes</h4>
								<li>Web Development</li>
								<li>Frontend</li>
								<li>Backend</li>
								<li>AWS</li>
								<li>Databases</li>
								<li>UI/UX Design</li>
							</ul>
						</div>
						<div className="tech-column">
							<ul>
								<h4>Technologies</h4>
								<li>
									<a href="https://react.dev/">React</a>
								</li>
								<li>
									<a href="https://www.typescriptlang.org/">TypeScript</a>
								</li>
								<li>
									<a href="https://mui.com/">Material UI</a>
								</li>
								<li>
									<a href="https://aws.amazon.com/">AWS</a>
								</li>
								<li>
									<a href="https://www.docker.com/">Docker</a>
								</li>
								<li>
									<a href="https://fraunhoferiosb.github.io/FROST-Server/">
										FROST-Server
									</a>
								</li>
								<li>
									<a href="https://github.com/patrykandpatrick/vico">
										Vico graphs
									</a>
								</li>
							</ul>
						</div>
					</div>
					<h3>
						<a href="https://github.com/V-Lind/ONT-HM-Insighthub">
							Project on GitHub
						</a>
					</h3>
					<h4>
						<a href="https://hm-sensors-initial-demo.onrender.com/">
							Demo hosted on render.com
						</a>
						<br />
						Notice: The backend can be
						<strong> extremely slow</strong> so the page might simply not
						respond for extended periods of time.
					</h4>
					<h4>What is it?</h4>
					<p>
						The HM-Insighthub is a web application that was made for a client
						who needed an easier way to access various types of sensor data from
						their existing backend. <br />
						The client already had a functioning back end and used a Grafana
						based solution to visualize the data, but exporting the data
						required building very complex and time consuming queries to build
						the datasets they needed. HM-Insighthub was meant to provide the
						ability for anyone to easily access the database, visualize the
						data, filter a dataset suited for their own purposes and export it.
					</p>

					<h4>Key Features:</h4>
					<ul>
						<li>
							The app provides a "sensor explorer" for looking up sensors and
							their datastreams, with the ability to visualize the data.
						</li>
						<li>
							Option to quickly compare different selected datastream graphs
							against each other.
						</li>
						<li>
							Table with filter options to customize and export a dataset as CSV
							or JSON.
						</li>
						<li>
							Quick lookup for sensor battery levels that can be used to find
							sensors which need to be recharged.
						</li>
						<li>
							Sensor location data is hidden behind an AWS based authentication
							system.
						</li>
						<li>
							Info page designed to be opened via scanning a QR code on the
							physical sensor.
						</li>
					</ul>

					<h4>What did I learn from it?</h4>
					<ul>
						<li>
							Gained experience with multiple AWS services and designing AWS
							stacks.
						</li>
						<li>
							Improved my understanding of database design and forming complex
							nested queries.
						</li>
						<li>How to use TypeScript in a complex React environment.</li>
						<li>How to use Kubernetes for basic tasks.</li>
						<li>
							How to use the{" "}
							<a href="https://fraunhoferiosb.github.io/FROST-Server/">
								FROST-Server
							</a>{" "}
							for sensor data queries.
						</li>
					</ul>
				</div>
				<div className="project-main-image-smaller">
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

export default SensorsProjectPage;
