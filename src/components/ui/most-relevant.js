// components/ui/most-relevant.js
import React from 'react';
import { Box, Text, Image, Flex, Heading } from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';
import { IoHeartOutline } from "react-icons/io5";
import MoveRight from './move-right';
import MoveLeft from './move-left';

const hotelData = [
  {
    name: 'Kempinski Hotel Soma Bay',
    image: '/somaBay.png',
    rating: 4.7,
    reviews: '1,274',
    price: '$214',
    priceUnit: 'per person',
  },
  {
    name: 'JW Marriott Hotel Cairo',
    image: '/marriot.png',
    rating: 4.6,
    reviews: '2,274',
    price: '$194',
    priceUnit: 'per person',
  },
  {
    name: 'Kempinski Hotel Soma Bay',
    image: '/somaBay.png',
    rating: 4.8,
    reviews: '1,532',
    price: '$228',
    priceUnit: 'per person',
  },
  {
    name: 'JW Marriott Hotel Cairo',
    image: '/marriot.png',
    rating: 4.5,
    reviews: '1,850',
    price: '$205',
    priceUnit: 'per person',
  },
  // Add more hotel data as needed
];

const MostRelevant = () => {
  const scrollContainerRef = React.useRef(null);

  const scrollLeft = () => {
    console.log('scrollLeft clicked');
    console.log('scrollContainerRef.current:', scrollContainerRef.current);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 300;
    }
  };

  const scrollRight = () => {
    console.log('scrollRight clicked');
    console.log('scrollContainerRef.current:', scrollContainerRef.current);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 300;
    }
  };

  return (
    <Box
      width="100%"
      paddingX={{ base: 4, md: 8, lg: 16 }}
      marginTop={8}
      marginBottom={8}
      position="relative"
    >
      <Heading
        width="395px"
        height="49px"
        fontFamily="Montserrat"
        fontWeight={800}
        fontSize="40px"
        lineHeight="100%"
        letterSpacing="0%"
        color="#FFFFFF"
        mb={4}
      >
        The Most Relevant
      </Heading>

      <Flex
        overflowX="auto"
        gap={4}
        py={4}
        ref={scrollContainerRef}
        className="[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {hotelData.map((hotel, index) => (
          <Box
            key={index}
            width="395px"
            height="auto"
            bg="white"
            borderRadius="42px"
            boxShadow="md"
            flexShrink={0}
            position="relative"
          >
            {/* White Rectangle with Text */}
            <Box
              position="absolute"
              top="16px"
              left="24px"
              width={hotel.name.includes('Soma Bay') ? '117px' : '77px'}
              height="34px"
              bg="#FFFFFF"
              borderRadius="1000px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              px="10px"
            >
              <Text
                fontFamily="Montserrat"
                fontWeight={500}
                fontSize="15px"
                lineHeight="100%"
                letterSpacing="0%"
                color="#346D52"
              >
                {hotel.name.includes('Soma Bay') ? 'Soma Bay' : hotel.name.includes('Cairo') ? 'Cairo' : ''}
              </Text>
            </Box>

            {/* Like Circle with New Heart Icon */}
            <Box
              position="absolute"
              top={`calc(16px + (34px - 45px) / 2)`}
              right="24px"
              width="45px"
              height="45px"
              bg="#F6EEE5"
              borderRadius="100px"
              border="1px solid #D2AC71"
              display="flex"
              alignItems="center"
              justifyContent="center"
              cursor="pointer"
            >
              <IoHeartOutline color="#11212" size={25} />
            </Box>

            <Image
              src={hotel.image}
              alt={hotel.name}
              width="100%"
              height="240px"
              objectFit="cover"
              borderTopRadius="42px"
            />
            <Box padding={4}>
              <Flex alignItems="center" justifyContent="space-between" mb={1}>
                <Text
                  fontWeight={600}
                  fontSize="18px"
                  lineHeight="100%"
                  letterSpacing="0%"
                  color="#121212"
                  width="auto"
                  height="22px"
                >
                  {hotel.name}
                </Text>
                <Flex fontSize="sm" color="gray.500" alignItems="center">
                  <Box mr="4px" display="flex" alignItems="center">
                    <FaStar color="#D2AC71" size="18" />
                  </Box>
                  <Text
                    fontFamily="Montserrat"
                    fontWeight={500}
                    fontSize="18px"
                    lineHeight="1.1"
                    letterSpacing="0%"
                    width="auto"
                    height="22px"
                    color="#121212"
                    ml={1}
                  >
                    {hotel.rating}
                  </Text>
                  <Text
                    fontFamily="Montserrat"
                    fontWeight={500}
                    fontSize="18px"
                    lineHeight="1.1"
                    letterSpacing="0%"
                    width="auto"
                    height="22px"
                    ml={1}
                  >
                    ({hotel.reviews})
                  </Text>
                </Flex>
              </Flex>
              <Text fontSize="md">
                From{' '}
                <Text
                  as="span"
                  fontWeight={500}
                  fontSize="16px"
                  lineHeight="100%"
                  letterSpacing="0%"
                  color="#121212"
                  width="auto"
                  height="20px"
                >
                  {hotel.price} {hotel.priceUnit}
                </Text>
              </Text>
            </Box>
          </Box>
        ))}
      </Flex>

      <MoveLeft onClick={scrollLeft} />
      <MoveRight onClick={scrollRight} />
    </Box>
  );
};

export default MostRelevant;