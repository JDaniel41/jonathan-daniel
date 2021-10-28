import "holderjs";
import { Row, Container, Image, Col } from "react-bootstrap";

export default function Hero() {
    return (
        <Container fluid>
            <Row>
                <Col xs={"9px"}>
                    <Image src="holder.js/100px250" />
                </Col>
                <Col xs={"9px"}>Test</Col>
            </Row>
        </Container>
    );
}
