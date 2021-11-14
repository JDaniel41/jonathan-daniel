import "bootstrap/dist/css/bootstrap.min.css";
import TopNavBar from "./components/TopNavBar";
import Hero from "./components/Hero";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import ParticlesDemo from "./components/ParticlesDemo";

function App() {
    return (
        <div>
            <TopNavBar />
            <Hero />
            <AboutMe />
            <Experiences />
            <Projects />
        </div>
    );
}

export default App;
