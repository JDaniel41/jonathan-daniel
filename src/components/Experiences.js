import CardGroup from "react-bootstrap/CardGroup";
import ExperienceCard from "./ExperienceCard";
import Row from "react-bootstrap/Row";

import experienceData from "../assets/experiencesData.json";

export default function Experiences() {
    return (
        <Row className="g-2">
            {experienceData.map((experience) => {
                return (
                    <ExperienceCard
                        cardLogo={
                            require("../assets/" + experience.logo).default
                        }
                        cardTitle={experience.company}
                        cardSubtitle={experience.position}
                        cardText={experience.description}
                    />
                );
            })}
        </Row>
    );
}
