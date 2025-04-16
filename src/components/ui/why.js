// components/ui/why.js
import React from 'react';
import { Box, Heading, Text, chakra, Flex, Icon } from '@chakra-ui/react';
import { LuMousePointerClick } from 'react-icons/lu';
import { TbBadgeVr } from 'react-icons/tb'; // Import the VR badge icon
import { TbPigMoney } from 'react-icons/tb'; // Import the pig money icon

const Why = () => {
  return (
    <Box paddingX={{ base: 4, md: 8, lg: 16 }} marginTop={16} marginBottom={16}>
      <Heading
        width="auto"
        fontFamily="Montserrat"
        fontSize="40px"
        lineHeight="100%"
        letterSpacing="0%"
        color="#F6EEE5"
        mb={8}
      >
        <chakra.span fontWeight={800}>Why choose </chakra.span>
        <chakra.span fontWeight={700} color="#D2AC71">
          Egy
        </chakra.span>
        <chakra.span fontWeight={500}>Book?</chakra.span>
      </Heading>

      <Flex direction={{ base: 'column', md: 'row' }} justifyContent="space-around" alignItems="flex-start" gap={{ base: 8, md: 16 }}>
        {/* Seamless & Smart Booking */}
        <Flex flexDirection="column" alignItems="flex-start" width="323px" height="183px">
          <Icon as={LuMousePointerClick} color="#346D52" boxSize={10} mb={2} /> {/* Adjusted boxSize */}
          <Text fontWeight="700" fontSize="24px" color="#D2AC71">
            Seamless{' '}
            <chakra.span fontWeight={500} color="#346D52">
              &amp;{' '}
            </chakra.span>
            <chakra.span fontWeight={700} color="#346D52">
              Smart
            </chakra.span>{' '}
            <chakra.span color="#F6EEE5">Booking</chakra.span>
          </Text>
          <Text
            fontFamily="Montserrat"
            fontWeight={500}
            fontSize="20px"
            lineHeight="100%"
            letterSpacing="0%"
            color="#F6EEE5"
          >
            Quick, user-friendly platform that simplifies the reservation process
          </Text>
        </Flex>

        {/* Immersive VR Previews */}
        <Flex flexDirection="column" alignItems="flex-start" width="323px" height="183px">
          <Icon as={TbBadgeVr} color="#346D52" boxSize={12} mb={2} /> {/* Adjusted boxSize */}
          <Text fontWeight="700" fontSize="24px" color="#D2AC71">
            <chakra.span fontWeight={700} color="#346D52">
              Immersive{' '}
            </chakra.span>
            <chakra.span color="#F6EEE5">VR Previews</chakra.span>
          </Text>
          <Text
            fontFamily="Montserrat"
            fontWeight={500}
            fontSize="20px"
            lineHeight="100%"
            letterSpacing="0%"
            color="#F6EEE5"
          >
            Explore hotels and rooms in 360° before you book—giving you total confidence.
          </Text>
        </Flex>

        {/* Exclusive Best-Price Deals */}
        <Flex flexDirection="column" alignItems="flex-start" width="323px" height="183px">
          <Icon as={TbPigMoney} color="#346D52" boxSize={14} mb={2} /> {/* Adjusted boxSize */}
          <Text fontWeight="700" fontSize="24px" color="#D2AC71">
            Exclusive{' '}
            <chakra.span fontWeight={700} color="#346D52">
              Best-Price
            </chakra.span>{' '}
            <chakra.span color="#F6EEE5">Deals</chakra.span>
          </Text>
          <Text
            fontFamily="Montserrat"
            fontWeight={500}
            fontSize="20px"
            lineHeight="100%"
            letterSpacing="0%"
            color="#F6EEE5"
          >
            Save more with special offers and real-time price comparisons.
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Why;