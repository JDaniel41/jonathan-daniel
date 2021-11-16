import { Stack, Image } from "react-bootstrap";
import headshot from "../assets/headshot.jpg";

export default function AboutMe() {
    return (
        <Stack className="d-flex align-items-center">
            <h1>About Me</h1>

            <Stack
                direction="horizontal"
                gap={3}
                className="d-flex justify-content-center align-items-start m-5"
            >
                <Image
                    src={headshot}
                    style={{ height: "200px", width: "200px" }}
                    roundedCircle
                />
                <p>
                    Hello! My name is <b>Jonathan</b> and I am a third-year
                    Computer Science student at Clemson University. My main
                    interests are in backend web development and data science.
                    <br /> <br />
                    Currently, I conduct ML research through the
                    Watson-In-The-Watt Creative Inquiry program. My experiences
                    with the creative inquiry program have allowed me to work
                    with a variety of ML libraries and frameworks such as
                    TensorFlow, PyTorch, and Scikit-Learn.
                    <br />
                </p>
            </Stack>
        </Stack>
    );
}
