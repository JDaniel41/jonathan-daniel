import CardGroup from "react-bootstrap/CardGroup";
import ExperienceCard from "./ExperienceCard";

import experienceData from "../assets/experiencesData.json";

export default function Experiences() {
    return (
        <CardGroup>
            {experienceData.map((experience) => {
                return (
                    <ExperienceCard
                        cardTitle={experience.company}
                        cardText={experience.description}
                    />
                );
            })}
        </CardGroup>
    );
}
