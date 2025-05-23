import { Box, Flex, Spacer, Image, Text, chakra, Icon } from "@chakra-ui/react";
 import SearchCircle from "./search";
 import { VscGlobe } from "react-icons/vsc";
 import { CiHeart } from "react-icons/ci";
 import { PiShoppingCartSimple } from "react-icons/pi";
 import { GoPerson } from "react-icons/go";

 const Navbar = () => {
  return (
    <Box as="nav" p={4} color="#121212" h="100px" position="relative">
      <Flex alignItems="center">
        {/* Logo */}
        <Box ml={6}>
          <Box position="relative" width="100px" height="59.54px" cursor="pointer">
            <Image
              src="/LOGO 2.png"
              alt="Logo"
              w="100px"
              h="32.54px"
              objectFit="contain"
              position="absolute"
              top="0"
              left="0"
              zIndex={1}
            />
            <Text
              position="absolute"
              w="auto"
              h="27px"
              top="32.54px"
              left="0px"
              fontFamily="Montserrat"
              fontSize="22px"
              lineHeight="100%"
              letterSpacing="0%"
              zIndex={0}
            >
              <chakra.span fontWeight="600" color="#D2AC71">Egy</chakra.span>
              <chakra.span fontWeight="400" color="white">Book</chakra.span>
            </Text>
          </Box>
        </Box>

        {/* Nav Items */}
        <Box display="flex" alignItems="center" ml={6}>
          <SearchCircle />

          <Text
            color="#D2AC71"
            fontSize="18px"
            ml={4}
            w="42px"
            h="22px"
            cursor="pointer"
            onClick={() => console.log("GOE clicked")}
          >
            GOE
          </Text>

          <Text
            fontSize="18px"
            ml={4}
            w="82px"
            h="22px"
            cursor="pointer"
            onClick={() => console.log("EgyBook clicked")}
          >
            <chakra.span fontWeight="600" color="#D2AC71">Egy</chakra.span>
            <chakra.span fontWeight="400" color="white">Book</chakra.span>
          </Text>

          <Text
            fontSize="18px"
            ml={4}
            w="103px"
            h="22px"
            cursor="pointer"
            onClick={() => console.log("EgyExplore clicked")}
          >
            <chakra.span fontWeight="600" color="#D2AC71">Egy</chakra.span>
            <chakra.span fontWeight="400" color="white">Explore</chakra.span>
          </Text>

          <Text
            fontSize="18px"
            ml={4}
            w="80px"
            h="22px"
            cursor="pointer"
            onClick={() => console.log("EgyTales clicked")}
          >
            <chakra.span fontWeight="600" color="#D2AC71">Egy</chakra.span>
            <chakra.span fontWeight="400" color="white">Tales</chakra.span>
          </Text>

          <Text
            fontSize="18px"
            ml={4}
            w="112px"
            h="22px"
            cursor="pointer"
            onClick={() => console.log("EgyTreasure clicked")}
          >
            <chakra.span fontWeight="600" color="#D2AC71">Egy</chakra.span>
            <chakra.span fontWeight="400" color="white">Treasure</chakra.span>
          </Text>
        </Box>

        <Spacer />

        {/* Language and Auth Buttons */}
        <Box display="flex" alignItems="center">
          <Box display="flex" alignItems="center" mr={4}>
            <Icon
              as={VscGlobe}
              color="white"
              boxSize="28px"
              cursor="pointer"
              onClick={() => console.log("Globe icon clicked")}
            />
            <Text
              color="#F6EEE5"
              ml={2}
              fontSize="20px"
              fontFamily="Montserrat"
              fontWeight="400"
              lineHeight="24px"
            >
              EN
            </Text>
          </Box>
          <Box
            width="1px"
            height="26px"
            borderLeft="0.5px solid #F6EEE5"
            ml={4}
          />
          <Icon
            as={CiHeart}
            color="#F6EEE5"
            boxSize="42px"
            style={{
              padding: '2px', // Adjust padding as needed
              marginLeft: '20px',
            }}
          />
          <Icon
            as={PiShoppingCartSimple}
            color="#F6EEE5"
            boxSize="34px"
            ml="15px"
          />
          <Box
            width="50px"
            height="50px"
            borderRadius="100px"
            backgroundColor="#F6EEE5"
            ml="50px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Icon
              as={GoPerson}
              color="#D2AC71"
              boxSize="38px"
              marginTop="12px"
            />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
 };

 export default Navbar;