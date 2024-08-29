import FacilityCard from "../../components/ui/FacilityCard";
import SearchFilters from "../../components/ui/SearchFilters";
import facilitiesApi from "../../redux/features/facility/facilityApi";
import { useState, useEffect, useCallback } from "react";
import {Row, Col, Grid, Pagination} from "antd";
import { TFacilities } from "../../types/facilities.type";
import { debounce } from "lodash";
import SmallLoading from "../../components/ui/SmallLoading";

const { useBreakpoint } = Grid;
const Facilities = () => {
   const screens = useBreakpoint();
    const [page, setPage] = useState(1);
    const [facilities, setFacilities] = useState<TFacilities[]>([]);
  const [filteredFacilities, setFilteredFacilities] = useState<TFacilities[]>([]);
  const { data: facilitiess, isLoading } =
    facilitiesApi.useGetAllFacilitiesQuery([{ name: "page", value: page }]);
    const totalData = facilitiess?.meta;
    console.log('total data', totalData)

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

  if (isLoading) {
    return <SmallLoading />;
  }

    return (
      <Row
        style={{
          padding: screens.lg ? "50px 100px" : screens.md ? "50px 60px" : "40px 5px",
          background: "#F2F7FF",
        }}
      >
        <Col xs={24} sm={24} md={6}>
          <SearchFilters onSearch={debouncedSearch} onFilter={handleFilter} />
        </Col>
        <Col xs={24} sm={24} md={18}>
          {filteredFacilities?.length ? (
            <>
              <Row gutter={[16, 16]}>
                {filteredFacilities.map((facility: any) => (
                  <Col key={facility._id} xs={24} sm={12} md={12} lg={8}>
                    <FacilityCard facility={facility} />
                  </Col>
                ))}
              </Row>
              <div
                style={{
                  marginTop: "40px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Pagination
                  pageSize={totalData?.limit}
                  onChange={(value) => setPage(value)}
                  total={totalData?.total}
                />
              </div>
            </>
          ) : (
            <>
              <div
                style={{
                  textAlign: "center",
                  color: "#003180",
                  fontSize: "20px",
                }}
              >
                <h1 style={{ marginTop: "200px" }}>
                  Facility is not Available!!
                </h1>
              </div>
            </>
          )}
        </Col>
      </Row>
    );
};

export default Facilities;