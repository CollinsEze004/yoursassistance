import { Box, Flex, Text, Image } from "@chakra-ui/react";
import React from "react";
import Carousel from "./DreaditCarousel";
import brandPattern from "../Assets/Dreadit/brandpattern.jpg";
import typography from "../Assets/Dreadit/typography.jpg";
import CarouselTwo from "./DreaditCarouselTwo";

const Dreadit = () => {
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
            backgroundColor="#E8DA43"
          >
            #E8DA43
          </Flex>
          <Flex flexDirection="column" flex="1" marginLeft="2%">
            <Flex flex="1">
              <Flex
                alignItems="center"
                justifyContent="center"
                color="white"
                fontSize="28px"
                fontWeight="600"
                marginBottom="2%"
                borderRadius="20px"
                flex="1"
                backgroundColor="#DCAC40"
                marginRight="2%"
              >
                #DCAC40
              </Flex>
              <Flex
                alignItems="center"
                justifyContent="center"
                color="white"
                fontSize="28px"
                fontWeight="600"
                marginBottom="2%"
                borderRadius="20px"
                flex="1"
                backgroundColor="#A9571F"
              >
                #A9571F
              </Flex>
            </Flex>

            <Flex flex="1">
              <Flex
                alignItems="center"
                justifyContent="center"
                fontSize="28px"
                fontWeight="600"
                marginBottom="2%"
                borderRadius="20px"
                flex="1"
                backgroundColor="#FEFEFE"
                marginRight="2%"
                border="1px solid gray"
              >
                #FEFEFE
              </Flex>
              <Flex flexDirection="column" flex="1">
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  fontSize="28px"
                  fontWeight="600"
                  marginBottom="2%"
                  borderRadius="20px"
                  flex="1"
                  backgroundColor="#000000"
                  marginRight="2%"
                  border="1px solid lightGray"
                >
                  #000000
                </Flex>
              </Flex>
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

export default Dreadit;
