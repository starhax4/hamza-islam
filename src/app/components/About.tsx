"use client";

import React from "react";
import { motion } from "framer-motion";
import PhotoSlider from "./PhotoSlider";

const About = () => {
	const photos = [
		"/images/photo.jpg",
		"/images/photo2.jpg",
		"/images/photo3.jpg",
		"/images/photo4.jpg",
	];

	return (
		<section id="about" className="section-padding bg-background">
			<div className="container mx-auto px-4">
				<h2 className="text-4xl font-bold text-center mb-12 text-foreground">
					About Me
				</h2>
				<div className="flex flex-col md:flex-row items-center justify-between">
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						className="md:w-1/2 mb-8 md:mb-0"
					>
						<div className="w-full h-[400px] md:h-[500px] relative mx-auto">
							{" "}
							{/* Increased size */}
							<PhotoSlider photos={photos} />
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="md:w-1/2 md:pl-8"
					>
						<p className="text-lg mb-6 text-muted-foreground">
							Hello! I&apos;m Hamza Islam, a passionate AI and Full Stack
							Developer. I&apos;m currently a CS student, eager to learn and
							apply my skills and knowledge in real-world projects through
							internships and collaborations.
						</p>
						<p className="text-lg mb-6 text-muted-foreground">
							My journey in tech has been driven by a fascination with
							artificial intelligence and its potential to solve complex
							problems. I&apos;m constantly learning and improving my skills in
							various programming languages and frameworks.
						</p>
						<p className="text-lg text-muted-foreground">
							When I&apos;m not coding, you can find me exploring new
							technologies, learning Soft skills, or engaging in tech
							communities to stay up-to-date with the latest industry trends.
						</p>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default About;
