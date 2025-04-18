// peopleItems.js
import { Flex, Icon, Text } from '@chakra-ui/react';
import { LuUsers } from "react-icons/lu";

const PeopleItems = () => {
  const handlePeopleClick = () => {
    alert('People icon clicked');
    // You can replace this with actual navigation or actions
  };

  return (
    <Flex alignItems="center" cursor="pointer" onClick={handlePeopleClick}>
      <Icon as={LuUsers} boxSize={`${26}px`} color="#D2AC71" mr={2} />
      <Text
        width="auto"
        height={`${20}px`}
        fontFamily="Montserrat"
        fontWeight={600}
        fontSize="16px"
        lineHeight="100%"
        letterSpacing="0%"
        color="#FFFFFF"
        textAlign="center"
      >
        2 Adults, 1 Child, 1 Infant
      </Text>
    </Flex>
  );
};

export default PeopleItems;