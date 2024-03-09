import { Box, Flex, Text, Image } from "@chakra-ui/react";
import React from "react";
import Carousel from "./DreaditCarousel";
import brandPattern from "../Assets/Softlink/brandpattern.png";
import typography from "../Assets/Dreadit/typography.jpg";
import CarouselTwo from "./SoftlinkCarouselTwo";

const Softlink = () => {
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
            backgroundColor="#031F47"
          >
            #031F47
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
                backgroundColor="#1060D9"
                marginRight="2%"
              >
                #1060D9
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
                backgroundColor="#FFC000"
              >
                #FFC000
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
                backgroundColor="#42C168"
                marginRight="2%"
                border="1px solid gray"
              >
                #42C168
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
                  backgroundColor="#465B7A"
                  marginRight="2%"
                  border="1px solid lightGray"
                >
                  #465B7A
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

export default Softlink;
