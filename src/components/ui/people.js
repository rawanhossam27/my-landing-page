// PeopleItems.js
import { Flex, Icon, Text, Box, Portal } from '@chakra-ui/react';
import { LuUsers } from 'react-icons/lu';
import React, { useState, useRef, useEffect } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa6';

const PeopleItems = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);
  const [dropdownTop, setDropdownTop] = useState(0);
  const [dropdownLeft, setDropdownLeft] = useState(0);
  const [adultCount, setAdultCount] = useState(0);
  const [childCount, setChildCount] = useState(0);
  const [roomCount, setRoomCount] = useState(1);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target)
      ) {
        closeDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setDropdownTop(rect.bottom + window.scrollY + 18); // Moved dropdown lower
      setDropdownLeft(rect.left + window.scrollX - 50);   // Moved dropdown more to the left
    } else {
      setDropdownTop(0);
      setDropdownLeft(0);
    }
  }, [isOpen]);

  const handleDecrease = (type) => {
    switch (type) {
      case 'adults':
        if (adultCount > 0) setAdultCount(adultCount - 1);
        break;
      case 'children':
        if (childCount > 0) setChildCount(childCount - 1);
        break;
      case 'rooms':
        if (roomCount > 1) setRoomCount(roomCount - 1);
        break;
      default:
        break;
    }
  };

  const handleIncrease = (type) => {
    switch (type) {
      case 'adults':
        setAdultCount(adultCount + 1);
        break;
      case 'children':
        setChildCount(childCount + 1);
        break;
      case 'rooms':
        setRoomCount(roomCount + 1);
        break;
      default:
        break;
    }
  };

  const getMinusIconColor = (type) => {
    switch (type) {
      case 'adults':
        return adultCount > 0 ? '#D2AC71' : '#888888';
      case 'children':
        return childCount > 0 ? '#D2AC71' : '#888888';
      case 'rooms':
        return roomCount > 1 ? '#D2AC71' : '#888888';
      default:
        return '#D2AC71';
    }
  };

  return (
    <Box position="relative">
      <Flex
        alignItems="center"
        cursor="pointer"
        onClick={toggleDropdown}
        ref={triggerRef}
      >
        <Icon as={LuUsers} boxSize="26px" color="#D2AC71" mr={2} />
        <Text
          width="auto"
          height="20px"
          fontFamily="Montserrat"
          fontWeight={600}
          fontSize="16px"
          lineHeight="100%"
          letterSpacing="0%"
          color="#FFFFFF"
          textAlign="center"
        >
          {adultCount} Adults, {childCount} Children, {roomCount} Rooms
        </Text>
      </Flex>

      {isOpen && (
        <Portal>
          <Box
            ref={dropdownRef}
            position="absolute"
            top={`${dropdownTop}px`}
            left={`${dropdownLeft}px`}
            bg="rgba(255, 255, 255, 0.25)"
            backdropFilter="blur(10px)"
            borderRadius="30px"
            boxShadow="0px 4px 12px rgba(0, 0, 0, 0.2)"
            zIndex={9999}
            width="316px" // Kept the original width
            height="261px" // Kept the original height
            p={4}
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            <Flex alignItems="center" mb={8} mt={6} width="100%">
              <Box flex="1" userSelect="none"> {/* Added userSelect="none" */}
                <Text
                  fontFamily="Montserrat"
                  fontWeight={600}
                  fontSize="16px"
                  lineHeight="100%"
                  letterSpacing="0%"
                  color="#FFFFFF"
                  width="auto"
                >
                  Adults
                </Text>
                <Text
                  fontFamily="Montserrat"
                  fontWeight={500}
                  fontSize="12px"
                  lineHeight="100%"
                  letterSpacing="0%"
                  color="#B7B7B7"
                  ml={0}
                >
                  Age 18 or above
                </Text>
              </Box>
              <Flex alignItems="center">
                <Flex
                  width="30px"
                  height="30px"
                  borderRadius="50%"
                  border={`2px solid ${getMinusIconColor('adults')}`}
                  alignItems="center"
                  justifyContent="center"
                  cursor="pointer"
                  onClick={() => handleDecrease('adults')}
                >
                  <Icon as={FaMinus} color={getMinusIconColor('adults')} boxSize="11.67px" />
                </Flex>
                <Text
                  fontFamily="Montserrat"
                  fontWeight={500}
                  fontSize="16px"
                  lineHeight="100%"
                  letterSpacing="0%"
                  color="#FFFFFF"
                  width="auto"
                  minWidth="10px"
                  textAlign="center"
                  ml={2}
                >
                  {adultCount}
                </Text>
                <Flex
                  width="30px"
                  height="30px"
                  borderRadius="50%"
                  border="1px solid #FFFFFF4D"
                  alignItems="center"
                  justifyContent="center"
                  ml={2}
                  cursor="pointer"
                  onClick={() => handleIncrease('adults')}
                >
                  <Icon as={FaPlus} color="#D2AC71" boxSize="11.67px" />
                </Flex>
              </Flex>
            </Flex>

            <Flex alignItems="center" justifyContent="space-between" mb={8} width="100%">
              <Box flex="1" userSelect="none"> {/* Added userSelect="none" */}
                <Text
                  fontFamily="Montserrat"
                  fontWeight={600}
                  fontSize="16px"
                  lineHeight="100%"
                  letterSpacing="0%"
                  color="#FFFFFF"
                  width="auto"
                >
                  Children
                </Text>
                <Text
                  fontFamily="Montserrat"
                  fontWeight={500}
                  fontSize="12px"
                  lineHeight="100%"
                  letterSpacing="0%"
                  color="#B7B7B7"
                  ml={0}
                >
                  Under 18
                </Text>
              </Box>
              <Flex alignItems="center">
                <Flex
                  width="30px"
                  height="30px"
                  borderRadius="50%"
                  border={`2px solid ${getMinusIconColor('children')}`}
                  alignItems="center"
                  justifyContent="center"
                  cursor="pointer"
                  onClick={() => handleDecrease('children')}
                >
                  <Icon as={FaMinus} color={getMinusIconColor('children')} boxSize="11.67px" />
                </Flex>
                <Text
                  fontFamily="Montserrat"
                  fontWeight={500}
                  fontSize="16px"
                  lineHeight="100%"
                  letterSpacing="0%"
                  color="#FFFFFF"
                  width="auto"
                  minWidth="10px"
                  textAlign="center"
                  ml={2}
                >
                  {childCount}
                </Text>
                <Flex
                  width="30px"
                  height="30px"
                  borderRadius="50%"
                  border="1px solid #FFFFFF4D"
                  alignItems="center"
                  justifyContent="center"
                  ml={2}
                  cursor="pointer"
                  onClick={() => handleIncrease('children')}
                >
                  <Icon as={FaPlus} color="#D2AC71" boxSize="11.67px" />
                </Flex>
              </Flex>
            </Flex>

            <Flex alignItems="center" justifyContent="space-between" mb={4} width="100%">
              <Box flex="1" userSelect="none"> {/* Added userSelect="none" */}
                <Text
                  fontFamily="Montserrat"
                  fontWeight={600}
                  fontSize="16px"
                  lineHeight="100%"
                  letterSpacing="0%"
                  color="#FFFFFF"
                  width="auto"
                >
                  Rooms
                </Text>
                {/* No sub-text for Rooms yet */}
              </Box>
              <Flex alignItems="center">
                <Flex
                  width="30px"
                  height="30px"
                  borderRadius="50%"
                  border={`2px solid ${getMinusIconColor('rooms')}`}
                  alignItems="center"
                  justifyContent="center"
                  cursor="pointer"
                  onClick={() => handleDecrease('rooms')}
                >
                  <Icon as={FaMinus} color={getMinusIconColor('rooms')} boxSize="11.67px" />
                </Flex>
                <Text
                  fontFamily="Montserrat"
                  fontWeight={500}
                  fontSize="16px"
                  lineHeight="100%"
                  letterSpacing="0%"
                  color="#FFFFFF"
                  width="auto"
                  minWidth="10px"
                  textAlign="center"
                  ml={2}
                >
                  {roomCount}
                </Text>
                <Flex
                  width="30px"
                  height="30px"
                  borderRadius="50%"
                  border="1px solid #FFFFFF4D"
                  alignItems="center"
                  justifyContent="center"
                  ml={2}
                  cursor="pointer"
                  onClick={() => handleIncrease('rooms')}
                >
                  <Icon as={FaPlus} color="#D2AC71" boxSize="11.67px" />
                </Flex>
              </Flex>
            </Flex>

            {/* New text at the bottom */}
            <Text
              fontFamily="Montserrat"
              fontWeight={500}
              fontSize="12px"
              lineHeight="100%"
              letterSpacing="0%"
              color="#808080"
              width="217px"
              textAlign="center"
              mt={2}
              userSelect="none"
            >
              You can search for up to 16 travelers
            </Text>
          </Box>
        </Portal>
      )}
    </Box>
  );
};

export default PeopleItems;