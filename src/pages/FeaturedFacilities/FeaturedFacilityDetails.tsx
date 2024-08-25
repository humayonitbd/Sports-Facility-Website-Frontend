import { useParams } from "react-router-dom";

const FeaturedFacilityDetails = () => {
    const {id} = useParams();
    return (
        <div>
            facility details page{id}
        </div>
    );
};

export default FeaturedFacilityDetails;