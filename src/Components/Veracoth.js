import { Box, Flex, Text, Image } from "@chakra-ui/react";
import React from "react";
import Carousel from "./VeracothCarousel";
import brandPattern from "../Assets/Veracoth/brandPattern.jpg";
import typography from "../Assets/Veracoth/typography.jpg"
import CarouselTwo from "./VeracothCarouselTwo";

const Veracoth = () => {
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
            backgroundColor="#204B44"
          >
            #204B44
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
                backgroundColor="#00CF81"
                marginRight="2%"
              >
                #00CF81
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
                backgroundColor="#84D264"
              >
                #84D264
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
                backgroundColor="#EAFFF8"
                marginRight="2%"
                border="1px solid gray"
              >
                #EAFFF8
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
                  backgroundColor="#FFC700"
                  marginRight="2%"
                  border="1px solid lightGray"
                >
                  #FFC700
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

export default Veracoth;
