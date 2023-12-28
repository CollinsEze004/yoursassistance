import { Box, Text, Flex, Button, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import background1 from "../Assets/Png/background1.png";
import background2 from "../Assets/Png/background2.png";
import background3 from "../Assets/Png/background3.png";
import background4 from "../Assets/Png/background4.png";
import background5 from "../Assets/Png/background5.png";
import background6 from "../Assets/Png/background6.png";
import background7 from "../Assets/Png/background7.png";
import brand1 from "../Assets/Png/brandingImg1.png";
import brand2 from "../Assets/Png/brandingImg2.png";
import brand3 from "../Assets/Png/brandingImg3.png";
import logoB from "../Assets/Svg/logoB.svg";
import HomeServices from "../Components/HomeServices";
import Carousel from "../Components/Carousel";
import Testimonials from "../Components/Testimonials";
import Footer from "../Components/Footer";

const HomePage = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  const backgrounds = [
    background1,
    background2,
    background3,
    background4,
    background5,
    background6,
    background7,
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 3000);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box>
      <Box
        width="100%"
        height="100vh"
        backgroundImage={backgrounds[backgroundIndex]}
        backgroundRepeat="no-repeat"
        backgroundSize="100vw"
        transition="background-image 1s ease-in"
      >
        <Box
          paddingX="5%"
          height="100vh"
          backgroundColor="rgba(0,0,0, 0.4)"
          color="white"
        >
          <Header />
          <Flex flexDirection="column" justifyContent="center" height="80vh">
            <Text fontSize="80px" fontWeight="600" width="70%">
              It’s not the best product that sells but the best marketed
              product.
            </Text>
            <Flex>
              <Button
                borderRadius="10px"
                marginRight="1%"
                padding="2% 3%"
                backgroundColor="#0298DA"
                color="white"
                colorScheme='red'
                transition="1s ease-in"
              >
                Explore Services
              </Button>
              <Button
                borderRadius="10px"
                padding="2% 3%"
                backgroundColor="white"
                color="#0298DA"
               
              >
                About Us
              </Button>
            </Flex>
          </Flex>
        </Box>
      </Box>

      <Box marginX="5%" marginY="3%">
        <Box>
          <Text color="#0298DA" fontSize="82px" fontWeight="600" width="50%">
            Why company & business branding{" "}
            <Text color="#ED3237">important.</Text>
          </Text>
        </Box>

        <Flex marginTop="3%">
          <Box flex="1">
            <Image src={brand1} />
            <Text color="#393637" fontSize="24px" fontWeight="600">
              Creating Identity and Recognition
            </Text>
            <Text>
              Branding gives your business a distinguishable personality,
              separating you from competitors in a crowded market. A consistent
              brand image (logo, colors, fonts, etc.) makes you easily
              recognizable, helping customers find and remember you.
            </Text>
          </Box>

          <Box marginX="2%" flex="1">
            <Image src={brand2} />
            <Text color="#393637" fontSize="24px" fontWeight="600">
              Builds Trust and Credibility
            </Text>
            <Text>
              A well-developed brand conveys professionalism and reliability,
              boosting your customer's confidence in your business. Consistent
              branding across all platforms - website, social media, marketing
              materials - reinforces this positive image.
            </Text>
          </Box>

          <Box flex="1">
            <Image src={brand3} />
            <Text color="#393637" fontSize="24px" fontWeight="600">
              Influences Customer Choice
            </Text>
            <Text>
              Branding goes beyond visuals; it communicates your values,
              mission, and unique selling proposition. This messaging resonates
              with customers who identify with your brand, making them more
              likely to choose you over competitors.
            </Text>
          </Box>
        </Flex>

        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          marginTop="7%"
          paddingX="15%"
          color="#393637"
        >
          <Text fontSize="36px" fontWeight="600" color="#0298DA">
            Why do top <span style={{ color: "#ED3237" }}>Brands</span> choose
          </Text>
          <Image marginTop="3%" src={logoB} />
          <Text marginTop="3%" width="80%" textAlign="center">
            No two brands are alike, and neither are their challenges. We don't
            believe in cookie-cutter solutions – we work hand-in-hand with each
            client to craft a bespoke brand identity and digital strategy that
            drives real results.
          </Text>
          <Text  marginTop="1%" width="70%" textAlign="center">
            We're not afraid to push boundaries and embrace the latest trends.
            we stay ahead of the curve, ensuring their brand identity remains
            fresh, relevant, and always ahead of the competition.
          </Text>
          <Button
            borderRadius="10px"
            marginRight="1%"
            padding="3% 7%"
            backgroundColor="#0298DA"
            color="white"
            colorScheme="red"
            transition="1s ease-in"
            marginTop="3%"
          >
            About Us
          </Button>
        </Flex>
      </Box>
      <HomeServices />
      <Carousel />
      <Testimonials />
      <Footer />
    </Box>
  );
};

export default HomePage;
