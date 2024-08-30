"use client";

import React from "react";
import { motion } from "framer-motion";

const skills = [
	"Python",
	"JavaScript",
	"React",
	"Node.js",
	"Machine Learning",
	"SQL",
	"Docker",
	"AWS",
];

const Skills = () => {
	return (
		<section id="skills" className="py-12 md:py-16">
			{" "}
			{/* Reduced padding */}
			<div className="container mx-auto px-4 relative z-10">
				<h2 className="text-4xl font-bold text-center mb-12 text-foreground">
					My Skills
				</h2>
				<p className="text-center mb-8 text-muted-foreground">
					As a student applying for internships, I&apos;m continuously learning
					and improving my skills in:
				</p>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
					{skills.map((skill, index) => (
						<motion.div
							key={skill}
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
							<h3 className="text-lg font-semibold text-foreground">{skill}</h3>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;
