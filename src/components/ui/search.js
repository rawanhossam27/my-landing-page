import { Box, Icon, Input, Text } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import React, { useState, useRef, useEffect } from "react";

// List of cities to filter
const cityList = [
  "Cairo",
  "Alexandria",
  "Hurghada"
];

// Search label component
const SearchLabel = () => (
  <Box
    as="span"
    fontSize="20px"
    fontFamily="Montserrat"
    fontWeight="400"
    color="#D2AC71"
    width="73px"
    height="26px"
    lineHeight="100%"
    display="flex"
    alignItems="center"
    justifyContent="center"
    cursor="text"
  >
    Search
  </Box>
);

// Styled search input box
const SearchInputBox = React.forwardRef((props, ref) => (
  <Input
    ref={ref}
    placeholder=""
    size="sm"
    borderRadius="20px"
    backgroundColor="transparent"
    color="white"
    _focus={{ boxShadow: "none", outline: "none", pl: 2 }}
    border="none"
    ml={2}
    pl={2}
    fontFamily="Montserrat"
    fontWeight="400"
    fontSize="20px"
    lineHeight="100%"
    width="calc(100% - 81px)"
    cursor="text"
    {...props}
  />
));
SearchInputBox.displayName = 'SearchInputBox';

// Location icon container
const LocationIconBox = () => (
  <Box
    width="46px"
    height="46px"
    borderRadius="20px"
    backgroundColor="#F6EEE5"
    display="flex"
    alignItems="center"
    justifyContent="center"
    mt={2}
    mb={2}
  >
    <Icon as={IoLocationOutline} color="black" boxSize="24px" />
  </Box>
);

// Location info below icon
const PopularLocation = ({ text }) => (
  <Box display="flex" flexDirection="column" ml={2} alignSelf="center">
    <Text
      fontFamily="Montserrat"
      fontWeight="400"
      fontSize="15px"
      lineHeight="18px"
      letterSpacing="-0.48px"
      color="#F6EEE5"
    >
      {text}
    </Text>
    <Text
      fontFamily="Montserrat"
      fontWeight="400"
      fontSize="12px"
      lineHeight="15px"
      color="#F6EEE5"
      opacity="0.6"
    >
      City in Egypt
    </Text>
  </Box>
);

// Main search circle component
const SearchCircle = () => {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filteredCities, setFilteredCities] = useState(cityList);
  const dropdownRef = useRef(null);
  const searchInputRef = useRef(null);
  const searchIconRef = useRef(null);

  const openSearch = () => {
    setSearchVisible(true);
    setTimeout(() => {
      if (searchInputRef.current) {
        searchInputRef.current.focus();
      }
    }, 100);
  };

  const closeSearch = () => {
    setSearchVisible(false);
    setSearchText("");
    setFilteredCities(cityList); // Reset to all cities when closing the search
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchText(value);
    
    // Filter the cities based on input value
    const filtered = cityList.filter((city) =>
      city.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCities(filtered);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isSearchVisible &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target) &&
        searchIconRef.current &&
        !searchIconRef.current.contains(event.target)
      ) {
        closeSearch();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSearchVisible]);

  return (
    <Box display="flex" alignItems="center" ml={4}>
      <Box
        ref={searchIconRef}
        height="40px"
        borderRadius="20px"
        backgroundColor="#444444"
        zIndex={3}
        display="flex"
        alignItems="center"
        justifyContent="center"
        cursor="pointer"
        onClick={isSearchVisible ? closeSearch : openSearch}
        transition="width 0.3s ease-in-out"
        style={{ width: isSearchVisible ? "350px" : "40px" }}
        role="group"
        aria-label="search-input"
        position="relative"
      >
        <Icon as={FaSearch} color="#D2AC71" boxSize="16px" ml={isSearchVisible ? 8 : 0} />

        {isSearchVisible && (
          <Box
            width="350px"
            height="40px"
            borderRadius="20px"
            backgroundColor="#444444"
            display="flex"
            alignItems="center"
            pl={2}
          >
            <hr
              style={{
                borderLeft: '1px solid black',
                height: '26px',
                marginRight: '8px',
                marginLeft: '8px',
              }}
            />
            {/* Conditionally render Search label */}
            {searchText === "" && <SearchLabel />}
            <SearchInputBox
              ref={searchInputRef}
              value={searchText}
              onChange={handleInputChange}
            />
          </Box>
        )}

        {isSearchVisible && (
          <Box
            ref={dropdownRef}
            position="absolute"
            top="42px"
            left="0px"
            width="350px"
            backgroundColor="#444444"
            borderRadius="20px"
            zIndex={2}
            boxShadow="0px 4px 12px rgba(0, 0, 0, 0.2)"
            pt="21px"
            pl="23px"
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            style={{ height: '301px' }}
          >
            <Box flexGrow={1}>
              <Text
                fontFamily="Montserrat"
                fontWeight="500"
                fontSize="16px"
                lineHeight="100%"
                color="#D2AC71"
                opacity="0.75"
                width="108px"
                height="20px"
                mb={2}
              >
                Most popular
              </Text>

              {/* Map over filtered cities */}
              {filteredCities.map((city, index) => (
                <Box key={index} display="flex" alignItems="center" mb={2}>
                  <LocationIconBox />
                  <PopularLocation text={city} />
                </Box>
              ))}
            </Box>

            <Box width="257px" mb="6px">
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Text
                  fontFamily="Montserrat"
                  fontWeight="500"
                  fontSize="10px"
                  lineHeight="10px"
                  letterSpacing="-0.16px"
                  color="#F6EEE5"
                >
                  See all results for &quot{searchText}&quot
                </Text>
                <Box mr="-30px"> {/* Pushes it further right */}
                  <Icon
                    as={FaArrowRight}
                    color="#F6EEE5"
                    width="15px"
                    height="15px"
                    boxSize="15px"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default SearchCircle;
