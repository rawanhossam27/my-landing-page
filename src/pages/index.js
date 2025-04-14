import { Box, Text, VStack } from '@chakra-ui/react';  // Chakra UI components

export default function Home() {
  return (
    <Box minHeight="100vh" bg="gray.50" p={4}>
      {/* Header section (Add logo and navigation here if needed) */}
      <Box as="header" textAlign="center" mb={8}>
        {/* You can add a logo or navigation here if necessary */}
      </Box>

      {/* Main content section */}
      <VStack spacing={6} align="center">
        {/* Main content removed */}
      </VStack>

      {/* Footer section */}
      <Box as="footer" textAlign="center" mt={12} color="gray.500">
        <Text fontSize="sm" color={'white'}>
        Copyright Gates of Egypt © 2024 All rights reserved
        </Text>
      </Box>
    </Box>
  );
}
