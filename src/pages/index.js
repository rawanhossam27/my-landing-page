import { Box, VStack } from '@chakra-ui/react'; // Chakra UI components
import Footer from '../components/ui/footer'; // Import Footer component

export default function Home() {
  const baseBackgroundColor = '#121212';
  const iconYellow = '#D7A411';
  const yellowWithOpacity = `rgba(${parseInt(iconYellow.slice(1, 3), 16)}, ${parseInt(iconYellow.slice(3, 5), 16)}, ${parseInt(iconYellow.slice(5, 7), 16)}, 0.15)`; // Slightly transparent yellow

  return (
    <Box
      minHeight="100vh"
      bg={`linear-gradient(to bottom, ${baseBackgroundColor}, ${baseBackgroundColor} 80%, ${yellowWithOpacity} 95%)`} // Gradient background
      p={4}
      display="flex"
      flexDirection="column"
      position="relative"
    >
      {/* Header section */}
      <Box as="header" textAlign="center" mb={8}>
        {/* Add a logo or navigation here if necessary */}
      </Box>

      {/* Main content section (takes up remaining vertical space) */}
      <VStack spacing={6} align="center" flexGrow={1}>
        {/* Add your main page content here */}
      </VStack>

      {/* Footer appears on top of the gradient background */}
      <Footer />
    </Box>
  );
}
