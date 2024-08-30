import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
	return (
		<footer className="bg-background text-foreground py-8">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="mb-4 md:mb-0">
						<p>
							&copy; {new Date().getFullYear()} Hamza Islam. All rights
							reserved.
						</p>
					</div>
					<div className="flex space-x-4">
						<a
							href="https://github.com/starhax4"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-primary transition-colors duration-300"
						>
							<FaGithub size={24} />
						</a>
						<a
							href="https://linkedin.com/in/hamzaislam01"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-primary transition-colors duration-300"
						>
							<FaLinkedin size={24} />
						</a>
						<a
							href="https://twitter.com/yourusername"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-primary transition-colors duration-300"
						>
							<FaTwitter size={24} />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
