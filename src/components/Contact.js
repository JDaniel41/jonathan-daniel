import { Stack, Image } from "react-bootstrap";
import envelope from "../img/envelope.svg";

export default function Projects() {
    return (
        <Stack className="bg-dark">
            <h1 className="text-white text-center">Contact Me</h1>

            <Stack direction="vertical">
                <h1 className="text-white text-center">Email</h1>
                <Image
                    src={envelope}
                    style={{ height: "100px", width: "100px" }}
                ></Image>
            </Stack>
        </Stack>
    );
}
