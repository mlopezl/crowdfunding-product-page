import MastercraftMainCard from "./MastercraftMainCard";
import BackersInfoCard from "./BackersInfoCard";

function MainContainer(){
    return(
        <main className="relative flex flex-col gap-4">
            <MastercraftMainCard/>
            <BackersInfoCard amount={"89914"}/>
        </main>
    )
}

export default MainContainer;