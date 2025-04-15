import { Box, Flex, Spacer, Image, Text, chakra, Icon } from "@chakra-ui/react";
import Link from "next/link";
import SearchCircle from "./search";
import { VscGlobe } from "react-icons/vsc";
import LoginButton from "./login"; 
import SignUpButton from "./sign-up"; 

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

        <Box display="flex" alignItems="center" ml={6}>
          <SearchCircle />
          {/* Navigation Links (as before) */}
          <Link href="/GOE" passHref>
            <Text
              color="#D2AC71"
              fontSize="18px"
              ml={4}
              w="42px"
              h="22px"
              cursor="pointer"
            >
              GOE
            </Text>
          </Link>
          <Link href="/EgyBook" passHref>
            <Text
              fontSize="18px"
              ml={4}
              w="82px"
              h="22px"
              cursor="pointer"
            >
              <chakra.span fontWeight="600" color="#D2AC71">Egy</chakra.span>
              <chakra.span fontWeight="400" color="white">Book</chakra.span>
            </Text>
          </Link>
          <Link href="/EgyExplore" passHref>
            <Text
              fontSize="18px"
              ml={4}
              w="103px"
              h="22px"
              cursor="pointer"
            >
              <chakra.span fontWeight="600" color="#D2AC71">Egy</chakra.span>
              <chakra.span fontWeight="400" color="white">Explore</chakra.span>
            </Text>
          </Link>
          <Link href="/EgyTales" passHref>
            <Text
              fontSize="18px"
              ml={4}
              w="80px"
              h="22px"
              cursor="pointer"
            >
              <chakra.span fontWeight="600" color="#D2AC71">Egy</chakra.span>
              <chakra.span fontWeight="400" color="white">Tales</chakra.span>
            </Text>
          </Link>
          <Link href="/EgyTreasure" passHref>
            <Text
              fontSize="18px"
              ml={4}
              w="112px"
              h="22px"
              cursor="pointer"
            >
              <chakra.span fontWeight="600" color="#D2AC71">Egy</chakra.span>
              <chakra.span fontWeight="400" color="white">Treasure</chakra.span>
            </Text>
          </Link>
        </Box>

        <Spacer />

        <Box display="flex" alignItems="center">
          <Box display="flex" alignItems="center" mr={4}> {/* Language Group */}
            <Icon as={VscGlobe} color="white" boxSize="28px" />
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

          {/* Replace inline buttons with imported components */}
          <LoginButton mr={2} />
          <SignUpButton />
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;