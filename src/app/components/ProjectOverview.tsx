"use client";

import React, { useEffect, useState } from "react";
import { FaGithub, FaBehance } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ImageCarousel from "./ImageCarousel";
import { projectsData } from "../data/projectsData";

interface ProjectOverviewProps {
	id: string;
}

const ProjectOverview: React.FC<ProjectOverviewProps> = ({ id }) => {
	const { theme, resolvedTheme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		if (theme === "system") {
			setTheme("dark");
		}
	}, [setTheme, theme]);

	if (!mounted) return null;

	const isDark = resolvedTheme === "dark";

	const project = projectsData[id as keyof typeof projectsData];

	if (!project) {
		return <div>Project not found</div>;
	}

	const { title, description, images, githubLink, behanceLink, technologies } =
		project;

	return (
		<div
			className={`min-h-screen ${isDark ? "gradient-bg-dark" : "gradient-bg-light"} relative`}
		>
			<div
				className={`absolute inset-0 ${isDark ? "opacity-20" : "opacity-10"}`}
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1' fill='${isDark ? "%23ffffff" : "%23000000"}' opacity='0.3'/%3E%3Ccircle cx='18' cy='18' r='1' fill='${isDark ? "%23ffffff" : "%23000000"}' opacity='0.3'/%3E%3C/svg%3E")`,
					backgroundRepeat: "repeat",
				}}
			></div>
			<Navbar />
			<main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
				<section id="project-overview" className="mb-12">
					<h1
						className={`text-4xl font-bold mb-6 ${isDark ? "text-gray-100" : "text-gray-800"}`}
					>
						{title}
					</h1>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="mb-8 h-96 relative rounded-lg overflow-hidden"
					>
						<ImageCarousel images={images} />
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						className="mb-8"
					>
						<h2
							className={`text-2xl font-semibold mb-4 ${isDark ? "text-gray-100" : "text-gray-800"}`}
						>
							Project Description
						</h2>
						<p
							className={`text-lg ${isDark ? "text-gray-300" : "text-gray-700"}`}
						>
							{description}
						</p>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.6 }}
						className="mb-8"
					>
						<h2
							className={`text-2xl font-semibold mb-4 ${isDark ? "text-gray-100" : "text-gray-800"}`}
						>
							Technologies Used
						</h2>
						<div className="flex flex-wrap gap-2">
							{technologies.map((tech, index) => (
								<span
									key={index}
									className={`px-3 py-1 rounded-full text-sm ${isDark ? "bg-gray-800 text-gray-200" : "bg-gray-200 text-gray-800"}`}
								>
									{tech}
								</span>
							))}
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.8 }}
						className="flex justify-center gap-4"
					>
						<a
							href={githubLink}
							target="_blank"
							rel="noopener noreferrer"
							className={`flex items-center gap-2 px-4 py-2 rounded-full ${
								isDark
									? "bg-gray-800 hover:bg-gray-700 text-gray-200"
									: "bg-gray-200 hover:bg-gray-300 text-gray-800"
							} transition-colors duration-300`}
						>
							<FaGithub /> GitHub
						</a>
						<a
							href={behanceLink}
							target="_blank"
							rel="noopener noreferrer"
							className={`flex items-center gap-2 px-4 py-2 rounded-full ${
								isDark
									? "bg-gray-800 hover:bg-gray-700 text-gray-200"
									: "bg-gray-200 hover:bg-gray-300 text-gray-800"
							} transition-colors duration-300`}
						>
							<FaBehance /> Behance
						</a>
					</motion.div>
				</section>
			</main>
			<Footer />
		</div>
	);
};

export default ProjectOverview;
