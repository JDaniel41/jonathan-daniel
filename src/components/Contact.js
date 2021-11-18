import { Stack, Image } from "react-bootstrap";
import envelope from "../img/envelope.svg";

export default function Contact() {
    return (
        <Stack className="bg-dark">
            <h1 className="text-white text-center">Contact Me</h1>
            <h6 className="text-white text-center">I would love to connect!</h6>

            <Stack direction="horizontal">
                <Stack
                    direction="vertical"
                    className=" d-flex align-items-center"
                >
                    <h1 className="text-white text-center">Email</h1>
                    <Image
                        src={envelope}
                        style={{ height: "100px", width: "100px" }}
                    ></Image>
                    <p className="text-white">jmdanie@clemson.edu</p>
                </Stack>
            </Stack>
        </Stack>
    );
}
