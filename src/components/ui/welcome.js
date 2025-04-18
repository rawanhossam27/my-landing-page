import { Box, Flex, Icon, Text, Link } from '@chakra-ui/react';
import { IoNavigate } from 'react-icons/io5';
import LocationItems from './location';
import CalendarItems from './calender';
import PeopleItems from './people';

const HeroSection = () => {
  const heroBackgroundImage = '/HeroBG.png';

  return (
    <Box
      width="100%"
      height="540px"
      bgImage={`url('${heroBackgroundImage}')`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      opacity={0.8}
      position="relative"
      padding={4}
    >
      {/* Icon and "Egypt" Text (Top Left) */}
      <Flex
        align="center"
        position="absolute"
        top={`${236}px`}
        left={`${170}px`}
        color="white"
      >
        <Icon as={IoNavigate} boxSize={`${28.8}px`} mr={2} color="#D2AC71" />
        <Text
          width={`${61}px`}
          height={`${24}px`}
          fontFamily="Montserrat"
          fontWeight={600}
          fontSize="20px"
          lineHeight="100%"
          letterSpacing="0%"
          color="#FFFFFF"
        >
          Egypt
        </Text>
      </Flex>

      {/* Main Heading Text */}
      <Box
        position="absolute"
        top={`${273}px`}
        left={`${170}px`}
        width={`${1120}px`}
        color="#FFFFFF"
        fontFamily="Montserrat"
        fontWeight={600}
        fontSize="40px"
        lineHeight="100%"
        letterSpacing="0%"
      >
        Hey!<br />
        Tell us where you want to stay
      </Box>

      {/* Sub Heading Text */}
      <Text
        position="absolute"
        top={`${379}px`}
        left={`${170}px`}
        width={`${433}px`}
        fontFamily="Montserrat"
        fontWeight={500}
        fontSize="24px"
        lineHeight="100%"
        letterSpacing="0%"
        color="#FFFFFF"
        whiteSpace="nowrap"
      >
        Book 450+ Curated Egyptian Hotels
      </Text>

      {/* Oval Bar Content */}
      <Flex
        position="absolute"
        top={`${435}px`}
        left={`${190}px`}
        width={`${1060}px`}
        height={`${71}px`}
        borderRadius={`${1000}px`}
        backgroundColor="rgba(255, 255, 255, 0.15)"
        backdropFilter="blur(10px)"
        alignItems="center"
        paddingLeft={6}
        paddingRight={6}
        justifyContent="space-around"
        zIndex={1} // Set zIndex of the oval bar to 1 (or lower)
      >
        <LocationItems />

        {/* Vertical Line using Box */}
        <Box
          width="1px"
          height="26px"
          backgroundColor="rgba(0, 0, 0, 0.2)"
        />

        <CalendarItems />

        {/* Vertical Line using Box */}
        <Box
          width="1px"
          height="26px"
          backgroundColor="rgba(0, 0, 0, 0.2)"
        />

        <PeopleItems />

        {/* Explore Stays Button */}
        <Link href="#" passHref>
          <Box
            width={`${204}px`}
            height={`${54}px`}
            borderRadius={`${10000}px`}
            backgroundColor="#346D52"
            display="flex"
            justifyContent="center"
            alignItems="center"
            _hover={{ opacity: 0.8 }}
            cursor="pointer"
          >
            <Text
              fontFamily="Montserrat"
              fontSize="16px"
              lineHeight="100%"
              letterSpacing="0%"
              color="#FFFFFF"
              textAlign="center"
            >
              Explore Stays
            </Text>
          </Box>
        </Link>
      </Flex>
    </Box>
  );
};

export default HeroSection;