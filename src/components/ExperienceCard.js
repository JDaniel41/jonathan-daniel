import Card from "react-bootstrap/Card";
import holderjs from "holderjs";

export default function ExperienceCard({ cardTitle, cardText }) {
    return (
        <Card className="m-5">
            <Card.Img variant="top" src={require("../assets/metaLogo.png")} />
            <Card.Body>
                <Card.Title>{cardTitle}</Card.Title>
                <Card.Text>{cardText}</Card.Text>
            </Card.Body>
        </Card>
    );
}
