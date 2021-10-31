import "holderjs";
import { Row, Container, Image, Col } from "react-bootstrap";
import headshot from "../assets/headshot.jpg";

export default function Hero() {
    return (
        <Container classname="mx-2">
            <Row>
                <Col xs={6} className="my-auto">
                    <h1>Hi, I'm Jonathan</h1>
                    <p>
                        I'm a Junior National Scholar studying Computer Science
                        at Clemson University. My passion for CS comes from my
                        love of creating unique solutions. Whenever my friends
                        ask me why I like coding, I tell them that to me, coding
                        is just like creative writing. I love that I can use
                        coding to create whatever I want, and as I learn more
                        about this art form, I want to use it to create even
                        more unique solutions.
                    </p>
                </Col>
                <Col xs={4} className="mx-auto">
                    <Image fluid src={headshot} />
                </Col>
            </Row>
        </Container>
    );
}
