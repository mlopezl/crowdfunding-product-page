import MastercraftMainCard from "./MastercraftMainCard";
import BackersInfoCard from "./BackersInfoCard";
import AboutSection from "./AboutSection";

function MainContainer({
  onOpenProject,
  totalAmount,
  totalBackers,
  inventory,
}) {
    return(
        <main className="relative flex flex-col gap-6">
            <MastercraftMainCard onOpenProject={onOpenProject} />
            <BackersInfoCard
  amount={totalAmount}
  backers={totalBackers}
/>
            <AboutSection
  onSelectReward={onOpenProject}
  inventory={inventory}
/>
        </main>
    )
}

export default MainContainer;