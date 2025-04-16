import React from 'react';
import { Box, Image, Text, Link, chakra, Flex } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box
      w="100%"
      h="auto"
      py={10}
    >
      <Flex
        direction="column"
        align="flex-start"
        maxW="1440px"
        mx="auto"
        px={8}
        justifyContent="space-between"
        alignItems="flex-start" // Align items to the start vertically in the main Flex
      >
        {/* Left Side Content */}
        <Box alignSelf="flex-start">
          {/* Logo and Text */}
          <Box mb={6} alignSelf="flex-start">
            <Image
              src="/LOGO 2.png"
              alt="Footer Logo"
              width="184px"
              height="60px"
              mb={2}
            />
            <Text
              width="521px"
              fontFamily="Montserrat"
              fontWeight="600"
              fontSize="36px"
              lineHeight="1.2"
              letterSpacing="0%"
              color="#F6EEE5"
              textAlign="left"
            >
              Lorem, Ipsum Lorem, Ipsum Lorem, Ipsum or less.
            </Text>
          </Box>

          {/* "Discover More" Button */}
          <Box mb={6} alignSelf="flex-start">
            <Box
              width="174px"
              height="45px"
              bg="#D2AC71"
              borderRadius="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text
                fontFamily="Montserrat"
                fontWeight="600"
                fontSize="20px"
                lineHeight="1"
                letterSpacing="0%"
                color="#FFFFFF"
              >
                Discover More
              </Text>
            </Box>
          </Box>

          {/* Navigation Links */}
          <Flex align="center" mb={8}>
            <Link href="/" passHref>
              <Text
                color="#D2AC71"
                fontSize="18px"
                mr={4}
                cursor="pointer"
              >
                Home
              </Text>
            </Link>
            <Link href="/EgyBook" passHref>
              <Text
                fontSize="18px"
                mr={4}
                cursor="pointer"
                color="white"
              >
                <chakra.span fontWeight="600" color="#D2AC71">
                  Egy
                </chakra.span>
                <chakra.span fontWeight="400" color="white">
                  Book
                </chakra.span>
              </Text>
            </Link>
            <Link href="/EgyExplore" passHref>
              <Text
                fontSize="18px"
                mr={4}
                cursor="pointer"
                color="white"
              >
                <chakra.span fontWeight="600" color="#D2AC71">
                  Egy
                </chakra.span>
                <chakra.span fontWeight="400" color="white">
                  Explore
                </chakra.span>
              </Text>
            </Link>
            <Link href="/EgyTales" passHref>
              <Text
                fontSize="18px"
                mr={4}
                cursor="pointer"
                color="white"
              >
                <chakra.span fontWeight="600" color="#D2AC71">
                  Egy
                </chakra.span>
                <chakra.span fontWeight="400" color="white">
                  Tales
                </chakra.span>
              </Text>
            </Link>
            <Link href="/EgyTreasure" passHref>
              <Text
                fontSize="18px"
                cursor="pointer"
                color="white"
              >
                <chakra.span fontWeight="600" color="#D2AC71">
                  Egy
                </chakra.span>
                <chakra.span fontWeight="400" color="white">
                  Treasure
                </chakra.span>
              </Text>
            </Link>
          </Flex>
        </Box>

        {/* Right Side Content (Boxes above Copyright) */}
        <Flex alignSelf="flex-end" alignItems="center" mb={2}> {/* Added margin-bottom */}
          {Array.from({ length: 5 }).map((_, index) => (
            <Box
              key={index}
              width="60px" // Restored original width
              height="60px" // Restored original height
              bg="#D2AC71"
              borderRadius="20px" // Restored original borderRadius
              ml={index > 0 ? 4 : 0}
            />
          ))}
        </Flex>

        {/* Copyright Text */}
        <Box alignSelf="flex-end" textAlign="right">
          <Text color="white" fontSize="sm">
            Copyright Gates of Egypt © 2024
          </Text>
          <Text color="white" fontSize="sm">
            All rights reserved
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;