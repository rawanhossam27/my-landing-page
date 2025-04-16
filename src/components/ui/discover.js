// components/ui/discover.js
import React from 'react';
import { Box, Heading, Flex, Image, Text } from '@chakra-ui/react';
import MoveRight from './move-right';
import MoveLeft from './move-left';

const discoverPlacesData = [
  { label: 'Red Sea', imageUrl: '/redSea.png' },
  { label: 'Soma Bay', imageUrl: '/somaBay2.png' },
  { label: 'Giza', imageUrl: '/giza.png' },
  { label: 'Nile', imageUrl: '/nile.png' },
  { label: 'Nabq Bay', imageUrl: '/nabqBay.png' },
  { label: 'Other', imageUrl: '/other.png' }, // Displaying the whole "Other" text
  // Add more image data as needed
];

const Discover = () => {
  const scrollContainerRef = React.useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 250; // Adjust scroll amount as needed
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 250; // Adjust scroll amount as needed
    }
  };

  return (
    <Box paddingX={{ base: 4, md: 8, lg: 16 }} marginTop={8} marginBottom={8} position="relative">
      <Heading
        width="auto" // Keeping in mind the header width
        height="49px"
        fontFamily="Montserrat"
        fontWeight={800}
        fontSize="40px"
        lineHeight="100%"
        letterSpacing="0%"
        color="#F6EEE5"
        mb={4}
      >
        Discover New Places
      </Heading>

      <Flex
        width="100%" // Make the Flex container take full available width
        height="auto" // Adjust height based on content
        overflowX="auto"
        gap={4}
        py={4}
        ref={scrollContainerRef}
        className="[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {discoverPlacesData.map((place, index) => (
          <Box
            key={index}
            width="auto" // Let the width be determined by the image aspect ratio
            height="auto" // Let the height be determined by the image aspect ratio
            borderRadius="24px"
            overflow="hidden"
            flexShrink={0}
            position="relative"
          >
            <Image
              src={place.imageUrl}
              alt={place.label}
              height="300px" // Set a consistent height for the images
              objectFit="contain" // Maintain aspect ratio, may add empty space
              borderRadius="24px" // Apply border radius directly to the image
            />
            <Box
              position="absolute"
              bottom="8px"
              left="12px"
              color="white"
              paddingX={2}
              paddingY={1}
              borderRadius="4px"
            >
              <Text
                fontFamily="Montserrat"
                fontWeight={600}
                fontSize="16px" // Adjusted font size to fit better
                lineHeight="1"
                letterSpacing="0%"
                whiteSpace="nowrap" // Prevent text from wrapping
                color="white"
                textShadow="0px 2px 2px rgba(0, 0, 0, 0.5)" // Added the drop shadow
              >
                {place.label}
              </Text>
            </Box>
          </Box>
        ))}
      </Flex>

      <MoveLeft onClick={scrollLeft} />
      <MoveRight onClick={scrollRight} />
    </Box>
  );
};

export default Discover;