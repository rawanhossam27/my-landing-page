import React from 'react';
import { Box, Image, Text, VStack, Flex, Link } from '@chakra-ui/react';

const Ready = () => {
  return (
    // Main container: Use maxW for width and responsive height/direction
    <Flex
      width="100%" // Use full width available
      maxWidth="1140px" // Keep the original max width
      // Use responsive height: auto on small screens, fixed on medium+
      height={{ base: 'auto', md: '466px' }}
      borderRadius="24px"
      overflow="hidden"
      zIndex={1}
      mx="auto" // Center the container
      marginBottom="0"
      // Stack elements vertically on small screens, row on medium and up
      flexDirection={{ base: 'column', md: 'row' }}
      // Ensure items stretch to fill width in column layout
      alignItems={{ base: 'stretch', md: 'stretch' }}
    >
      {/* Left Section (Text and Button) */}
      <Box
        // Use responsive width: full width on small, auto (or percentage) on medium+
        // md: '591px' would keep the original proportion if Flex width was also proportional,
        // but using 'auto' or '100%' within a stacked column is more common for responsiveness.
        // Let's use a percentage relative to the flex container for md+
        width={{ base: '100%', md: '50%' }} // Adjust as needed, e.g., md: '591px' or md: '50%'
        height={{ base: 'auto', md: '100%' }} // Auto height in column layout
        bg="#BFDBC9"
        // Adjust padding for different screen sizes
        padding={{ base: '20px', md: '40px' }}
        display="flex"
        flexDirection="column"
        // Adjust alignment for different layouts
        justifyContent={{ base: 'flex-start', md: 'center' }}
        alignItems={{ base: 'center', md: 'flex-start' }} // Center items in column, left in row
        textAlign={{ base: 'center', md: 'left' }} // Center text in column, left in row
      >
        <VStack
          align={{ base: 'center', md: 'flex-start' }} // Center stack items in column, left in row
          spacing={4} // Increased spacing slightly for readability on smaller screens
          width="100%" // Ensure VStack takes full width
        >
          <Text
            fontFamily="Montserrat"
            fontWeight={700}
            // Responsive font size
            fontSize={{ base: '2xl', md: '4xl', lg: '48px' }}
            lineHeight="120%" // Adjusted line height for better readability
            color="#0F1F18"
            // Remove fixed width, let text wrap
            width="100%"
            maxWidth={{ base: '400px', md: '512px' }} // Optional: Set a max width for text blocks
          >
            Ready to Book Your Next Adventure?
          </Text>
          <Text
            fontFamily="Montserrat"
            fontWeight={400}
            // Responsive font size
            fontSize={{ base: 'md', md: 'xl', lg: '24px' }}
            lineHeight="130%" // Adjusted line height
            color="#0F1F18"
            // Remove fixed width, let text wrap
            width="100%"
            maxWidth={{ base: '400px', md: '508px' }} // Optional: Set a max width for text blocks
          >
            Get exclusive deals and immersive previews with our smart booking platform.
          </Text>
        </VStack>

        {/* Button */}
        <Box mt={8} width="100%" display="flex" justifyContent={{ base: 'center', md: 'flex-start' }}>
          <Link href="#" passHref>
            <Box
              // Responsive width for the button
              width={{ base: '80%', sm: '300px', md: '374px' }}
              maxWidth="374px" // Ensure button doesn't exceed original size on large screens
              height="45px"
              bg="#458465"
              borderRadius="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
              _hover={{ opacity: 0.8 }}
            >
              <Text
                fontFamily="Montserrat"
                fontWeight="600"
                // Responsive font size for button text
                fontSize={{ base: 'md', md: 'lg', lg: '20px' }}
                lineHeight="20px"
                color="#F1F8F4"
              >
                Book now
              </Text>
            </Box>
          </Link>
        </Box>
      </Box>

      {/* Right Section (Image) */}
      <Image
        src="/ready.png"
        alt="Ready Visual"
        // Responsive width: full width on small, auto (or percentage) on medium+
        width={{ base: '100%', md: '50%' }} // Use remaining width percentage, or md: '549px'
        // Responsive height: Control height on small screens, 100% on medium+
        height={{ base: '200px', sm: '300px', md: '100%' }}
        objectFit="cover"
        // Ensure image doesn't shrink excessively
        minHeight={{ base: 'auto', md: '466px' }} // Optional: min height on md+
      />
    </Flex>
  );
};

export default Ready;