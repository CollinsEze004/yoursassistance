import { Box, Flex, Text, Image } from "@chakra-ui/react";
import React from "react";
import Carousel from "./YoursassistanceCarousel";
import brandPattern from "../Assets/Yoursassistance/brandPattern.jpg";
import typography from "../Assets/Yoursassistance/typographyImg.jpg";
import CarouselTwo from "./YoursassistanceCarouselTwo";

const Yoursassistance = () => {
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
            color="white"
            fontSize="28px"
            fontWeight="600"
            borderRadius="20px"
            flex="1"
            backgroundColor="#0298DA"
          >
            #0298DA
          </Flex>
          <Flex flexDirection="column" flex="1" marginLeft="2%">
            <Flex
              alignItems="center"
              justifyContent="center"
              color="white"
              fontSize="28px"
              fontWeight="600"
              marginBottom="2%"
              borderRadius="20px"
              flex="1"
              backgroundColor="#ED3237"
            >
              #ED3237
            </Flex>
            <Flex
              alignItems="center"
              justifyContent="center"
              fontSize="28px"
              fontWeight="600"
              border="1px solid #0298DA"
              borderRadius="20px"
              flex="1"
              backgroundColor="#FAFAFA"
            >
              #FAFAFA
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

export default Yoursassistance;
