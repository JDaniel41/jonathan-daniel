import { Image, Button, Row, Col, Container } from "react-bootstrap";
import headshot from "../img/headshot.jpg";
import resume from "../assets/JonathanDanielResume.pdf";

export default function AboutMe() {
    return (
        <Container id="about" className="my-5">
            <Row>
                <Col>
                    <h1 className="text-center">About Me</h1>
                </Col>
            </Row>
            <Row xs={1} sm={1} lg={2} className="justify-content-center my-3">
                <Col
                    md="auto"
                    lg="auto"
                    xl="auto"
                    xxl="auto"
                    className="d-flex align-items-center justify-content-center"
                >
                    <Image
                        src={headshot}
                        style={{ height: "250px", width: "250px" }}
                        roundedCircle
                    />
                </Col>
                <Col>
                    <div>
                        <p>
                            Hello! My name is <b>Jonathan</b> and I am a
                            fourth-year Computer Science student at Clemson
                            University. My main interests are in backend web
                            development and data science. In the past, I have
                            interned for Meta, State Farm and the Clemson Energy
                            Visualization and Analytics Center (CEVAC). Most
                            recently, I completed a Softawre Engineering
                            Internship at Lyft.
                            <br /> <br />
                            Currently, I conduct ML research through the
                            Watson-In-The-Watt Creative Inquiry program. My
                            experiences with the Creative Inquiry program have
                            allowed me to work with a variety of ML libraries
                            and frameworks such as TensorFlow, PyTorch, and
                            Scikit-Learn. In addition to the CI, I also
                            conducted research on Occupancy Modeling and Power
                            Forecasting through the program's collaboration with
                            CEVAC.
                            <br /> <br />I am also a member of the Clemson
                            University National Scholars Program and am part of
                            their 10-student 2019 cohort.
                        </p>
                    </div>
                </Col>
            </Row>
            <Row className="mb-3">
                <div className="d-flex justify-content-center align-items-center">
                    <Button variant="primary" href={resume}>
                        Download my Resume
                    </Button>
                </div>
            </Row>
        </Container>
    );
}
