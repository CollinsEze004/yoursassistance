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
      <Flex marginTop="3%" flexDirection={{ base: "column", md: "row" }}>
        <Box flex="1" marginTop={{ base: "10%", md: "0" }}>
          <Image width="80%" src={FlogoB} />
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
              <Image width={{ base: "10%" }} src={email} />
              <Text fontSize="14px">info@yoursassistance.com</Text>
            </Flex>
            <Flex marginLeft="-0.5%" marginTop="3%" alignItems="center">
              <Image src={address} />
              <Text>32/37 Witheren Circuit, Pacific Pines, QLD 4211</Text>
            </Flex>

            <Flex marginTop="3%" alignItems="center">
              <Image
                width={{ base: "10%", md: "6.5%" }}
                marginRight="2%"
                src={facebook}
              />
              <Image marginX="2%" src={instagram} />
              <Image marginX="2%" src={twitter} />
              <Image marginX="2%" src={snapchat} />
              <Image marginX="2%" src={tiktok} />
              <Image src={linkedin} />
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
              <Text>Home</Text>
              <Text>About</Text>
              <Text>Privacy Policy</Text>
              <Text>Terms and Conditions</Text>
            </Box>

            <Box>
              <Text fontSize="20px" fontWeight="700" color="#0298DA">
                Portfolio
              </Text>
              <Text>Services</Text>
              <Text>Projects</Text>
            </Box>
          </Flex>
        </Box>

        <Box
          flex="1"
          textAlign={{ base: "left", md: "right" }}
          marginTop={{ base: "10%", md: "0" }}
        >
          <Text
            fontSize={{ base: "32px", md: "48px" }}
            fontWeight="bold"
            color="#0298DA"
          >
            Newsletter
          </Text>
          <Text fontSize="24px" fontWeight="600">
            Subscribe to our Newsletter
          </Text>
          <Input
            border="1px solid #393637"
            placeholder="Enter your email"
            padding="6% 4%"
            borderRadius="10px"
          />
          <Button
            borderRadius="10px"
            padding="6% 10%"
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
