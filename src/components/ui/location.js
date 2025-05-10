import { Flex, Icon, Text, Box, Portal } from '@chakra-ui/react';
import { CiLocationOn } from "react-icons/ci";
import { useState, useRef, useEffect } from "react";
import { IoLocationOutline } from "react-icons/io5";

const cityList = [
    "Cairo",
    "Hurghada",
    "Sharm El-Sheikh",
    "Luxor & Aswan",
];

const LocationItems = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [selectedCity, setSelectedCity] = useState(null);
    const dropdownRef = useRef(null);
    const triggerRef = useRef(null);
    const [dropdownTop, setDropdownTop] = useState(0);
    const [dropdownLeft, setDropdownLeft] = useState(0);

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
                triggerRef.current &&
                !triggerRef.current.contains(event.target)
            ) {
                closeDropdown();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isDropdownVisible]);

    useEffect(() => {
        if (isDropdownVisible && triggerRef.current) {
            const rect = triggerRef.current.getBoundingClientRect();
            setDropdownTop(rect.bottom + window.scrollY + 16);

            const calculatedLeft = rect.left + window.scrollX;
            const shiftLeft = 50; // Increased value to move dropdown further left
            setDropdownLeft(calculatedLeft - shiftLeft);
        } else {
            setDropdownTop(0);
            setDropdownLeft(0);
        }
    }, [isDropdownVisible]);

    return (
        <Box position="relative" width={{ base: '100%', md: 'auto' }}>
            <Flex
                alignItems="center"
                cursor="pointer"
                onClick={toggleDropdown}
                ref={triggerRef}
                width="auto"
            >
                <Icon as={CiLocationOn}
                    boxSize={{ base: "20px", md: "26px" }}
                    color="#D2AC71"
                    mr={{ base: 1, md: 2 }}
                />
                <Text
                    width="auto"
                    fontFamily="Montserrat"
                    fontWeight={600}
                    fontSize={{ base: "14px", md: "16px" }}
                    lineHeight="100%"
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
                        left={`${dropdownLeft}px`}
                        width={{ base: "85%", sm: "220px", md: "220px" }}
                        maxWidth="220px"
                        height="auto"
                        borderRadius={{ base: "16px", md: "30px" }}
                        background="rgba(255, 255, 255, 0.25)"
                        backdropFilter="blur(10px)"
                        zIndex={9999}
                        boxShadow="0px 4px 12px rgba(0, 0, 0, 0.2)"
                        p={{ base: 3, md: 4 }}
                        display="flex"
                        flexDirection="column"
                        alignItems="flex-start"
                    >
                        <Box flexGrow={1} width="100%" pr={{ base: 1, md: 2 }}>
                            {cityList.map((city, index) => (
                                <Flex
                                    key={index}
                                    alignItems="center"
                                    mb={{ base: 2, md: 3 }}
                                    cursor="pointer"
                                    _hover={{
                                        bg: "rgba(255, 255, 255, 0.1)",
                                        borderRadius: "10px",
                                    }}
                                    p={{ base: 1.5, md: 2 }}
                                    width="100%"
                                    onClick={() => handleCitySelect(city)}
                                >
                                    <Box
                                        bg="#F6EEE5"
                                        borderRadius="20px"
                                        width={{ base: "36px", md: "46px" }}
                                        height={{ base: "36px", md: "46px" }}
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"
                                        mr={{ base: 2, md: 3 }}
                                    >
                                        <Icon as={IoLocationOutline} color="black"
                                            boxSize={{ base: "20px", md: "24px" }}
                                        />
                                    </Box>
                                    <Box flexGrow={1}>
                                        <Text fontFamily="Montserrat" fontWeight="500"
                                            fontSize={{ base: "14px", md: "16px" }}
                                            color="white"
                                        >
                                            {city}
                                        </Text>
                                        <Text fontFamily="Montserrat"
                                            fontSize={{ base: "10px", md: "12px" }}
                                            color="white"
                                            opacity="0.6"
                                        >
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