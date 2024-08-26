import ContactInformation from "./ContactInformation/ContactInformation";
import HistoryMilestones from "./HistoryMilestones/HistoryMilestones";
import MissionStatement from "./MissionStatement/MissionStatement";
import TeamSection from "./TeamSection/TeamSection";

const About = () => {
    return (
        <div>
           <MissionStatement />
           <TeamSection />
           <HistoryMilestones />
           <ContactInformation />
        </div>
    );
};

export default About;