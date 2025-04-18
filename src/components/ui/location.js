import { Flex, Icon, Text, Box, Portal } from '@chakra-ui/react';
import { CiLocationOn } from "react-icons/ci";
import { useState, useRef, useEffect } from "react";
import { IoLocationOutline } from "react-icons/io5";

// List of cities
const cityList = [
    "Cairo",
    "Hurghada",
    "Sharm El-Sheikh",
    "Luxor & Aswan",
    // Add more cities as needed
];

const LocationItems = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [selectedCity, setSelectedCity] = useState(null);
    const dropdownRef = useRef(null);
    const locationTextRef = useRef(null);
    const locationFlexRef = useRef(null);
    const [dropdownTop, setDropdownTop] = useState(0);

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    const closeDropdown = () => {
        setDropdownVisible(false);
    };

    const handleCitySelect = (city) => {
        setSelectedCity(city);
        closeDropdown();
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                isDropdownVisible &&
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target) &&
                locationTextRef.current &&
                !locationTextRef.current.contains(event.target)
            ) {
                closeDropdown();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isDropdownVisible]);

    useEffect(() => {
        if (isDropdownVisible && locationFlexRef.current) {
            const rect = locationFlexRef.current.getBoundingClientRect();
            setDropdownTop(rect.bottom + window.scrollY + 16); // Increased the top offset
        } else {
            setDropdownTop(0);
        }
    }, [isDropdownVisible]);

    return (
        <Box position="relative">
            <Flex
                alignItems="center"
                cursor="pointer"
                onClick={toggleDropdown}
                ref={locationTextRef}
                ref={locationFlexRef}
            >
                <Icon as={CiLocationOn} boxSize={`${26}px`} color="#D2AC71" mr={2} />
                <Text
                    width="auto"
                    height={`${20}px`}
                    fontFamily="Montserrat"
                    fontWeight={600}
                    fontSize="16px"
                    lineHeight="100%"
                    letterSpacing="0%"
                    color="#FFFFFF"
                >
                    {selectedCity ? `${selectedCity}, Egypt` : "Location"}
                </Text>
            </Flex>

            {isDropdownVisible && (
                <Portal>
                    <Box
                        ref={dropdownRef}
                        position="absolute"
                        top={`${dropdownTop}px`}
                        left="180px"
                        width="255px"
                        height="auto"
                        borderRadius="30px"
                        background="rgba(255, 255, 255, 0.25)"
                        backdropFilter="blur(10px)"
                        zIndex={9999}
                        boxShadow="0px 4px 12px rgba(0, 0, 0, 0.2)"
                        p={4}
                        display="flex"
                        flexDirection="column"
                        alignItems="flex-start"
                    >
                        <Box flexGrow={1} width="100%" maxHeight="261px" pr={2} overflowY="hidden">
                            {cityList.map((city, index) => (
                                <Flex
                                    key={index}
                                    alignItems="center"
                                    mb={3}
                                    cursor="pointer"
                                    _hover={{
                                        bg: "rgba(255, 255, 255, 0.1)",
                                        borderRadius: "10px",
                                    }}
                                    p={2}
                                    width="100%"
                                    height="57px"
                                    onClick={() => handleCitySelect(city)}
                                >
                                    <Box
                                        bg="#F6EEE5"
                                        borderRadius="20px"
                                        width="46px"
                                        height="46px"
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"
                                        mr={3}
                                    >
                                        <Icon as={IoLocationOutline} color="black" boxSize="24px" />
                                    </Box>
                                    <Box flexGrow={1}>
                                        <Text fontFamily="Montserrat" fontWeight="500" fontSize="16px" color="white">
                                            {city}
                                        </Text>
                                        <Text fontFamily="Montserrat" fontSize="12px" color="white" opacity="0.6">
                                            City in Egypt
                                        </Text>
                                    </Box>
                                </Flex>
                            ))}
                        </Box>
                    </Box>
                </Portal>
            )}
        </Box>
    );
};

export default LocationItems;