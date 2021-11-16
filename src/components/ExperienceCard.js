import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Ratio from "react-bootstrap/Ratio";
import holderjs from "holderjs";

export default function ExperienceCard({
    cardLogo,
    cardTitle,
    cardSubtitle,
    cardText,
}) {
    return (
        <Col className="d-flex justify-content-center">
            <Card style={{ width: "500px", minWidth: "0px" }}>
                <div
                    style={{ height: "30%", width: "100%" }}
                    className="d-flex text-center align-items-center justify-content-center"
                >
                    <Card.Img
                        variant="top"
                        src={cardLogo}
                        style={{
                            height: "auto",
                            width: "auto",
                            maxWidth: "100%",
                            maxHeight: "100%",
                        }}
                    />
                </div>
                <Card.Body style={{ height: "70%" }}>
                    <Card.Title>{cardTitle}</Card.Title>
                    <Card.Subtitle>{cardSubtitle}</Card.Subtitle>
                    <Card.Text>{cardText}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}
