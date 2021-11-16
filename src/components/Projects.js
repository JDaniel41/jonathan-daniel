import { Stack } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

import projectData from "../data/projectsData.json";

export default function Projects() {
    return (
        <div>
            <h1 className="text-center">Projects</h1>
            {projectData.map((project, idx) => {
                return (
                    <ProjectCard
                        projectImg={
                            require("../assets/" + project.image).default
                        }
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
