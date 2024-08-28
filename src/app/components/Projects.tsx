import Image from 'next/image';

const Projects = () => {
  return (
    <section id="projects">
      {/* Project items */}
      <div className="project-item">
        <Image
          src="/path-to-project-image.jpg"
          alt="Project Name"
          width={500}
          height={300}
          layout="responsive"
        />
        {/* Project details */}
      </div>
    </section>
  );
};

export default Projects;