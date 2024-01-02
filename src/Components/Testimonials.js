import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import img from "../Assets/Png/testimonialImg.png";
import left from "../Assets/Svg/right.svg";
import right from "../Assets/Svg/left.svg";
const Testimonials = () => {
  return (
    <Box backgroundColor="#F9F0F0" paddingTop="10%" marginY="3%">
      <Box>
        <Text
          fontSize={{ base: "26px", md: "54px" }}
          fontWeight="600"
          marginX="5%"
          color="#393637"
        >
          Testimonials
        </Text>
      </Box>
      <Flex
        marginX={{ base: "5%", md: "12%" }}
        marginY="5%"
        borderRadius="20px"
        padding="5% 7%"
        alignItems="center"
        flexDirection={{ base: "column", md: "row" }}
        boxShadow="0px 5px 10px -5px rgba(0,0,0,0.5)"
        backgroundColor="white"
      >
        <Box flex="1" marginRight="3%">
          <Image width={{base: "30%"}} src={img} />
        </Box>
        <Box flex="1.5">
          <Text
            fontSize={{ base: "12px", md: "16px" }}
            marginTop={{ base: "5%", md: "0" }}
            fontWeight="400"
          >
            Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque. Korem ipsum dolor sit amet,
            consectetur.
          </Text>
          <Text fontWeight="600" fontSize="14px">
            Collins Eze
          </Text>
          <Text fontWeight="600" fontSize="14px">
            CEO Trackpay
          </Text>
        </Box>
      </Flex>

      <Flex
        marginTop={{ base: "10%", md: "1%" }}
        paddingBottom="5%"
        justifyContent="center"
      >
        <Image width={{base: "10%", md: "3%"}} src={left} />
        <Image width={{base: "10%", md: "3%"}} src={right} />
      </Flex>
    </Box>
  );
};

export default Testimonials;
