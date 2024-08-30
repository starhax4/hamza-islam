import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import ProjectsShowcase from "./components/ProjectsShowcase";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
	return (
		<main className="flex flex-col min-h-screen">
			<Navbar />
			<Hero />
			<div className="mb-24 mt-0">
				<hr className="w-full mx-auto border-t-4 border-primary/20" />
			</div>
			<About />
			<div className="my-24">
				<hr className="w-[95%] mx-auto border-t-4 border-primary/20" />
			</div>
			<Services />
			<div className="my-24">
				<hr className="w-[95%] mx-auto border-t-4 border-primary/20" />
			</div>
			<Skills />
			<div className="my-24">
				<hr className="w-[95%] mx-auto border-t-4 border-primary/20" />
			</div>
			<ProjectsShowcase />
			<div className="my-24">
				<hr className="w-[95%] mx-auto border-t-4 border-primary/20" />
			</div>
			<Contact />
			<Footer />
		</main>
	);
}
