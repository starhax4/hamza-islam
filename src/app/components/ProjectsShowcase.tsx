"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

import { projectsData } from "../data/projectsData";

interface Project {
	id: string;
	title: string;
	description: string;
	category: "AI" | "Full Stack" | "UX/UI";
	technologies: string[];
	githubUrl: string;
	demoUrl: string;
}

const projects: Project[] = Object.entries(projectsData).map(
	([id, project]) => ({
		id,
		title: project.title,
		description: project.description,
		category: project.category as "AI" | "Full Stack" | "UX/UI",
		technologies: project.technologies,
		githubUrl: project.githubLink,
		demoUrl: project.behanceLink,
	}),
);

const categories = ["All", "AI", "Full Stack", "UX/UI"];

export default function ProjectsShowcase() {
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [filteredProjects, setFilteredProjects] = useState(projects);

	useEffect(() => {
		setFilteredProjects(
			selectedCategory === "All"
				? projects
				: projects.filter((project) => project.category === selectedCategory),
		);
	}, [selectedCategory]);

	return (
		<section id="projects" className="pt-2 pb-16 md:py-16 bg-background">
			{" "}
			{/* Adjusted padding */}
			<div className="container mx-auto px-4">
				<h2 className="text-4xl font-bold mb-8 text-center text-foreground">
					Projects
				</h2>

				{/* Category filters */}
				<div className="flex justify-center space-x-4 mb-8">
					{categories.map((category) => (
						<button
							key={category}
							type="button"
							onClick={() => setSelectedCategory(category)}
							className={`px-4 py-2 rounded-full transition-colors ${
								selectedCategory === category
									? "bg-blue-500 text-white"
									: "bg-secondary text-secondary-foreground hover:bg-secondary/80"
							}`}
						>
							{category}
						</button>
					))}
				</div>

				{/* Project grid */}
				<motion.div
					layout
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
				>
					<AnimatePresence>
						{filteredProjects.map((project) => (
							<motion.div
								key={project.id}
								layout
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.3 }}
								className="card cursor-pointer"
								whileHover={{
									scale: 1.05,
									boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
									transition: { duration: 0.2 },
								}}
								whileTap={{ scale: 0.95 }}
							>
								{/* Project card content */}
								<h3 className="text-xl font-semibold mb-2 text-foreground">
									{project.title}
								</h3>
								<p className="text-muted-foreground mb-4">
									{project.description}
								</p>
								<div className="flex flex-wrap gap-2 mb-4">
									{project.technologies.map((tech) => (
										<span
											key={tech}
											className="px-2 py-1 bg-secondary rounded-full text-sm text-secondary-foreground"
										>
											{tech}
										</span>
									))}
								</div>
								<div className="flex justify-between">
									<motion.a
										href={project.githubUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="text-blue-500 hover:underline"
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.9 }}
									>
										GitHub
									</motion.a>
									<motion.a
										href={project.demoUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="text-blue-500 hover:underline"
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.9 }}
									>
										Live Demo
									</motion.a>
								</div>
							</motion.div>
						))}
					</AnimatePresence>
				</motion.div>
			</div>
		</section>
	);
}
