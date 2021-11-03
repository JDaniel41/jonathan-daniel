import "bootstrap/dist/css/bootstrap.min.css";
import TopNavBar from "./components/TopNavBar";
import Hero from "./components/Hero";
import Experiences from "./components/Experiences";
function App() {
    return (
        <div>
            <TopNavBar />
            <Hero />
            <Experiences />
        </div>
    );
}

export default App;
