import { Box } from '@chakra-ui/react';
import { FaChevronRight } from 'react-icons/fa';

const MoveRight = ({ onClick }) => { // Receive the onClick prop
  return (
    <Box
      position="absolute"
      top="calc(50% - 20px)"
      right="16px"
      width="41.5px"
      height="40px"
      bg="#FFFFFF"
      borderRadius="50%"
      border="1px solid #E6E6E6"
      display="flex"
      alignItems="center"
      justifyContent="center"
      cursor="pointer"
      zIndex={10}
      onClick={onClick} // Attach the onClick prop to the Box
    >
      <FaChevronRight color="#D2AC71" size={20} />
    </Box>
  );
};

export default MoveRight;