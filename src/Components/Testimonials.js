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
        marginX="12%"
        marginY="5%"
        border="1px solid #0298DA"
        borderRadius="20px"
        padding="5% 7%"
        alignItems="center"
      >
        <Box flex="1">
          <Image src={img} />
        </Box>
        <Box flex="1.5">
          <Text fontWeight="600">
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

      <Flex justifyContent="center">
        <Image src={left} />
        <Image src={right} />
      </Flex>

      <Flex justifyContent="center" marginTop="5%">
        <Image src={pageCover} />
      </Flex>
    </Box>
  );
};

export default Testimonials;
