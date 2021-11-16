import { Stack } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

import projectData from "../data/projectsData.json";

export default function Projects() {
    return (
        <div>
            {projectData.map((project) => {
                return (
                    <ProjectCard
                        projectImg={
                            require("../assets/" + project.image).default
                        }
                        projectTitle={project.title}
                        projectDescription={project.description}
                        projectUrl={project.url}
                    />
                );
            })}
        </div>
    );
}
