import { Box, Button, Flex, Text, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import Header from "../Components/HeaderTwo";
import ServiceFlex from "../Components/ServiceFlex";
import pageCover from "../Assets/Svg/pageCover.svg";
import Footer from "../Components/Footer";

const Services = () => {
  const [selectedButton, setSelectedButton] = useState("Discover");

  const handleClick = (button) => {
    setSelectedButton(button);
  };

  const isButtonSelected = (button) => {
    return selectedButton === button;
  };

  return (
    <Box>
      <Box marginX="5%" color="#393637">
        <Header />
        <Flex marginTop="10%">
          <Box flex="1">
            <Text fontSize="64px" fontWeight="800" color="#0298DA">
              THE WAY WE WORK
            </Text>
          </Box>
          <Box flex="1">
            <Text>
              A digital agency that knows the internet and people in equal
              measure. End users, browsers, audiences, customers. We get them
              because we are them. And because we spend more time online than
              most, we have an eye for what works.
            </Text>
          </Box>
        </Flex>

        <Flex
          marginX="20%"
          alignItems="center"
          justifyContent="center"
          marginTop="5%"
        >
          <Box flex="1">
            <Button
              padding="2% 25%"
              backgroundColor={
                isButtonSelected("Discover") ? "#0298DA" : "white"
              }
              color={isButtonSelected("Discover") ? "white" : "#0298DA"}
              border="1px solid #0298DA"
              borderRadius="30px"
              onClick={() => handleClick("Discover")}
            >
              Discover
            </Button>
          </Box>

          <Box flex="1">
            <Button
              backgroundColor={isButtonSelected("Define") ? "#0298DA" : "white"}
              borderRadius="30px"
              padding="2% 25%"
              color={isButtonSelected("Define") ? "white" : "#0298DA"}
              onClick={() => handleClick("Define")}
              border="1px solid #0298DA"
            >
              Define
            </Button>
          </Box>

          <Box color="white" flex="1">
            <Button
              backgroundColor={isButtonSelected("Build") ? "#0298DA" : "white"}
              color={isButtonSelected("Build") ? "white" : "#0298DA"}
              borderRadius="30px"
              padding="2% 25%"
              onClick={() => handleClick("Build")}
              border="1px solid #0298DA"
            >
              Build
            </Button>
          </Box>

          <Box color="white" flex="1">
            <Button
              backgroundColor={
                isButtonSelected("Deliver") ? "#0298DA" : "white"
              }
              borderRadius="30px"
              padding="2% 25%"
              onClick={() => handleClick("Deliver")}
              border="1px solid #0298DA"
              color={isButtonSelected("Deliver") ? "white" : "#0298DA"}
            >
              Deliver
            </Button>
          </Box>
        </Flex>

        <Box>
          <Flex
            marginTop="5%"
            paddingBottom="2%"
            borderBottom="1px solid #ED3237"
          >
            <Box flex="1">
              <Text fontSize="14px" color="#0298DA" fontWeight="700">
                01
              </Text>
              <Text fontSize="32px" color="#0298DA" fontWeight="700">
                Brand Audit
              </Text>
            </Box>
            <Box flex="2">
              <Text>
                Brand Audit service goes beyond the surface, delving deep into
                the heart of your brand to uncover its essence. Through
                meticulous analysis, we identify strengths, refine weaknesses,
                and provide strategic insights to ensure your brand not only
                stands out but resonates powerfully with your target audience.
              </Text>
            </Box>
          </Flex>

          <Flex marginTop="2%" paddingBottom="2%">
            <Box flex="1">
              <Text fontSize="14px" color="#0298DA" fontWeight="700">
                02
              </Text>
              <Text fontSize="32px" color="#0298DA" fontWeight="700">
                Audience Analysis
              </Text>
            </Box>
            <Box flex="2">
              <Text>
                We understand that reaching the right audience is crucial. Our
                Audience Analysis service goes beyond demographics, delving into
                the intricacies of behavior and preferences. With insightful
                data, we help you tailor your message effectively, ensuring it
                resonates with your audience and creates a lasting impact.
              </Text>
            </Box>
          </Flex>

          <Box textAlign="center" marginTop="2%">
            <Button
              colorScheme="red"
              transition="1s ease-in"
              backgroundColor="#0298DA"
              color="white"
              padding="2% 5%"
            >
              Contact us
            </Button>
          </Box>
        </Box>

        <ServiceFlex />

        <Flex justifyContent="center" marginTop="5%">
          <Image src={pageCover} />
        </Flex>
      </Box>
      <Footer />
    </Box>
  );
};

export default Services;
