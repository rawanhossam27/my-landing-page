import React from 'react';
import { Box, Image, Text, Link, chakra, Flex } from '@chakra-ui/react';

const Footer = () => {
  const socialIcons = [
    { src: '/instagram.png', alt: 'Instagram', href: '#' },
    { src: '/facebook.png', alt: 'Facebook', href: '#' },
    { src: '/tiktok.png', alt: 'TikTok', href: '#' },
    { src: '/twitterX.png', alt: 'Twitter/X', href: '#' },
    { src: '/linkedIn.png', alt: 'LinkedIn', href: '#' },
  ];

  return (
    <Box
      w="100%"
      h="auto"
      py={10}
      marginTop="0px"
    >
      <Flex
        direction="row" // Changed direction to row for horizontal alignment of left and right blocks
        align="flex-start"
        maxW="1440px"
        mx="auto"
        px={8}
        justifyContent="space-between" // Distribute space between the left and right blocks
        alignItems="flex-start" // Align items to the start vertically within the row
      >
        {/* Left Side Content */}
        <Box>
          {/* Logo and Text */}
          <Box mb={6}>
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
          <Box mb={6}>
            <Link href="#" passHref>
              <Box
                width="174px"
                height="45px"
                bg="#D2AC71"
                borderRadius="full"
                display="flex"
                alignItems="center"
                justifyContent="center"
                _hover={{ opacity: 0.8 }}
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
            </Link>
          </Box>

          {/* Navigation Links */}
          <Flex align="center" mb={8}>
            <Link href="/" passHref>
              <Text
                color="#D2AC71"
                fontSize="18px"
                mr={4}
                cursor="pointer"
                _hover={{ textDecoration: 'underline' }}
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
                _hover={{ textDecoration: 'underline' }}
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
                _hover={{ textDecoration: 'underline' }}
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
                _hover={{ textDecoration: 'underline' }}
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
                _hover={{ textDecoration: 'underline' }}
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

        {/* Right Side Content */}
        <Box alignSelf="flex-end">
          {/* Social Media Icons */}
          <Flex alignSelf="flex-end" alignItems="center" mb={2} justifyContent="flex-end">
            {socialIcons.map((icon, index) => (
              <Link key={index} href={icon.href} passHref>
                <Box
                  width="60px"
                  height="60px"
                  bg="#D2AC71"
                  borderRadius="20px"
                  ml={index > 0 ? 4 : 0}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  cursor="pointer"
                  _hover={{ opacity: 0.8 }}
                >
                  <Image src={icon.src} alt={icon.alt} boxSize="40px" />
                </Box>
              </Link>
            ))}
          </Flex>

          {/* Copyright Text */}
          <Box
            textAlign="right"
            width="336px"
            height="54px"
            // mt="365px" // Removed specific top margin as the Flex parent will handle vertical alignment
            // ml="953px" // Removed specific left margin as the Flex parent will handle horizontal positioning
          >
            <Text
              fontFamily="Montserrat"
              fontWeight="500"
              fontSize="20px"
              lineHeight="27px"
              letterSpacing="0%"
              color="#FFFFFF"
              textAlign="right"
            >
              Copyright Gates of Egypt © 2024 All rights reserved
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;