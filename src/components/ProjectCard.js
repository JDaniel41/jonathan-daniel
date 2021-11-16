import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Ratio from "react-bootstrap/Ratio";
import holderjs from "holderjs";
import { Stack, Image, Button } from "react-bootstrap";

export default function ProjectCard({
    projectImg,
    projectTitle,
    projectDescription,
    projectUrl,
    reversed,
}) {
    return (
        <Stack
            direction="horizontal"
            gap={3}
            className={
                "d-flex m-5 " + (reversed ? "flex-row" : "flex-row-reverse")
            }
        >
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
            <Stack
                style={{ width: "40%" }}
                className="d-flex align-items-center justify-content-center"
            >
                <h3>{projectTitle}</h3>
                <p className="text-center">{projectDescription}</p>
                <Button variant="primary" href={projectUrl}>
                    Primary
                </Button>
            </Stack>
        </Stack>
    );
}
