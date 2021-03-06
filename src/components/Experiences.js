import { Stack } from "react-bootstrap";
import ExperienceCard from "./ExperienceCard";
import Row from "react-bootstrap/Row";

import experienceData from "../data/experiencesData.json";

export default function Experiences() {
    return (
        <Stack className="d-flex align-items-center" id="experiences">
            <h1>Internship Experiences</h1>

            <Row sm={1} md={2} lg={2} xl={3} className="m-5">
                {experienceData.map((experience) => {
                    return (
                        <ExperienceCard
                            cardLogo={require("../img/" + experience.logo)}
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
