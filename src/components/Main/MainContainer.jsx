import MastercraftMainCard from "./MastercraftMainCard";
import BackersInfoCard from "./BackersInfoCard";
import AboutSection from "./AboutSection";

function MainContainer(){
    return(
        <main className="relative flex flex-col gap-6">
            <MastercraftMainCard/>
            <BackersInfoCard amount={"89914"}/>
            <AboutSection/>
        </main>
    )
}

export default MainContainer;