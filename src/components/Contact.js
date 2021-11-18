import { Stack, Image, Button } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import envelope from "../img/envelope.svg";

export default function Contact() {
    return (
        <Stack className="bg-dark p-2" id="contact">
            <h1 className="text-white text-center">Contact Me</h1>
            <h6 className="text-white text-center">I would love to connect!</h6>

            <Stack direction="horizontal">
                <Stack
                    direction="vertical"
                    className=" d-flex align-items-center"
                >
                    <Image
                        src={envelope}
                        style={{ height: "100px", width: "100px" }}
                    ></Image>
                    <Button
                        className="text-white"
                        variant="link"
                        href="mailto:jmdanie@clemson.edu"
                    >
                        jmdanie@clemson.edu
                    </Button>
                </Stack>

                <Stack
                    direction="vertical"
                    className=" d-flex align-items-center"
                >
                    <SocialIcon
                        url="https://www.linkedin.com/in/jonathandaniel23/"
                        fgColor="#fff"
                        bgColor="#292b2c"
                        style={{ height: "100px", width: "100px" }}
                    />
                    <Button
                        className="text-white"
                        variant="link"
                        href="mailto:jmdanie@clemson.edu"
                    >
                        jmdanie@clemson.edu
                    </Button>
                </Stack>
            </Stack>
        </Stack>
    );
}
