import { Box, Flex, Spacer, Image, Text, chakra } from "@chakra-ui/react"; 
import Link from "next/link";
import SearchCircle from "./search";

const Navbar = () => {
  return (
    <Box as="nav" p={4} color="#121212" h="100px" position="relative">
      <Flex alignItems="center">
        <Box ml={6}>
          <Link href="/">
            <Box position="relative" width="100px" height="59.54px">
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
          </Link>
        </Box>
        <Spacer />
        <Box display="flex" alignItems="center">
          <Link href="/GOE" passHref>
            <Text
              color="#D2AC71"
              fontSize="18px"
              mr={4}
              w="42px"
              h="22px"
              cursor="pointer" // Indicate it's clickable
            >
              GOE
            </Text>
          </Link>
          <Link href="/EgyBook" passHref>
            <Text
              fontSize="18px"
              mr={4}
              w="82px"
              h="22px"
              cursor="pointer" // Indicate it's clickable
            >
              <chakra.span fontWeight="600" color="#D2AC71">Egy</chakra.span>
              <chakra.span fontWeight="400" color="white">Book</chakra.span>
            </Text>
          </Link>
          <Link href="/EgyExplore" passHref>
            <Text
              fontSize="18px"
              mr={4}
              w="103px"
              h="22px"
              cursor="pointer" // Indicate it's clickable
            >
              <chakra.span fontWeight="600" color="#D2AC71">Egy</chakra.span>
              <chakra.span fontWeight="400" color="white">Explore</chakra.span> 
            </Text>
          </Link>
          <Link href="/EgyTales" passHref>
            <Text
              fontSize="18px"
              mr={4}
              w="80px"
              h="22px"
              cursor="pointer" // Indicate it's clickable
            >
              <chakra.span fontWeight="600" color="#D2AC71">Egy</chakra.span>
              <chakra.span fontWeight="400" color="white">Tales</chakra.span> 
            </Text>
          </Link>
          <Link href="/EgyTreasure" passHref>
            <Text
              fontSize="18px"
              mr={4}
              w="112px"
              h="22px"
              cursor="pointer" // Indicate it's clickable
            >
              <chakra.span fontWeight="600" color="#D2AC71">Egy</chakra.span>
              <chakra.span fontWeight="400" color="white">Treasure</chakra.span> 
            </Text>
          </Link>
          <Box ml={4}>
            <SearchCircle />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;