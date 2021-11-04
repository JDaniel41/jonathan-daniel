import Card from "react-bootstrap/Card";
import holderjs from "holderjs";

export default function ExperienceCard({ cardLogo, cardTitle, cardText }) {
    return (
        <Card>
            <Card.Img variant="top" src={cardLogo} />
            <Card.Body>
                <Card.Title>{cardTitle}</Card.Title>
                <Card.Text>{cardText}</Card.Text>
            </Card.Body>
        </Card>
    );
}
