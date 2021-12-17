import { Stack } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";

import "../styles/hero.css";

export default function Hero() {
    return (
        <Stack className="vh-100 bg-primary mb-3" id="home">
            <Stack className="d-flex align-items-center justify-content-center">
                <h1 className="text-white display-1 text-center">
                    Jonathan Daniel
                </h1>
                <h1 className="text-white text-center">
                    Future Software Engineer
                </h1>
                <h1 className="text-white text-center">
                    Clemson University National Scholar
                </h1>
                <h1 className="text-white text-center">Class of 2023</h1>

                <Stack
                    direction="horizontal"
                    gap={3}
                    className="d-flex align-items-center justify-content-center"
                >
                    <SocialIcon
                        url="https://www.linkedin.com/in/jonathandaniel23/"
                        bgColor="#fff"
                    />
                    <SocialIcon
                        url="https://github.com/JDaniel41/"
                        bgColor="#fff"
                    />
                </Stack>
            </Stack>
        </Stack>
    );
}
