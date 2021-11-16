import { Stack } from "react-bootstrap";
import ExperienceCard from "./ExperienceCard";
import Row from "react-bootstrap/Row";

import experienceData from "../assets/experiencesData.json";

export default function Experiences() {
    return (
        <Stack className="d-flex align-items-center">
            <h2>Internship Experiences</h2>

            <Row xs={1} md={2} lg={3} className="m-3 ">
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
        </Stack>
    );
}
