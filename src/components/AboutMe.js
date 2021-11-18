import { Stack, Image, Button } from "react-bootstrap";
import headshot from "../img/headshot.jpg";
import resume from "../assets/JonathanDanielResume.pdf";

export default function AboutMe() {
    return (
        <Stack className="d-flex align-items-center my-5git ad" id="about">
            <h1>About Me</h1>

            <Stack
                direction="horizontal"
                gap={3}
                className="d-flex justify-content-center align-items-start mx-5"
            >
                <Image
                    src={headshot}
                    style={{ height: "200px", width: "200px" }}
                    roundedCircle
                />

                <Stack
                    direction="vertical"
                    className="d-flex justify-content-center"
                >
                    <p>
                        Hello! My name is <b>Jonathan</b> and I am a third-year
                        Computer Science student at Clemson University. My main
                        interests are in backend web development and data
                        science. In the past, I have interned for State Farm and
                        Meta Platforms, Inc., and will be interning for Lyft in
                        Summer 2022.
                        <br /> <br />
                        Currently, I conduct ML research through the
                        Watson-In-The-Watt Creative Inquiry program. My
                        experiences with the creative inquiry program have
                        allowed me to work with a variety of ML libraries and
                        frameworks such as TensorFlow, PyTorch, and
                        Scikit-Learn.
                        <br /> <br />I am also a member of the Clemson
                        University National Scholars Program and am part of
                        their 10-student 2019 cohort.
                    </p>
                </Stack>
            </Stack>
            <div className="d-flex justify-content-center">
                <Button variant="primary" href={resume}>
                    Download my Resume
                </Button>
            </div>
        </Stack>
    );
}
