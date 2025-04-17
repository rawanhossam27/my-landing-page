// components/ui/trending.js
import React from 'react';
import { Box, Heading, Flex, Text, Button } from '@chakra-ui/react';
import Image from 'next/image';
import MoveRight from './move-right';
import MoveLeft from './move-left';

const trendingDestinationsData = [
  {
    label: 'Cairo',
    imageUrl: '/cairo.png',
    description: 'Unveil secrets of ancient wonders.',
    gradient: 'linear-gradient(to bottom, rgba(252, 142, 80, 0.7) 0%, rgba(252, 142, 80, 0.3) 60%, transparent 100%)',
  },
  {
    label: 'Hurghada',
    imageUrl: '/hurghada.png',
    description: 'Sunshine, beaches and vibrant reefs.',
    gradient: 'linear-gradient(to bottom, rgba(100, 151, 196, 0.7) 0%, rgba(100, 151, 196, 0.3) 60%, transparent 100%)',
  },
  {
    label: 'Sharm El Sheikh',
    imageUrl: '/sharm.png',
    description: 'Dive into blue holes and underwater gardens.',
    gradient: 'linear-gradient(to bottom, rgba(158, 42, 43, 0.7) 0%, rgba(158, 42, 43, 0.3) 60%, transparent 100%)',
  },
  {
    label: 'Luxor & Aswan',
    imageUrl: '/luxor.png',
    description: 'Journey through timeless historic treasures.',
    gradient: 'linear-gradient(to bottom, rgba(242, 158, 34, 0.7) 0%, rgba(242, 158, 34, 0.3) 60%, transparent 100%)',
  },
];

const Trending = () => {
  const scrollContainerRef = React.useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 470;
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 470;
    }
  };

  return (
    <Box paddingX={{ base: 4, md: 8, lg: 16 }} marginTop={16} marginBottom={16} position="relative">
      <Heading
        width="476px"
        height="49px"
        fontFamily="Montserrat"
        fontWeight={800}
        fontSize="40px"
        lineHeight="100%"
        letterSpacing="0%"
        color="#F6EEE5"
        mb={4}
      >
        Trending Destinations
      </Heading>

      <Flex
        direction="row"
        gap={4}
        overflowX="auto"
        py={4}
        ref={scrollContainerRef}
        className="[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {trendingDestinationsData.map((destination, index) => (
          <Box
            key={index}
            width="450px"
            height="360px"
            borderRadius="24px"
            position="relative"
            overflow="hidden"
            flexShrink={0}
          >
            <Image
              src={destination.imageUrl}
              alt={destination.label}
              fill
              style={{ objectFit: 'cover' }}
            />
            <Box
              position="absolute"
              top="0"
              left="0"
              width="100%"
              height="100%"
              bg={destination.gradient}
              borderRadius="inherit"
            />
            <Text
              position="absolute"
              top="16px"
              left="16px"
              fontFamily="Montserrat"
              fontWeight={600}
              fontSize="48px"
              color="#FFFFFF"
              zIndex={1}
            >
              {destination.label}
            </Text>
            <Text
              position="absolute"
              top="calc(16px + 48px + 8px)"
              left="16px"
              fontFamily="Montserrat"
              fontWeight={600}
              fontSize="26px"
              lineHeight="32px"
              color="#FFFFFF"
              zIndex={1}
            >
              {destination.description}
            </Text>
            <Button
              position="absolute"
              bottom="16px"
              left="16px"
              bg="white"
              color="#121212"
              borderRadius="full"
              fontWeight={600}
              width="200px"
              height="45px"
              fontSize="20px"
              lineHeight="20px"
              _hover={{ bg: 'gray.200' }} // Changed hover background to a lighter shade of grey
              zIndex={1}
            >
              See Hotels
            </Button>
          </Box>
        ))}
      </Flex>

      <MoveLeft onClick={scrollLeft} />
      <MoveRight onClick={scrollRight} />
    </Box>
  );
};

export default Trending;