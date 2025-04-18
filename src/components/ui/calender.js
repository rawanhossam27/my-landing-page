// calendarItems.js
import { Flex, Icon, Text } from '@chakra-ui/react';
import { CiCalendar } from "react-icons/ci";

const CalendarItems = () => {
  const handleCalendarClick = () => {
    alert('Calendar icon clicked');
    // You can replace this with actual navigation or actions
  };

  return (
    <Flex alignItems="center" cursor="pointer" onClick={handleCalendarClick}>
      <Icon as={CiCalendar} boxSize={`${26}px`} color="#D2AC71" mr={2} />
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
        19 March 2025 - 27 Mar..
      </Text>
    </Flex>
  );
};

export default CalendarItems;