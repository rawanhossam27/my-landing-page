import React from 'react';
import { Box, Flex, Icon, Text, Link } from '@chakra-ui/react';
import { IoNavigate } from 'react-icons/io5';
import LocationItems from './location';
import CalendarItems from './calender';
import PeopleItems from './people';

const HeroSection = () => {
  const heroBackgroundImage = '/HeroBG.png';

  return (
    <Box
      width="100%" // This was already responsive
      height={{ base: "600px", md: "540px" }} // Make height responsive - increased base height slightly for stacking
      bgImage={`url('${heroBackgroundImage}')`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      opacity={0.8} // KEEPING the original opacity
      position="relative" // KEEPING the original position
      padding={4} // KEEPING the original padding, adjust if needed for absolute positioning
      overflow="hidden" // Added to help with absolute positioning on small screens
    >
      {/* Icon and "Egypt" Text (Top Left) */}
      <Flex
        align="center"
        position="absolute" // KEEPING original positioning method
        // Make position responsive
        top={{ base: "80px", md: "236px" }} // Adjusted top for smaller screens
        left={{ base: "20px", md: "170px" }} // Adjusted left for smaller screens
        color="white" // KEEPING original color
        zIndex={1} // Added zIndex to ensure visibility over background
      >
        <Icon as={IoNavigate}
          // Make boxSize responsive
          boxSize={{ base: "16px", md: "28.8px" }}
          mr={{ base: 1, md: 2 }} // Make margin responsive
          color="#FFFFFF" // KEEPING original color
        />
        <Text
          // Remove fixed width/height, let content size
          fontFamily="Montserrat"
          fontWeight={600}
          // Make fontSize responsive
          fontSize={{ base: "14px", md: "20px" }}
          color="#FFFFFF" // KEEPING original color
        >
          Egypt
        </Text>
      </Flex>

      {/* Main Heading Text */}
      <Box
        position="absolute" // KEEPING original positioning method
        // Make position responsive
        top={{ base: "140px", md: "290px" }} // Adjusted top for smaller screens
        left={{ base: "20px", md: "170px" }} // Adjusted left for smaller screens
        // Make width responsive, use percentage and maxWidth
        width={{ base: "90%", md: "1120px" }}
        maxWidth="1120px"
        color="#FFFFFF" // KEEPING original color
        fontFamily="Montserrat" // KEEPING original font
        fontWeight={600} // KEEPING original weight
        // Make fontSize responsive
        fontSize={{ base: "24px", md: "3xl", lg: "40px" }}
        lineHeight="100%" // KEEPING original lineHeight
        zIndex={1} // Added zIndex
      >
        Hey!<br />
        Tell us where you want to stay
      </Box>

      {/* Sub Heading Text */}
      <Text
        position="absolute" // KEEPING original positioning method
        // Make position responsive
        top={{ base: "230px", md: "379px" }} // Adjusted top for smaller screens
        left={{ base: "20px", md: "170px" }} // Adjusted left for smaller screens
        // Make width responsive, use percentage and maxWidth
        width={{ base: "90%", md: "433px" }}
        maxWidth="433px"
        fontFamily="Montserrat" // KEEPING original font
        fontWeight={500} // KEEPING original weight
        // Make fontSize responsive
        fontSize={{ base: "16px", md: "xl", lg: "24px" }}
        color="#FFFFFF" // KEEPING original color
        // Make whiteSpace responsive to allow wrapping on small screens
        whiteSpace={{ base: "normal", md: "nowrap" }}
        zIndex={1} // Added zIndex
      >
        Book 450+ Curated Egyptian Hotels
      </Text>

      {/* Oval Bar Content */}
      <Flex
        position="absolute" // KEEPING original positioning method
        // Make position responsive - centering horizontally
        top={{ base: "300px", md: "435px" }} // Adjusted top for smaller screens
        left={{ base: "50%", md: "50%" }} // Center horizontally
        transform={{ base: "translateX(-50%)", md: "translateX(-50%)" }} // Apply centering transform
        // Make width responsive, use percentage and maxWidth
        width={{ base: "95%", md: "1060px" }}
        maxWidth="1060px"
        // Make height responsive
        height={{ base: "auto", md: "71px" }} // Auto height when stacked, fixed on md+
        borderRadius="1000px" // KEEPING original borderRadius
        backgroundColor="rgba(255, 255, 255, 0.15)" // KEEPING original background
        backdropFilter="blur(10px)" // KEEPING original backdrop filter
        alignItems="center" // KEEPING original alignment
        // Make padding responsive
        padding={{ base: '4', md: '6' }} // Adjust padding for different screen sizes (px={6} = 24px)
        // Make justifyContent responsive
        justifyContent={{ base: 'center', md: 'space-around' }} // Center items when stacked, distribute space when in a row
        zIndex={1} // KEEPING original zIndex
        // Make flexDirection responsive to stack on small screens
        flexDirection={{ base: "column", md: "row" }}
        // Add gap between items when stacked vertically
        gap={{ base: '16px', md: '0' }}
      >
        <LocationItems />
        {/* Divider */}
        <Box
          // Make dimensions responsive
          width={{ base: "80%", md: "1px" }} // Horizontal line on small, vertical on md+
          height={{ base: "1px", md: "26px" }} // Horizontal height on small, vertical height on md+
          backgroundColor="rgba(0, 0, 0, 0.2)" // KEEPING original color
          // Add margin for spacing/centering in column layout
          mx={{ base: "auto", md: "0" }} // Center horizontal divider
          my={{ base: "8px", md: "0" }} // Add vertical margin in column
        />
        <CalendarItems />
        {/* Divider */}
        <Box
          // Make dimensions responsive
          width={{ base: "80%", md: "1px" }}
          height={{ base: "1px", md: "26px" }}
          backgroundColor="rgba(0, 0, 0, 0.2)"
          mx={{ base: "auto", md: "0" }}
          my={{ base: "8px", md: "0" }}
        />
        <PeopleItems />

        {/* Explore Stays Button */}
        <Link href="#" passHref>
          <Box
            // Make dimensions responsive
            width={{ base: "90%", sm: "80%", md: "204px" }} // Percentage on small, fixed on md+
            maxWidth="204px" // Ensure it doesn't exceed original max width
            height={{ base: "45px", md: "54px" }} // Adjust height slightly on small screens
            borderRadius="10000px" // KEEPING original borderRadius
            backgroundColor="#346D52" // KEEPING original background
            display="flex" // KEEPING original display
            justifyContent="center" // KEEPING original justification
            alignItems="center" // KEEPING original alignment
            _hover={{ opacity: 0.8 }} // KEEPING original hover effect
            cursor="pointer" // KEEPING original cursor
            // Add margin top when in column layout (on base screens)
            marginTop={{ base: "16px", md: "0" }}
          >
            <Text
              fontFamily="Montserrat" // KEEPING original font
              // Make fontSize responsive
              fontSize={{ base: "14px", md: "16px" }}
              color="#FFFFFF" // KEEPING original color
              textAlign="center" // KEEPING original alignment
            >
              Explore Stays
            </Text>
          </Box>
        </Link>
      </Flex>
    </Box>
  );
};

export default HeroSection;