import { notFound } from "next/navigation";
import ProjectOverview from "../../components/ProjectOverview";
import { projectsData } from "../../data/projectsData";

export async function generateStaticParams() {
	return Object.keys(projectsData).map((id) => ({ id }));
}

const ProjectPage = ({ params }: { params: { id: string } }) => {
	if (!projectsData[params.id as keyof typeof projectsData]) {
		notFound();
	}

	return <ProjectOverview id={params.id} />;
};

export default ProjectPage;
