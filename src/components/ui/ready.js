import React from 'react';
import { Box, Image, Text, VStack, Flex } from '@chakra-ui/react';

const Ready = () => {
  return (
    <Flex
      width="1140px"
      height="466px"
      position="absolute"
      top="2405px"
      left="150px"
      borderRadius="24px"
      overflow="hidden" // Clip the content to the border radius
      zIndex={1}
    >
      {/* Left Section (Text and Button) */}
      <Box
        width="591px" // Adjust width to accommodate text and button
        height="100%"
        bg="#BFDBC9"
        paddingLeft="40px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <VStack align="flex-start" spacing={2}>
          <Text
            fontFamily="Montserrat"
            fontWeight="700"
            fontSize="48px"
            lineHeight="100%"
            letterSpacing="0%"
            color="#0F1F18"
            width="512px"
          >
            Ready to Book Your Next Adventure?
          </Text>
          <Text
            fontFamily="Montserrat"
            fontWeight="400"
            fontSize="24px"
            lineHeight="100%"
            letterSpacing="0%"
            color="#0F1F18"
            width="508px"
          >
            Get exclusive deals and immersive previews with our smart booking
            platform.
          </Text>
        </VStack>

        {/* Button */}
        <Box mt={8}> {/* Add some margin top to separate from text */}
          <Box
            width="374px" // Adjusted width based on the image
            height="45px"
            bg="#458465"
            borderRadius="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text
              fontFamily="Montserrat"
              fontWeight="600"
              fontSize="20px"
              lineHeight="20px"
              letterSpacing="0%"
              color="#F1F8F4"
            >
              Book now
            </Text>
          </Box>
        </Box>
      </Box>

      {/* Right Section (Image) */}
      <Image
        src="/ready.png"
        alt="Ready Visual"
        width="549px"
        height="100%"
        objectFit="cover"
      />
    </Flex>
  );
};

export default Ready;