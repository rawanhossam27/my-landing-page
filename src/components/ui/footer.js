import React from 'react';
import { Box, Image, Text, Link, chakra, Flex } from '@chakra-ui/react';

const Footer = () => {
  const socialIcons = [
    { src: '/instagram.png', alt: 'Instagram', href: '#' },
    { src: '/facebook.png', alt: 'Facebook', href: '#' },
    { src: '/tiktok.png', alt: 'TikTok', href: '#' },
    { src: '/twitterx.png', alt: 'Twitter/X', href: '#' },
    { src: '/linkedin.png', alt: 'LinkedIn', href: '#' },
  ];

  return (
    <Box w="100%" h="auto" py={10} marginTop="0px">
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align={{ base: 'center', md: 'flex-start' }}
        maxW="1440px"
        mx="auto"
        px={8}
        justifyContent="space-between"
        gap={{ base: 10, md: 0 }}
      >
        {/* Left Side Content */}
        <Box maxW={{ base: '100%', md: '60%' }} textAlign={{ base: 'center', md: 'left' }}>
          {/* Logo and Text */}
          <Box mb={6}>
            <Image
              src="/LOGO 2.png"
              alt="Footer Logo"
              width="184px"
              height="60px"
              mb={2}
              mx={{ base: 'auto', md: '0' }}
            />
            <Text
              width={{ base: '100%', md: '521px' }}
              fontFamily="Montserrat"
              fontWeight="600"
              fontSize={{ base: '24px', md: '36px' }}
              lineHeight="1.2"
              letterSpacing="0%"
              color="#F6EEE5"
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
                mx={{ base: 'auto', md: '0' }}
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
          <Flex
            align="center"
            mb={8}
            wrap="wrap"
            justify={{ base: 'center', md: 'flex-start' }}
            rowGap={2}
          >
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
        <Box alignSelf={{ base: 'center', md: 'flex-end' }} textAlign={{ base: 'center', md: 'right' }}>
          {/* Social Media Icons */}
          <Flex
            justify={{ base: 'center', md: 'flex-end' }}
            alignItems="center"
            mb={2}
            flexWrap="wrap"
            gap={3}
          >
            {socialIcons.map((icon, index) => (
              <Link key={index} href={icon.href} passHref>
                <Box
                  width="60px"
                  height="60px"
                  bg="#D2AC71"
                  borderRadius="20px"
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
          <Box width={{ base: '100%', md: '336px' }} height="auto">
            <Text
              fontFamily="Montserrat"
              fontWeight="500"
              fontSize={{ base: '16px', md: '20px' }}
              lineHeight="27px"
              letterSpacing="0%"
              color="#FFFFFF"
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
