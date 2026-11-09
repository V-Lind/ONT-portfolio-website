import React, { useState } from "react";
import "../App.css";
import img0 from "../images/ReplayViewer/img0.png";
import img1 from "../images/ReplayViewer/img1.png";
import img2 from "../images/ReplayViewer/img2.png";
import img3 from "../images/ReplayViewer/img3.png";
import img4 from "../images/ReplayViewer/img4.png";

const images = [
	// First img = main showcase on right
	{ src: img0, alt: "Media player image", title: "Media player image" },
	{ src: img4, alt: "Main menu", title: "Main menu" },
	{ src: img1, alt: "Delayed stream screen", title: "Delayed stream screen" },
	{ src: img2, alt: "Setting delays", title: "Setting delays" },
	{ src: img3, alt: "Saved configs", title: "Saved configs" },
];

function ReplayViewerPage() {
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
				<h1>ReplayViewer</h1>
			</div>
			<div className="project-container">
				<div className="project-description">
					<div className="tech-columns-container">
						<div className="tech-column">
							<ul>
								<h4>Themes</h4>
								<li>Android</li>
								<li>Fullstack</li>
								<li>MVVM Architecture</li>
								<li>UI/UX Design</li>
								<li>Multithreading</li>
								<li>Performance optimization</li>
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
									Android{" "}
									<a href="https://developer.android.com/media/camera/camerax">
										CameraX
									</a>{" "}
									and{" "}
									<a href="https://developer.android.com/media/camera/camera2">
										{" "}
										Camera2
									</a>
									APIs
								</li>
								<li>
									Android{" "}
									<a href="https://developer.android.com/reference/android/media/MediaCodec">
										MediaCodec
									</a>{" "}
									and{" "}
									<a href="https://developer.android.com/reference/android/media/MediaMuxer">
										MediaMuxer
									</a>
								</li>
							</ul>
						</div>
					</div>
					<h3>
						<a href="https://github.com/V-Lind/ONT-ReplayViewer">
							Project on GitHub
						</a>
					</h3>
					<h4>What is it?</h4>
					<p>
						ReplayViewer is an Android camera application that uses a rolling
						buffer to provide a delayed live playback of the camera feed. The
						app also allows the user to easily save a clip of the past x seconds
						of the camera feed, view it in an in-app mediaplayer and save it as
						an mp4 file if they deem it interesting.
					</p>
					<h4>Key Features</h4>
					<ul>
						<li>Time-shifted playback of the camera feed.</li>
						<li>
							Ability to clip the last x seconds of the delayed playback, and
							view it in an in-app media player with fine controls.
						</li>
						<li>Option to save the clipped video as an mp4 file.</li>
						<li>
							Ability to save multiple recording configurations and quickly
							switch between them.
						</li>
					</ul>
					<h4>What did I learn from it?</h4>
					<ul>
						<li>
							Learned what kind of general settings cameras have and how they
							work.
						</li>
						<li>
							{" "}
							Learned how to use Android CameraX and the low-level Camera2
							APIs{" "}
						</li>
						<li>
							Learned about multiple media formats like mp4, YUV_420_888(Android
							camera format) etc. and algorithms for converting between them.
						</li>
						<li>
							Learned how video encoding, decoding and muxing work. In this
							project I used Android MediaCodec and MediaMuxer to encode
							individual images into a video; this included learning about
							concepts such as key and interval frames, frame display times,
							variable frame rates and more.
						</li>
						<li>
							Learned about in-depth Coroutines/multithreading. Mobile devices
							don't have a lot of processing power, and realtime video
							processing is very demanding. I had to figure out how to process
							multiple frames at the same time, and somehow keep them organized.
							In the end I wrote my own ring buffer that holds frames until the
							next one in order can be sent or too many errors occur and the
							frame is skipped.
						</li>
						<li>
							Improved my understanding of Composables and modifying their
							properties. Figuring out some of the components required in-depth
							knowledge.
						</li>
						<li>
							Improved in implementation of MVVM architecture. The project was
							complex and implementing the MVVM required a lot of thought.
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

export default ReplayViewerPage;
