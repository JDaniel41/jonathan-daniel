import Card from "react-bootstrap/Card";
import holderjs from "holderjs";

export default function ExperienceCard({ cardTitle, cardText }) {
    return (
        <Card className="m-5">
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
                <Card.Title>{cardTitle}</Card.Title>
                <Card.Text>{cardText}</Card.Text>
            </Card.Body>
        </Card>
    );
}
