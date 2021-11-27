import ProjectCard from "./ProjectCard";

import projectData from "../data/projectsData.json";

export default function Projects() {
    return (
        <div id="projects">
            <h1 className="text-center my-3">Projects</h1>
            {projectData.map((project, idx) => {
                return (
                    <ProjectCard
                        projectImg={require("../img/" + project.image).default}
                        projectTitle={project.title}
                        projectDescription={project.description}
                        projectUrl={project.url}
                        reversed={idx % 2 === 0}
                    />
                );
            })}
        </div>
    );
}
