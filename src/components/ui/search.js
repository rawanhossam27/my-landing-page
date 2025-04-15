import { Box, Icon } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const SearchCircle = () => {
  return (
    <Box
      width="40px"
      height="40px"
      borderRadius="20px"
      backgroundColor="#444444"
      zIndex={2}
      display="flex"
      alignItems="center"
      justifyContent="center"
      cursor="pointer"
      ml={4} // Add some left margin for spacing
    >
      <Icon as={FaSearch} color="#D2AC71" boxSize="16px" />
    </Box>
  );
};

export default SearchCircle;