import FacilityCard from "../../components/ui/FacilityCard";
import SearchFilters from "../../components/ui/SearchFilters";
import facilitiesApi from "../../redux/features/facility/facilityApi";
import { useState, useEffect, useCallback } from "react";
import {Row, Col} from "antd";
import { TFacilities } from "../../types/facilities.type";
import { debounce } from "lodash";
const Facilities = () => {
    const [facilities, setFacilities] = useState<TFacilities[]>([]);
  const [filteredFacilities, setFilteredFacilities] = useState<TFacilities[]>([]);
  const { data: facilitiess } = facilitiesApi.useGetAllFacilitiesQuery(null);

    useEffect(() => {
      if (facilitiess?.data) {
        setFacilities(facilitiess.data);
        setFilteredFacilities(facilitiess.data);
      }
    }, [facilitiess]);


  const handleSearch = (searchTerm: string) => {
    const results = facilities.filter(
      (facility: any) =>
        facility.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        facility.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredFacilities(results);
  };

   const debouncedSearch = useCallback(
     debounce((term: string) => {
       handleSearch(term);
     }, 500),
     [handleSearch]
   );

  const handleFilter = (priceRange: [number, number]) => {
    const results = facilities.filter(
      (facility: any) =>
        facility.pricePerHour >= priceRange[0] &&
        facility.pricePerHour <= priceRange[1]
    );
    setFilteredFacilities(results);
  };
    return (
      <Row style={{ padding: "50px 0" }}>
        <Col xs={24} sm={24} md={6}>
          <SearchFilters onSearch={debouncedSearch} onFilter={handleFilter} />
        </Col>
        <Col xs={24} sm={24} md={18}>
          <Row gutter={[16, 16]}>
            {filteredFacilities.map((facility: any) => (
              <Col key={facility._id} xs={24} sm={12} md={8} lg={8}>
                <FacilityCard facility={facility} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    );
};

export default Facilities;