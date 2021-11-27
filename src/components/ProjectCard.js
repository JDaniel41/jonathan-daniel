import { Row, Col, Container, Image, Button } from "react-bootstrap";

export default function ProjectCard({
    projectImg,
    projectTitle,
    projectDescription,
    projectUrl,
    reversed,
}) {
    return (
        <Container>
            <Row
                xs={1}
                sm={1}
                lg={2}
                className={
                    "d-flex m-5 justify-content-center my-3 " +
                    (reversed ? "flex-row" : "flex-row-reverse")
                }
            >
                <Col>
                    <Image
                        src={projectImg}
                        style={{
                            height: "auto",
                            width: "auto",
                            maxWidth: "100%",
                            maxHeight: "100%",
                        }}
                    />
                </Col>
                <Col className="d-flex flex-column align-items-center justify-content-center my-3">
                    <h3>{projectTitle}</h3>
                    <p className="text-center">{projectDescription}</p>
                    <Button variant="primary" href={projectUrl}>
                        Check it out!
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}
