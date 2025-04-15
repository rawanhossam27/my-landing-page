import { Box, Text, VStack, Spacer } from '@chakra-ui/react';  // Chakra UI components

export default function Home() {
  return (
    <Box
      minHeight="100vh"
      bg="#121212"
      p={4}
      display="flex"
      flexDirection="column"
    >
      {/* Header section */}
      <Box as="header" textAlign="center" mb={8}>
        {/* You can add a logo or navigation here if necessary */}
      </Box>

      {/* Main content section (takes up remaining vertical space) */}
      <VStack spacing={6} align="center" flexGrow={1}>
        {/* Main content removed */}
      </VStack>

      {/* Footer section (aligned to the bottom right) */}
      <Box
        as="footer"
        textAlign="right" // Align text to the right
        mt={12}
        color="gray.500"
        alignSelf="flex-end" // Align the footer to the end (bottom) of the flex container
      >
        <Text fontSize="sm" color={'white'}>
          Copyright Gates of Egypt © 2024 All rights reserved
        </Text>
      </Box>
    </Box>
  );
}