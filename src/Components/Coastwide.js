import { Box, Flex, Text, Image } from "@chakra-ui/react";
import React from "react";
import Carousel from "./CoastwideCarousel";
import brandPattern from "../Assets/Coastwide/visuals1.jpg";
import typography from "../Assets/Coastwide/typography.jpg";
import CarouselTwo from "./CoastwideCarouselTwo";

const Coastwide = () => {
  return (
    <Box>
      <Carousel />

      <Box marginTop="5%">
        <Text fontSize="20px" fontWeight="600" marginBottom="2%">
          Color Palette
        </Text>
        <Flex height="743px">
          <Flex
            alignItems="center"
            justifyContent="center"
            fontSize="28px"
            fontWeight="600"
            marginBottom="2%"
            borderRadius="20px"
            color="white"
            flex="1"
            backgroundColor="#F37400"
          >
            #F37400
          </Flex>
          <Flex flexDirection="column" flex="1" marginLeft="2%">
            <Flex
              alignItems="center"
              justifyContent="center"
              fontSize="28px"
              fontWeight="600"
              marginBottom="2%"
              borderRadius="20px"
              color="white"
              flex="1"
              backgroundColor="#FFAD00"
            >
              #FFAD00
            </Flex>
            <Flex
              alignItems="center"
              justifyContent="center"
              fontSize="28px"
              fontWeight="600"
              marginBottom="2%"
              border="1px solid #0298DA"
              borderRadius="20px"
              color="white"
              flex="1"
              backgroundColor="#727376"
            >
              #727376
            </Flex>
          </Flex>
        </Flex>
      </Box>

      <Box marginTop="5%">
        <Text fontSize="20px" fontWeight="600" marginBottom="2%">
          Brand Patterns
        </Text>
        <Flex justifyContent="center">
          <Box>
            <Image borderRadius="20px" height="832px" src={brandPattern} />
          </Box>
        </Flex>
      </Box>

      <Box marginTop="5%">
        <Text fontSize="20px" fontWeight="600" marginBottom="2%">
          Typography
        </Text>
        <Flex justifyContent="center">
          <Box>
            <Image
              border="1px solid #0298DA"
              borderRadius="20px"
              height="832px"
              src={typography}
            />
          </Box>
        </Flex>
      </Box>

      <CarouselTwo />
    </Box>
  );
};

export default Coastwide;
