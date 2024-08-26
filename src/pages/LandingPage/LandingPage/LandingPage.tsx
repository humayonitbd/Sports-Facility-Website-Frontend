import CustommerTestimonials from "../../CustommerTestimonials/CustommerTestimonials";
import FeaturedFacilities from "../../FeaturedFacilities/FeaturedFacilities";
import HowItWorks from "../../HowItWorks/HowItWorks";
import UpcomingEvents from "../../UpcomingEvents/UpcomingEvents";
import HeroSection from "../HeroSection/HeroSection";

const LandingPage = () => {
    return (
        <div>
           <HeroSection />
           <FeaturedFacilities />
           <HowItWorks />
           <CustommerTestimonials />
           <UpcomingEvents />
        </div>
    );
};

export default LandingPage;