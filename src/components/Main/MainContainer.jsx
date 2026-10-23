import MastercraftMainCard from "./MastercraftMainCard";
import BackersInfoCard from "./BackersInfoCard";
import AboutSection from "./AboutSection";

function MainContainer({setIsHidden}){
    return(
        <main className="relative flex flex-col gap-6">
            <MastercraftMainCard setIsHidden={setIsHidden}/>
            <BackersInfoCard amount={"89914"}/>
            <AboutSection/>
        </main>
    )
}

export default MainContainer;