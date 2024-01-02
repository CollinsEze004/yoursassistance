import React from "react";
import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import FlogoB from "../Assets/Svg/FlogoB.svg";
import contactUs from "../Assets/Svg/contactUs.svg";
import email from "../Assets/Svg/email.svg";
import address from "../Assets/Svg/address.svg";
import facebook from "../Assets/Svg/facebook.svg";
import twitter from "../Assets/Svg/twitter.svg";
import instagram from "../Assets/Svg/instagram.svg";
import snapchat from "../Assets/Svg/snapchat.svg";
import tiktok from "../Assets/Svg/tiktok.svg";
import linkedin from "../Assets/Svg/linkedin.svg";
const Footer = () => {
  return (
    <Box
      paddingX="5%"
      borderTop="2px solid #0298DA"
      marginY="5%"
      color="#393637"
    >
      <Flex
        marginTop={{ base: "0", md: "3%" }}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Box flex="1" marginTop={{ base: "10%", md: "0" }}>
          <Image width={{ base: "60%", md: "80%" }} src={FlogoB} />
          <Image width="40%" marginTop="10%" src={contactUs} />
          <Button
            borderRadius="10px"
            marginRight="1%"
            padding={{ base: "8% 10%", md: "6% 12%" }}
            backgroundColor="#0298DA"
            color="white"
            marginTop="-26%"
            colorScheme="red"
            transition="1s ease-in"
          >
            Contact us
          </Button>
          <Box>
            <Text fontWeight="600" color="#0298DA">
              {" "}
              <span style={{ fontWeight: "700" }}>ABN :</span> 50320544681
            </Text>

            <Flex marginTop="3%" alignItems="center">
              <Image width={{ base: "7%", md: "5%" }} src={email} />
              <Text marginLeft="2%" fontSize="14px">
                info@yoursassistance.com
              </Text>
            </Flex>
            <Flex marginLeft="-0.5%" marginTop="3%" alignItems="center">
              <Image width={{ base: "8%", md: "5%" }} src={address} />
              <Text marginLeft="1%" fontSize="14px">
                32/37 Witheren Circuit, Pacific Pines, QLD 4211
              </Text>
            </Flex>

            <Flex marginTop="3%" alignItems="center">
              <Image
                width={{ base: "8%", md: "6.5%" }}
                marginRight="2%"
                src={facebook}
              />
              <Image
                width={{ base: "7%", md: "5%" }}
                marginX="2%"
                src={instagram}
              />
              <Image
                width={{ base: "7%", md: "5%" }}
                marginX="2%"
                src={twitter}
              />
              <Image
                width={{ base: "7%", md: "5%" }}
                marginX="2%"
                src={snapchat}
              />
              <Image
                width={{ base: "7%", md: "5%" }}
                marginX="2%"
                src={tiktok}
              />
              <Image width={{ base: "7%", md: "5%" }} src={linkedin} />
            </Flex>
          </Box>
        </Box>

        <Box flex="1">
          <Flex
            justifyContent={{ base: "flex-start", md: "center" }}
            marginTop={{ base: "10%", md: "2%" }}
          >
            <Box>
              <Text fontSize="20px" fontWeight="700" color="#0298DA">
                Company
              </Text>
              <Text fontSize="14px">Home</Text>
              <Text fontSize="14px">About</Text>
              <Text fontSize="14px">Privacy Policy</Text>
              <Text fontSize="14px">Terms and Conditions</Text>
            </Box>

            <Box>
              <Text fontSize="20px" fontWeight="700" color="#0298DA">
                Portfolio
              </Text>
              <Text fontSize="14px">Services</Text>
              <Text fontSize="14px">Projects</Text>
            </Box>
          </Flex>
        </Box>

        <Box
          flex="1"
          textAlign={{ base: "left", md: "right" }}
          marginTop={{ base: "10%", md: "0" }}
          marginBottom={{ base: "9%", md: "0" }}
        >
          <Text
            fontSize={{ base: "30px", md: "48px" }}
            fontWeight="bold"
            color="#0298DA"
          >
            Newsletter
          </Text>
          <Text fontSize={{ base: "18px", md: "24px" }} fontWeight="600">
            Subscribe to our Newsletter
          </Text>
          <Input
            border="1px solid #393637"
            placeholder="Enter your email"
            padding={{ base: "7% 4%", md: "6% 4%" }}
            borderRadius="10px"
          />
          <Button
            borderRadius="10px"
            padding={{ base: "8% 10%", md: "6% 10%" }}
            backgroundColor="#0298DA"
            color="white"
            marginTop="2%"
            colorScheme="red"
            transition="1s ease-in"
          >
            Subscribe
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
