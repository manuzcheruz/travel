import IntroSection from "./introSection/IntroSection";
import Navbar from "./navbar/Navbar";

function LandingPage() {
    return (
        <div className="wrapper">
            <Navbar />
            <IntroSection />
        </div>
    )
}

export default LandingPage;