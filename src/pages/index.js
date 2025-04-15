import { Box, Text, VStack } from '@chakra-ui/react'; // Chakra UI components

export default function Home() {
  const baseBackgroundColor = '#121212';
  const iconYellow = '#D7A411';
  const yellowWithOpacity = `rgba(${parseInt(iconYellow.slice(1, 3), 16)}, ${parseInt(iconYellow.slice(3, 5), 16)}, ${parseInt(iconYellow.slice(5, 7), 16)}, 0.15)`; // Slightly transparent yellow

  return (
    <Box
      minHeight="100vh"
      bg={`linear-gradient(to bottom, ${baseBackgroundColor}, ${baseBackgroundColor} 80%, ${yellowWithOpacity} 95%)`} // Concentrated yellow at the bottom
      p={4}
      display="flex"
      flexDirection="column"
      position="relative"
    >
      {/* Header section */}
      <Box as="header" textAlign="center" mb={8}>
        {/* You can add a logo or navigation here if necessary */}
      </Box>

      {/* Main content section (takes up remaining vertical space) */}
      <VStack spacing={6} align="center" flexGrow={1}>
        {/* Add your main page content here */}
      </VStack>

      {/* Footer section (aligned to the bottom right) */}
      <Box
        as="footer"
        textAlign="right"
        mt={12}
        color="gray.500"
        alignSelf="flex-end"
      >
        <Text fontSize="sm" color={'white'}>
          Copyright Gates of Egypt © 2024 All rights reserved
        </Text>
      </Box>
    </Box>
  );
}