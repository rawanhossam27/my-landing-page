import { Box, Icon } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const SearchCircle = () => {
  return (
    <Box
      width="40px"
      height="40px"
      borderRadius="20px"
      backgroundColor="#444444"
      opacity="0.25"
      position="absolute"
      top="30px"
      left="300px"
      zIndex={2}
      display="flex"
      alignItems="center"
      justifyContent="center"
      cursor="pointer"
    >
      <Icon as={FaSearch} color="#D2AC71" boxSize="16px" />
    </Box>
  );
};

export default SearchCircle;