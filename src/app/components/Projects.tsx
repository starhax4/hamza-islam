import React from "react";
import Image from "next/image";
import Link from "next/link";
import ImageCarousel from "./ImageCarousel";
import { projectsData } from "../data/projectsData";

interface ProjectCardProps {
	id: string;
	title: string;
	description: string;
	images: string[];
}

const ProjectCard = ({ id, title, description, images }: ProjectCardProps) => (
	<Link href={`/projects/${id}`}>
		<div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
			<div className="mb-4 h-48 relative overflow-hidden rounded-lg">
				<ImageCarousel images={images} />
			</div>
			<h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
				{title}
			</h3>
			<p className="text-gray-600 dark:text-gray-300">{description}</p>
		</div>
	</Link>
);

const Projects = () => {
	return (
		<section id="projects" className="pt-4 pb-16 md:py-16">
			{" "}
			{/* Further reduced top padding */}
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold mb-8">My Projects</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-0">
					{Object.entries(projectsData).map(([id, project]) => (
						<ProjectCard
							key={id}
							id={id}
							title={project.title}
							description={project.description}
							images={project.images}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
