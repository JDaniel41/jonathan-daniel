import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Ratio from "react-bootstrap/Ratio";
import holderjs from "holderjs";
import { Stack, Image } from "react-bootstrap";

export default function ProjectCard({
    projectImg,
    projectName,
    projectDescription,
    projectUrl,
}) {
    return (
        <Stack direction="horizontal" gap={3} className=" m-5">
            <div style={{ width: "60%" }}>
                <Image
                    src={projectImg}
                    style={{
                        height: "auto",
                        width: "auto",
                        maxWidth: "100%",
                        maxHeight: "100%",
                    }}
                />
            </div>
            <p style={{ width: "40%" }}>{projectDescription}</p>
        </Stack>
    );
}
