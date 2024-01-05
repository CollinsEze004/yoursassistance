import { Box, Flex, Text, Image } from "@chakra-ui/react";
import React from "react";
import Carousel from "./SeedtimeCarousel";
import brandPattern from "../Assets/Seedtime/businessCard.jpg";
import typography from "../Assets/Seedtime/Typography.jpg";
import CarouselTwo from "./SeedtimeCarouselTwo";

const Seedtime = () => {
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
            backgroundColor="#002D3A"
          >
            #002D3A
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
                backgroundColor="#018039"
                marginRight="2%"
              >
                #018039
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
                backgroundColor="#82C75C"
              >
                #82C75C
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
                backgroundColor="#F0FFD0"
                marginRight="2%"
                border="1px solid gray"
              >
                #F0FFD0
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
                  backgroundColor="#FFB445"
                  marginRight="2%"
                  border="1px solid lightGray"
                >
                  #FFB445
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
                  backgroundColor="#000000"
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

export default Seedtime;
