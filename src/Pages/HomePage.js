import {
  Box,
  Text,
  Flex,
  Button,
  Image,
  Center,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import background1 from "../Assets/Png/background1.png";
import background1M from "../Assets/Png/background1M.png";
import background2 from "../Assets/Png/background2.png";
import background2M from "../Assets/Png/background2M.png";
import background3 from "../Assets/Png/background3.png";
import background3M from "../Assets/Png/background3M.png";
import background4 from "../Assets/Png/background4.png";
import background4M from "../Assets/Png/background4M.png";
import background5 from "../Assets/Png/background5.png";
import background5M from "../Assets/Png/background5M.png";
import background6 from "../Assets/Png/background6.png";
import background6M from "../Assets/Png/background6M.png";
import background7 from "../Assets/Png/background7.png";
import background7M from "../Assets/Png/background7M.png";
import brand1 from "../Assets/Png/brandingImg1.png";
import brand2 from "../Assets/Png/brandingImg2.png";
import brand3 from "../Assets/Png/brandingImg3.png";
import frame11 from "../Assets/Yoursassistance/Frame 11.png";
import work1 from "../Assets/Yoursassistance/Work 1.png";
import brand from "../Assets/Yoursassistance/Brand.png";
import frame9044 from "../Assets/Yoursassistance/Frame 9044.png";
import frame9047 from "../Assets/Yoursassistance/Frame 9047.png";
import frame9053 from "../Assets/Svg/Frame 9053.svg";
import frame9055 from "../Assets/Yoursassistance/Frame 9055.png";
import rectangle1 from "../Assets/Yoursassistance/Rectangle 1.png";
import group3 from "../Assets/Yoursassistance/Group 3.png";
import Yours from "../Assets/Yoursassistance/Yours.png";
import Your from "../Assets/Yoursassistance/Your.png";
import HomeServices from "../Components/HomeServices";
import pageCover from "../Assets/Svg/pageCover.svg";
import Testimonials from "../Components/Testimonials";
import Footer from "../Components/Footer";
import { useMediaQuery } from "@chakra-ui/react";
import NavDrawer from "../Components/NavDrawer";
import Header from "../Components/HeaderTwo";

const HomePage = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [backgroundIndexMobile, setBackgroundIndexMobile] = useState(0);
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const { onOpen, onClose, isOpen } = useDisclosure();

  const backgrounds = [
    background1,
    background2,
    background3,
    background4,
    background5,
    background6,
    background7,
  ];

  const backgroundsMobile = [
    background1M,
    background2M,
    background3M,
    background4M,
    background5M,
    background6M,
    background7M,
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 3000);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackgroundIndexMobile(
        (prevIndex) => (prevIndex + 1) % backgroundsMobile.length
      );
    }, 3000);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  const AnimatedCard = ({ imageSrc, title, description, description2 }) => {
    return (
      <Flex
        flex="1"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        borderRadius="20px"
        // paddingY={{ base: "6%", md: "2%" }}
        marginX="1%"
        marginBottom={{ base: "7%", md: "0" }}
        boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1)"
        _hover={{
          transform: "scale(1.05)",
          backgroundColor: "rgba(2, 152, 218, 0.1)",
          transition: "transform 1s ease-in-out",
        }}
        position="relative" // Add relative positioning to the container
      >
        <Image width="100%" src={imageSrc} borderRadius="20px" />
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          borderRadius="20px"
          backgroundColor="rgba(0, 0, 0, 0.5)" // Semi-transparent overlay color
          zIndex="1" // Ensure overlay is above the image
        />
        <Box
          position="absolute"
          top="80%"
          left="50%"
          transform="translate(-50%, -50%)" // Center the text vertically and horizontally
          textAlign="left"
          color="white"
          zIndex="2" // Ensure text is above the image
          width="100%"
          p="4"
          display="flex"
          flexDirection="column"
          gap="6px"
        >
          <Text fontSize={{ base: "18px", md: "20px" }} fontWeight="600">
            {title}
          </Text>
          <Text fontSize={{ base: "13px", md: "13px" }}>{description}</Text>
          <Text fontSize={{ base: "13px", md: "13px" }}>{description2}</Text>
        </Box>
      </Flex>
    );
  };

  return (
    <Box>
      {isMobile ? (
        <Box
          //width="100%"
          height="626px"
          // backgroundImage={backgroundsMobile[backgroundIndexMobile]}
          // backgroundColor="blue"
          backgroundImage={rectangle1}
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          transition="background-image 1s ease-in"
        >
          <Box height="606px" paddingX="4%">
            <Header onOpen={onOpen} />

            <Image src={Your} width="80%" height="6vh" marginTop="15%" />
            <Text
              color="white"
              fontSize="24px"
              fontWeight="600"
              lineHeight="29.26px"
              paddingTop="12%"
              paddingLeft="1%"
            >
              It’s not the best product that sells but the best marketed
              product.
            </Text>
            <Flex marginTop="5%" width="100%" marginLeft="1%">
              <Button
                borderRadius="10px"
                marginRight="1%"
                padding="2% 3%"
                backgroundColor="#0298DA"
                color="white"
                colorScheme="red"
                transition="1s ease-in"
              >
                Explore Services
              </Button>
              <Button
                borderRadius="10px"
                padding="2% 3%"
                backgroundColor="white"
                color="#0298DA"
                marginLeft="3%"
              >
                About Us
              </Button>
            </Flex>
            <Flex marginTop="25%" width="100%" marginLeft="1%">
              <Image src={frame9044} width="45%" height="5.5vh" />
              <Image
                src={frame9047}
                width="45%"
                height="5.5vh"
                marginLeft="4%"
              />
            </Flex>
            <Image
              src={brand}
              width="80%"
              height="6vh"
              marginTop="8%"
              marginLeft="1%"
            />
          </Box>
        </Box>
      ) : (
        <Box backgroundColor="#FAFAFA">
          <Flex
            flexDirection="row"
            width="97%"
            justifyContent="space-between"
            margin="auto"
          >
            <Box width="49%">
              <Image src={frame11} width="40%" marginTop="5%" marginLeft="9%" />
              <Image src={Yours} width="140%" height="10vh" marginTop="15%" />
              <Text
                color="#0298DA"
                fontSize="37px"
                fontWeight="600"
                lineHeight="48.76px"
                paddingTop="5%"
                paddingLeft="9%"
                width="90%"
              >
                It’s not the best product that sells but the best marketed
                product.
              </Text>
              <Flex marginTop="3%" width="100%" marginLeft="9%">
                <Button
                  borderRadius="10px"
                  marginRight="1%"
                  padding="2% 3%"
                  backgroundColor="#0298DA"
                  color="white"
                  colorScheme="red"
                  transition="1s ease-in"
                >
                  Explore Services
                </Button>
                <Button
                  borderRadius="10px"
                  padding="2% 3%"
                  backgroundColor="white"
                  color="#0298DA"
                  boxShadow="sm"
                >
                  About Us
                </Button>
              </Flex>
              <Flex marginTop="25%" width="100%" marginLeft="9%">
                <Image src={frame9044} width="30%" height="10.5vh" />
                <Image
                  src={frame9047}
                  width="30%"
                  height="10.5vh"
                  marginLeft="4%"
                />
              </Flex>
            </Box>
            <Box width="45%">
              <Flex
                flexDirection="row"
                width="97%"
                justifyContent="space-between"
              >
                <Image src={rectangle1} width="70%" height="105vh" />
                <Image
                  src={group3}
                  width="8%"
                  height="6vh"
                  marginTop="5%"
                  marginRight="6%"
                  cursor="pointer"
                  onClick={() => onOpen()}
                />
              </Flex>
            </Box>
          </Flex>
        </Box>
      )}

      <Box marginX="5%" marginY="3%">
        <Box>
          <Text
            color="#0298DA"
            fontSize={{ base: "32px", md: "70px" }}
            fontWeight="600"
            width={{ base: "90%", md: "65%" }}
            lineHeight="80px"
          >
            Why company & business branding{" "}
            <Text color="#ED3237" lineHeight="80px">
              important.
            </Text>
          </Text>
        </Box>

        <Flex marginTop="5%" flexDirection={{ base: "column", md: "row" }}>
          <AnimatedCard
            imageSrc={brand1}
            title="Creating Identity and Recognition"
            description="Branding gives your business a distinguishable personality, separating you from competitors in a crowded market. "
            description2="A consistent brand image (logo, colors, fonts, etc.) makes you easily recognizable, helping customers find and remember you."
          />

          <AnimatedCard
            imageSrc={brand2}
            title="Builds Trust and Credibility"
            description="A well-developed brand conveys professionalism and reliability, boosting your customer's confidence in your business. "
            description2="Consistent branding across all platforms - website, social media, marketing materials - reinforces this positive image."
          />

          <AnimatedCard
            imageSrc={brand3}
            title="Influences Customer Choice"
            description="Branding goes beyond visuals; it communicates your values, mission, and unique selling proposition. "
            description2="This messaging resonates with customers who identify with your brand, making them more likely to choose you over competitors."
          />
        </Flex>
        <Box>
          <Flex
            flexDirection={{ base: "column", md: "row" }}
            width="97%"
            justifyContent="space-between"
            margin="auto"
            marginTop="7%"
            gap="30px"
            p="2"
          >
            <Flex
              flexDirection="column"
              width={{ base: "95%", md: "42%" }}
              mt={{ base: "2", md: "7" }}
              gap="14px"
            >
              <Text
                color="#ED3237"
                fontSize={{ base: "32px", md: "48px" }}
                fontWeight="600"
              >
                Recent Projects
              </Text>
              <span style={{ color: "#0298DA", fontSize: "16px" }}>
                We take pride with our{" "}
                <span style={{ color: "#ED3237" }}>Works</span> and have brought
                satisfaction and
                <span style={{ color: "#ED3237" }}> Growth</span> to our client
                and <span style={{ color: "#ED3237" }}>Businesses</span>
              </span>
              <Image src={frame9053} />
            </Flex>
            <Flex
              flexDirection="column"
              width={{ base: "95%", md: "50%" }}
              gap="10px"
            >
              <Image src={frame9055} />

              <Flex flexDirection="column" gap="4px">
                <Text color="#393637" fontSize="20px" fontWeight="600">
                  Seedtime Landscape
                </Text>

                <Text color="#979797" fontSize="14px">
                  No two brands are alike, and neither are their challenges. We
                  don't believe in cookie-cutter solutions – we work
                  hand-in-hand with each client to craft a bespoke brand
                  identity and digital strategy that drives real results.
                </Text>

                <Button
                  width="130px"
                  p="5"
                  bgColor="#ED3237"
                  color="#fff"
                  mt="2"
                  fontSize="12px"
                >
                  About Us
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Box>
      <HomeServices />
      <Testimonials />

      {isMobile ? (
        <Box width="100%" backgroundColor="#F0F0F0" height="fit-content">
          <Box width="92%" margin="auto" paddingTop="2%" paddingLeft="2%">
            <Text fontSize="3rem" fontWeight="600">
              Get In Touch
            </Text>
            <Flex flexDirection="column" width="97%">
              <Image src={work1} width="97%" height="65vh" marginTop="3%" />
              <Box width="96%">
                <Text fontSize="1rem" fontWeight="600">
                  Name
                </Text>
                <Input
                  placeholder="John Doe"
                  width="95%"
                  height="7vh"
                  marginTop="2%"
                />

                <Text fontSize="1rem" fontWeight="600" paddingTop="2%">
                  Email
                </Text>
                <Input
                  placeholder="email@gmail.com"
                  width="95%"
                  height="7vh"
                  marginTop="2%"
                />

                <Text fontSize="1rem" fontWeight="600" paddingTop="2%">
                  Message
                </Text>
                <Input
                  placeholder="Enter your message"
                  width="95%"
                  height="25vh"
                  marginTop="2%"
                />

                <Button
                  borderRadius="10px"
                  marginRight="1%"
                  padding="2% 3%"
                  backgroundColor="#0298DA"
                  color="white"
                  colorScheme="red"
                  transition="1s ease-in"
                  marginTop="5%"
                  width="50%"
                  marginBottom="7%"
                >
                  send
                </Button>
              </Box>
            </Flex>
          </Box>
        </Box>
      ) : (
        <Box width="100%" backgroundColor="#F0F0F0" height="fit-content">
          <Box width="92%" margin="auto" paddingTop="2%" paddingLeft="2%">
            <Text fontSize="3rem" fontWeight="600">
              Get In Touch
            </Text>
            <Flex flexDirection="row" width="97%">
              <Image src={work1} width="50%" height="65vh" marginTop="3%" />
              <Box marginRight="4%" width="46%">
                <Text fontSize="1rem" fontWeight="600">
                  Name
                </Text>
                <Input
                  placeholder="John Doe"
                  width="85%"
                  height="7vh"
                  marginTop="2%"
                />

                <Text fontSize="1rem" fontWeight="600" paddingTop="2%">
                  Email
                </Text>
                <Input
                  placeholder="email@gmail.com"
                  width="85%"
                  height="7vh"
                  marginTop="2%"
                />

                <Text fontSize="1rem" fontWeight="600" paddingTop="2%">
                  Message
                </Text>
                <Input
                  placeholder="Enter your message"
                  width="85%"
                  height="25vh"
                  marginTop="2%"
                />

                <Button
                  borderRadius="10px"
                  marginRight="1%"
                  padding="2% 3%"
                  backgroundColor="#0298DA"
                  color="white"
                  colorScheme="red"
                  transition="1s ease-in"
                  marginTop="5%"
                  width="50%"
                >
                  send
                </Button>
              </Box>
            </Flex>
          </Box>
        </Box>
      )}

      <Flex
        justifyContent="center"
        marginBottom={{ base: "15%", md: "0" }}
        marginTop={{ base: "10%", md: "5%" }}
        marginX="5%"
      >
        <Image width={{ base: "100%", md: "100%" }} src={pageCover} />
      </Flex>
      <Footer />
      <NavDrawer onClose={onClose} isOpen={isOpen} />
    </Box>
  );
};

export default HomePage;
