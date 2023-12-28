import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import service1 from "../Assets/Png/serviceMain1.png";
import service2 from "../Assets/Png/serviceMain2.png";
import service3 from "../Assets/Png/serviceMain3.png";
import service4 from "../Assets/Png/serviceMain4.png";
import service5 from "../Assets/Png/serviceMain5.png";
import service6 from "../Assets/Png/serviceMain6.png";
import service7 from "../Assets/Png/serviceMain7.png";

const ServiceFlex = () => {
  return (
    <Box marginTop="5%">
      <Flex flexDirection="column" paddingX="5%">
        <Flex alignItems="center">
          <Flex borderRadius="20px" justifyContent="flex-end">
            <Image
              boxShadow="0 4px 18px rgba(0, 0, 0, 0.3)"
              width="80%"
              borderRadius="20px"
              src={service1}
            />
          </Flex>
          <Box
            padding="1% 2%"
            fontSize="16px"
            fontWeight="600"
            color="white"
            backgroundColor="#0298DA"
            borderRadius="0 5px 5px 0"
            boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
          >
            <Text>CLick to View</Text>
          </Box>
        </Flex>

        <Flex alignItems="center" marginTop="5%" flexDirection="row-reverse">
          <Flex>
            <Image
              boxShadow="0 4px 18px rgba(0, 0, 0, 0.3)"
              width="80%"
              borderRadius="20px"
              src={service2}
            />
          </Flex>
          <Box
            padding="1% 2%"
            fontSize="16px"
            fontWeight="600"
            color="white"
            backgroundColor="#0298DA"
            borderRadius="5px 0 0 5px "
            boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
          >
            <Text>CLick to View</Text>
          </Box>
        </Flex>

        <Flex alignItems="center" marginTop="5%">
          <Flex justifyContent="flex-end">
            <Image
              boxShadow="0 4px 18px rgba(0, 0, 0, 0.3)"
              width="80%"
              borderRadius="20px"
              src={service3}
            />
          </Flex>
          <Box
            padding="1% 2%"
            fontSize="16px"
            fontWeight="600"
            color="white"
            backgroundColor="#0298DA"
            borderRadius="0 5px 5px 0"
            boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
          >
            <Text>CLick to View</Text>
          </Box>
        </Flex>

        <Flex alignItems="center" marginTop="5%" flexDirection="row-reverse">
          <Box>
            <Image
              boxShadow="0 4px 18px rgba(0, 0, 0, 0.3)"
              width="80%"
              borderRadius="20px"
              src={service4}
            />
          </Box>
          <Box
            padding="1% 2%"
            fontSize="16px"
            fontWeight="600"
            color="white"
            backgroundColor="#0298DA"
            borderRadius="5px 0 0 5px "
            boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
          >
            <Text>CLick to View</Text>
          </Box>
        </Flex>

        <Flex alignItems="center" marginTop="5%">
          <Flex justifyContent="flex-end">
            <Image
              boxShadow="0 4px 18px rgba(0, 0, 0, 0.3)"
              width="80%"
              borderRadius="20px"
              src={service5}
            />
          </Flex>
          <Box
            padding="1% 2%"
            fontSize="16px"
            fontWeight="600"
            color="white"
            backgroundColor="#0298DA"
            borderRadius="0 5px 5px 0"
            boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
          >
            <Text>CLick to View</Text>
          </Box>
        </Flex>

        <Flex alignItems="center" marginTop="5%" flexDirection="row-reverse">
          <Box>
            <Image
              boxShadow="0 4px 18px rgba(0, 0, 0, 0.3)"
              width="80%"
              borderRadius="20px"
              src={service6}
            />
          </Box>
          <Box
            padding="1% 2%"
            fontSize="16px"
            fontWeight="600"
            color="white"
            backgroundColor="#0298DA"
            borderRadius="5px 0 0 5px "
            boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
          >
            <Text>CLick to View</Text>
          </Box>
        </Flex>

        <Flex alignItems="center" marginTop="5%">
          <Flex justifyContent="flex-end">
            <Image
              boxShadow="0 4px 18px rgba(0, 0, 0, 0.3)"
              width="80%"
              borderRadius="20px"
              src={service7}
            />
          </Flex>
          <Box
            padding="1% 2%"
            fontSize="16px"
            fontWeight="600"
            color="white"
            backgroundColor="#0298DA"
            borderRadius="0 5px 5px 0"
            boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
          >
            <Text>CLick to View</Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ServiceFlex;
