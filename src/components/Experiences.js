import { Stack } from "react-bootstrap";
import ExperienceCard from "./ExperienceCard";
import Row from "react-bootstrap/Row";

import experienceData from "../data/experiencesData.json";

export default function Experiences() {
    return (
        <Stack className="d-flex align-items-center" id="experience">
            <h1>Internship Experiences</h1>

            <Row xs={1} lg={3} className="m-3 ">
                {experienceData.map((experience) => {
                    return (
                        <ExperienceCard
                            cardLogo={
                                require("../img/" + experience.logo).default
                            }
                            cardTitle={experience.company}
                            cardSubtitle={experience.position}
                            cardText={experience.description}
                        />
                    );
                })}
            </Row>
        </Stack>
    );
}
