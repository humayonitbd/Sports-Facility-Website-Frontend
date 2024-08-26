// import React, { useState, useEffect } from "react";
// import { Input, Slider, Typography } from "antd";
// import "antd/dist/reset.css"; 
// import { debounce } from "lodash";

// const { Title } = Typography;

// const SearchFilters = ({ onSearch, onFilter }: any) => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [debouncedValue, setDebouncedValue] = useState(searchTerm);
//   const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);

//    const debouncedSearch = debounce((term: string) => {
//      setDebouncedValue(term);
//    }, 500);


//    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
//      setSearchTerm(e.target.value);
//      debouncedSearch(e.target.value);
//    };

 
//    useEffect(() => {
//      onSearch(debouncedValue);
//    }, [debouncedValue, onSearch]);

//   const handlePriceChange = (value: number[]) => {
//     if (value.length === 2) {
//       setPriceRange([value[0], value[1]]);
//       onFilter([value[0], value[1]]);
//     }
//   };

//   return (
//     <div
//       style={{
//         padding: "24px",
//         backgroundColor: "#ffffff",
//         borderRadius: "12px",
//         boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
//         maxWidth: "300px", 
//       }}
//     >
//       <Input
//         type="text"
//         value={searchTerm}
//         onChange={handleSearch}
//         placeholder="Search by name or location"
//         style={{
//           marginBottom: "24px",
//           borderColor: "#4CAF50",
//           borderRadius: "8px",
//           padding: "12px",
//           fontSize: "16px",
//         }}
//       />
//       <Title level={5} style={{ marginBottom: "8px", color: "#4CAF50" }}>
//         Filter by Price Range
//       </Title>
//       <Slider
//         range
//         min={0}
//         max={500}
//         value={priceRange}
//         onChange={handlePriceChange}
//         trackStyle={[{ backgroundColor: "#4CAF50" }]} 
//         handleStyle={[{ borderColor: "#4CAF50" }]} 
//         style={{ marginBottom: "24px" }}
//       />
//       <Title level={5} style={{ color: "#607D8B" }}>
//         Selected Range: ${priceRange[0]} - ${priceRange[1]}
//       </Title>
//     </div>
//   );
// };

// export default SearchFilters;

import React, { useState } from "react";
import { Input, Slider, Typography } from "antd";
import "antd/dist/reset.css";


const { Title } = Typography;

const SearchFilters = ({ onSearch, onFilter }: any) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);


 
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  

  const handlePriceChange = (value: number[]) => {
    if (value.length === 2) {
      setPriceRange([value[0], value[1]]);
      onFilter([value[0], value[1]]);
    }
  };

  return (
    <div
      style={{
        padding: "24px",
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        maxWidth: "300px",
        margin: "0 auto", 
      }}
    >
      <Input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search by name or location"
        style={{
          marginBottom: "24px",
          borderColor: "#4CAF50",
          borderRadius: "8px",
          padding: "12px",
          fontSize: "16px",
        }}
      />
      <Title level={5} style={{ marginBottom: "8px", color: "#4CAF50" }}>
        Filter by Price Range
      </Title>
      <Slider
        range
        min={0}
        max={500}
        value={priceRange}
        onChange={handlePriceChange}
        trackStyle={[{ backgroundColor: "#4CAF50" }]} 
        handleStyle={[{ borderColor: "#4CAF50" }]} 
        style={{ marginBottom: "24px" }}
      />
      <Title level={5} style={{ color: "#607D8B" }}>
        Selected Range: ${priceRange[0]} - ${priceRange[1]}
      </Title>
    </div>
  );
};

export default SearchFilters;
