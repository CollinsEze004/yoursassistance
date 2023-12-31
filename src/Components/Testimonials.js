import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import img from "../Assets/Png/testimonialImg.png";
import left from "../Assets/Svg/right.svg";
import right from "../Assets/Svg/left.svg";
import pageCover from "../Assets/Svg/pageCover.svg";
const Testimonials = () => {
  return (
    <Box>
      <Flex
        marginX={{base: "5%",md:"12%"}}
        marginY="5%"
        border="1px solid #0298DA"
        borderRadius="20px"
        padding="5% 7%"
        alignItems="center"
        flexDirection={{base: 'column', md : 'row'}}
      >
        <Box flex="1" marginRight="3%">
          <Image src={img} />
        </Box>
        <Box flex="1.5">
          <Text fontSize={{base: "14px", md: "16px"}} marginTop={{base: "5%", md: "0"}} fontWeight="600">
            Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque. Korem ipsum dolor sit amet,
            consectetur adipiscing elit. Nunc vulputate libero et velit
            interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
            Curabitur tempus urna at turpis condimentum lobortis. Ut commodo
            efficitur neque.
          </Text>
          <Text fontWeight="600" fontSize="14px">
            Collins Eze
          </Text>
          <Text fontWeight="600" fontSize="14px">
            CEO Trackpay
          </Text>
        </Box>
      </Flex>

      <Flex marginTop={{base: "10%", md: "2%"}} justifyContent="center">
        <Image src={left} />
        <Image src={right} />
      </Flex>

      <Flex justifyContent="center" marginBottom={{base: "15%", md: "0"}} marginTop={{base: "10%", md: "5%"}}>
        <Image width={{base: "90%", md: "100%"}} src={pageCover} />
      </Flex>
    </Box>
  );
};

export default Testimonials;
