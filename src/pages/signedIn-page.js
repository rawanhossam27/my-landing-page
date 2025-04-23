import { Box, Text } from "@chakra-ui/react";
import Footer from "../components/ui/footer"; // Keep footer here

export default function SignedInPage() {
  const iconYellow = '#D7A411';
  const yellowWithOpacity = `rgba(${parseInt(iconYellow.slice(1, 3), 16)}, ${parseInt(iconYellow.slice(3, 5), 16)}, ${parseInt(iconYellow.slice(5, 7), 16)}, 0.15)`;
  const baseBackgroundColor = '#121212';

  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      bg={`linear-gradient(to bottom, ${baseBackgroundColor}, ${baseBackgroundColor} 80%, ${yellowWithOpacity} 95%)`}
    >
      <Box flexGrow={1} p={4}>
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          Welcome, Signed-In User!
        </Text>
        {/* Your signed-in page content */}
      </Box>

      <Footer />
    </Box>
  );
}
