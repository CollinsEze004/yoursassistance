import React, { useState } from "react";
import { Box, Flex, Image, Text, Button } from "@chakra-ui/react";
import service1 from "../Assets/Png/serviceMain1.png";
import service1C from "../Assets/Png/service1C.png";
import service2C from "../Assets/Png/service2C.png";
import service3C from "../Assets/Png/service3C.png";
import service4C from "../Assets/Png/service4C.png";
import service5C from "../Assets/Png/service5C.png";
import service6C from "../Assets/Png/service6C.png";
import service7C from "../Assets/Png/service7C.png";
import service2 from "../Assets/Png/serviceMain2.png";
import service3 from "../Assets/Png/serviceMain3.png";
import service4 from "../Assets/Png/serviceMain4.png";
import service5 from "../Assets/Png/serviceMain5.png";
import service6 from "../Assets/Png/serviceMain6.png";
import service7 from "../Assets/Png/serviceMain7.png";

const ServiceFlex = () => {
  const [click, setClick] = useState(false);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);
  const [click4, setClick4] = useState(false);
  const [click5, setClick5] = useState(false);
  const [click6, setClick6] = useState(false);
  const [click7, setClick7] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const handleClick2 = () => {
    setClick2(!click2);
  };

  const handleClick3 = () => {
    setClick3(!click3);
  };

  const handleClick4 = () => {
    setClick4(!click4);
  };

  const handleClick5 = () => {
    setClick5(!click5);
  };

  const handleClick6 = () => {
    setClick6(!click6);
  };

  const handleClick7 = () => {
    setClick7(!click7);
  };

  return (
    <Box marginTop={{ base: "15%", md: "5%" }}>
      <Flex flexDirection="column" paddingX={{ base: "2%", md: "5%" }}>
        {click ? (
          <Flex
            alignItems="center"
            style={{
              transition: "all 3s ease-in",
              transform: "translateX(0%)",
            }}
            flexDirection={{ base: "column", md: "row" }}
          >
            <Flex
              flex="0.3"
              justifyContent="flex-end"
              alignItems="flex-end"
              backgroundColor="#ED3237"
              padding="1.5% 3%"
              textAlign="center"
              borderRadius={{ base: "10px 10px 0 0", md: "10px 0 0 10px" }}
              boxShadow="0 4px 18px rgba(0, 0, 0, 0.3)"
              onClick={handleClick}
              cursor="pointer"
            >
              <Text fontSize="16px" fontWeight="600" color="white">
                Close
              </Text>
            </Flex>
            <Flex flex="4" borderRadius="20px" justifyContent="flex-start">
              <Image
                boxShadow="0 4px 18px rgba(0, 0, 0, 0.3)"
                width="100%"
                borderRadius="20px"
                src={service1C}
              />
            </Flex>
            <Box
              padding="1% 2%"
              fontSize="16px"
              fontWeight="600"
              borderRadius="0 5px 5px 0"
              cursor="pointer"
              flex="5"
              height="100%"
            >
              <Text
                fontSize={{ base: "24px", md: "32px" }}
                fontWeight="700"
                color="#0298DA"
              >
                Graphics Design
              </Text>
              <Text
                fontSize={{ base: "14px", md: "16px" }}
                fontWeight={{ base: "400", md: "500" }}
              >
                Unleash the power of visual storytelling with our graphic design
                expertise. From eye-catching logos to stunning marketing
                materials, we turn your ideas into captivating visuals that
                leave a lasting impression.
              </Text>
              <Button
                backgroundColor="#0298DA"
                border="1px solid #0298DA"
                padding={{ base: "8% 5%", md: "5% 5%" }}
                borderRadius="10px"
                marginTop="2%"
                marginY="4%"
                color="white"
                fontSize={{ base: "14px", md: "16px" }}
              >
                Click to view
              </Button>
            </Box>
          </Flex>
        ) : (
          <Flex
            alignItems="center"
            style={{
              transition: "all 3s ease-in-out",
              transform: "translateX(-5%)",
            }}
          >
            <Flex borderRadius="20px" justifyContent="flex-end">
              <Image
                boxShadow="0 4px 18px rgba(0, 0, 0, 0.3)"
                width={{ base: "100%", md: "80%" }}
                borderRadius="20px"
                src={service1}
              />
            </Flex>
            <Box
              padding="1% 2%"
              fontWeight="600"
              color="white"
              backgroundColor="#0298DA"
              borderRadius="0 5px 5px 0"
              boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
              cursor="pointer"
              onClick={handleClick}
              width={{ base: "50%", md: "fit-content" }}
            >
              <Text fontSize={{ base: "14px", md: "16px" }}>CLick to View</Text>
            </Box>
          </Flex>
        )}

        {click2 ? (
          <Flex
            alignItems="center"
            flexDirection={{ base: "column", md: "row-reverse" }}
            style={{
              transition: "all 3s ease-in",
              transform: "translateX(0%)",
            }}
            marginTop={{ base: "10%", md: "5%" }}
          >
            <Flex
              flex="0.3"
              justifyContent="flex-end"
              alignItems="flex-end"
              backgroundColor="#ED3237"
              padding="1.5% 3%"
              textAlign="center"
              borderRadius={{ base: "10px 10px 0 0", md: "0 10px 10px 0" }}
              boxShadow="0 4px 18px rgba(0, 0, 0, 0.3)"
              onClick={handleClick2}
              cursor="pointer"
            >
              <Text fontSize="16px" fontWeight="600" color="white">
                Close
              </Text>
            </Flex>
            <Flex flex="4" borderRadius="20px" justifyContent="flex-start">
              <Image
                boxShadow="0 4px 18px rgba(0, 0, 0, 0.3)"
                width="100%"
                borderRadius="20px"
                src={service2C}
              />
            </Flex>
            <Box
              padding="1% 2%"
              fontSize="16px"
              fontWeight="600"
              borderRadius="0 5px 5px 0"
              cursor="pointer"
              flex="5"
              height="100%"
            >
              <Text
                fontSize={{ base: "24px", md: "32px" }}
                fontWeight="700"
                color="#0298DA"
              >
                Branding & Brand identity design
              </Text>
              <Text
                fontSize={{ base: "14px", md: "16px" }}
                fontWeight={{ base: "400", md: "500" }}
              >
                Crafting compelling narratives and visually defining your
                essence, our branding and brand identity design services ensure
                your business stands out in a crowded market. Let us create a
                brand story that resonates and a visual identity that leaves an
                indelible mark.
              </Text>
              <Button
                backgroundColor="#0298DA"
                border="1px solid #0298DA"
                padding={{ base: "8% 5%", md: "5% 5%" }}
                borderRadius="10px"
                marginTop="2%"
                marginY="4%"
                color="white"
                fontSize={{ base: "14px", md: "16px" }}
              >
                Contact us
              </Button>
            </Box>
          </Flex>
        ) : (
          <Flex
            alignItems="center"
            marginTop={{ base: "10%", md: "5%" }}
            flexDirection="row-reverse"
            style={{
              transition: "all 3s ease-in-out",
              transform: "translateX(5%)",
            }}
          >
            <Flex borderRadius="20px">
              <Image
                boxShadow="0 4px 18px rgba(0, 0, 0, 0.3)"
                width={{ base: "100%", md: "80%" }}
                borderRadius="20px"
                src={service2}
              />
            </Flex>
            <Box
              padding="1% 2%"
              fontWeight="600"
              color="white"
              backgroundColor="#0298DA"
              borderRadius="5px 0 0 5px "
              boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
              cursor="pointer"
              onClick={handleClick2}
              width={{ base: "50%", md: "fit-content" }}
            >
              <Text fontSize={{ base: "14px", md: "16px" }}>CLick to View</Text>
            </Box>
          </Flex>
        )}

        {click3 ? (
          <Flex
            alignItems="center"
            style={{
              transition: "all 3s ease-in",
              transform: "translateX(0%)",
            }}
            marginTop={{ base: "10%", md: "5%" }}
            flexDirection={{ base: "column", md: "row" }}
          >
            <Flex
              flex="0.3"
              justifyContent="flex-end"
              alignItems="flex-end"
              backgroundColor="#ED3237"
              padding="1.5% 3%"
              textAlign="center"
              borderRadius={{ base: "10px 10px 0 0", md: "10px 0 0 10px" }}
              boxShadow="0 4px 18px rgba(0, 0, 0, 0.3)"
              onClick={handleClick3}
              cursor="pointer"
            >
              <Text fontSize="16px" fontWeight="600" color="white">
                Close
              </Text>
            </Flex>
            <Flex flex="4" borderRadius="20px" justifyContent="flex-start">
              <Image
                boxShadow="0 4px 18px rgba(0, 0, 0, 0.3)"
                width="100%"
                borderRadius="20px"
                src={service3C}
              />
            </Flex>
            <Box
              padding="1% 2%"
              fontSize="16px"
              fontWeight="600"
              borderRadius="0 5px 5px 0"
              cursor="pointer"
              flex="5"
              height="100%"
            >
              <Text
                fontSize={{ base: "24px", md: "32px" }}
                fontWeight="700"
                color="#0298DA"
              >
                Web Development
              </Text>
              <Text
                fontSize={{ base: "14px", md: "16px" }}
                fontWeight={{ base: "400", md: "500" }}
              >
                Transform your digital aspirations into reality with our web
                development expertise. From seamless user experiences to
                cutting-edge functionality, we bring your online presence to
                life, ensuring your website not only reflects your brand but
                engages and captivates your audience.
              </Text>
              <Button
                backgroundColor="#0298DA"
                border="1px solid #0298DA"
                padding={{ base: "8% 5%", md: "5% 5%" }}
                borderRadius="10px"
                marginTop="2%"
                marginY="4%"
                color="white"
                fontSize={{ base: "14px", md: "16px" }}
              >
                Contact us
              </Button>
            </Box>
          </Flex>
        ) : (
          <Flex
            alignItems="center"
            style={{
              transition: "all 3s ease-in-out",
              transform: "translateX(-5%)",
            }}
            marginTop={{ base: "10%", md: "5%" }}
          >
            <Flex borderRadius="20px" justifyContent="flex-end">
              <Image
                boxShadow="0 4px 18px rgba(0, 0, 0, 0.3)"
                width={{ base: "100%", md: "80%" }}
                borderRadius="20px"
                src={service3}
              />
            </Flex>
            <Box
              padding="1% 2%"
              fontSize={{ base: "14px", md: "16px" }}
              fontWeight="600"
              color="white"
              backgroundColor="#0298DA"
              borderRadius="0 5px 5px 0"
              boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
              cursor="pointer"
              onClick={handleClick3}
              width={{ base: "50%", md: "fit-content" }}
            >
              <Text>CLick to View</Text>
            </Box>
          </Flex>
        )}

        {click4 ? (
          <Flex
            alignItems="center"
            flexDirection={{ base: "column", md: "row-reverse" }}
            style={{
              transition: "all 3s ease-in",
              transform: "translateX(0%)",
            }}
            marginTop={{ base: "10%", md: "5%" }}
          >
            <Flex
              flex="0.3"
              justifyContent="flex-end"
              alignItems="flex-end"
              backgroundColor="#ED3237"
              padding="1.5% 3%"
              textAlign="center"
              borderRadius={{ base: "10px 10px 0 0", md: "0 10px 10px 0" }}
              boxShadow="0 4px 18px rgba(0, 0, 0, 0.3)"
              onClick={handleClick4}
              cursor="pointer"
            >
              <Text fontSize="16px" fontWeight="600" color="white">
                Close
              </Text>
            </Flex>
            <Flex flex="4" borderRadius="20px" justifyContent="flex-start">
              <Image
                boxShadow="0 4px 18px rgba(0, 0, 0, 0.3)"
                width="100%"
                borderRadius="20px"
                src={service4C}
              />
            </Flex>
            <Box
              padding="1% 2%"
              fontSize="16px"
              fontWeight="600"
              borderRadius="0 5px 5px 0"
              cursor="pointer"
              flex="5"
              height="100%"
            >
              <Text
                fontSize={{ base: "24px", md: "32px" }}
                fontWeight="700"
                color="#0298DA"
              >
                Digital Marketing
              </Text>
              <Text
                fontSize={{ base: "14px", md: "16px" }}
                fontWeight={{ base: "400", md: "500" }}
              >
                Elevate your online presence and drive success with our digital
                marketing solutions. From strategic campaigns to engaging
                content, we specialize in navigating the digital landscape to
                amplify your brand, reach your audience, and leave a lasting
                impact in the digital realm.
              </Text>
              <Button
                backgroundColor="#0298DA"
                border="1px solid #0298DA"
                padding={{ base: "8% 5%", md: "5% 5%" }}
                borderRadius="10px"
                marginTop="2%"
                marginY="4%"
                color="white"
                fontSize={{ base: "14px", md: "16px" }}
              >
                Contact us
              </Button>
            </Box>
          </Flex>
        ) : (
          <Flex
            alignItems="center"
            marginTop={{ base: "10%", md: "5%" }}
            flexDirection="row-reverse"
            style={{
              transition: "all 3s ease-in-out",
              transform: "translateX(5%)",
            }}
          >
            <Flex borderRadius="20px">
              <Image
                boxShadow="0 4px 18px rgba(0, 0, 0, 0.3)"
                width={{ base: "100%", md: "80%" }}
                borderRadius="20px"
                src={service4}
              />
            </Flex>
            <Box
              padding="1% 2%"
              fontSize={{ base: "14px", md: "16px" }}
              fontWeight="600"
              color="white"
              backgroundColor="#0298DA"
              borderRadius="5px 0 0 5px "
              boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
              cursor="pointer"
              onClick={handleClick4}
              width={{ base: "50%", md: "fit-content" }}
            >
              <Text>CLick to View</Text>
            </Box>
          </Flex>
        )}

        {click5 ? (
          <Flex
            alignItems="center"
            style={{
              transition: "all 3s ease-in",
              transform: "translateX(0%)",
            }}
            marginTop={{ base: "10%", md: "5%" }}
            flexDirection={{ base: "column", md: "row" }}
          >
            <Flex
              flex="0.3"
              justifyContent="flex-end"
              alignItems="flex-end"
              backgroundColor="#ED3237"
              padding="1.5% 3%"
              textAlign="center"
              borderRadius={{ base: "10px 10px 0 0", md: "10px 0 0 10px" }}
              boxShadow="0 4px 18px rgba(0, 0, 0, 0.3)"
              onClick={handleClick5}
              cursor="pointer"
            >
              <Text fontSize="16px" fontWeight="600" color="white">
                Close
              </Text>
            </Flex>
            <Flex flex="4" borderRadius="20px" justifyContent="flex-start">
              <Image
                boxShadow="0 4px 18px rgba(0, 0, 0, 0.3)"
                width="100%"
                borderRadius="20px"
                src={service5C}
              />
            </Flex>
            <Box
              padding="1% 2%"
              fontSize="16px"
              fontWeight="600"
              borderRadius="0 5px 5px 0"
              cursor="pointer"
              flex="5"
              height="100%"
            >
              <Text
                fontSize={{ base: "24px", md: "32px" }}
                fontWeight="700"
                color="#0298DA"
              >
                Content Management
              </Text>
              <Text
                fontSize={{ base: "14px", md: "16px" }}
                fontWeight={{ base: "400", md: "500" }}
              >
                Simplify, organize, and amplify your digital presence with our
                content management solutions. We empower you to take control,
                seamlessly managing and updating your content, ensuring that
                your message remains fresh, relevant, and compelling for your
                audience.
              </Text>
              <Button
                backgroundColor="#0298DA"
                border="1px solid #0298DA"
                padding={{ base: "8% 5%", md: "5% 5%" }}
                borderRadius="10px"
                marginTop="2%"
                marginY="4%"
                color="white"
                fontSize={{ base: "14px", md: "16px" }}
              >
                Contact us
              </Button>
            </Box>
          </Flex>
        ) : (
          <Flex
            alignItems="center"
            style={{
              transition: "all 3s ease-in-out",
              transform: "translateX(-5%)",
            }}
            marginTop={{ base: "10%", md: "5%" }}
          >
            <Flex borderRadius="20px" justifyContent="flex-end">
              <Image
                boxShadow="0 4px 18px rgba(0, 0, 0, 0.3)"
                width={{ base: "100%", md: "80%" }}
                borderRadius="20px"
                src={service5}
              />
            </Flex>
            <Box
              padding="1% 2%"
              fontSize={{ base: "14px", md: "16px" }}
              fontWeight="600"
              color="white"
              backgroundColor="#0298DA"
              borderRadius="0 5px 5px 0"
              boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
              cursor="pointer"
              onClick={handleClick5}
              width={{ base: "50%", md: "fit-content" }}
            >
              <Text>CLick to View</Text>
            </Box>
          </Flex>
        )}

        {click6 ? (
          <Flex
            alignItems="center"
            flexDirection={{ base: "column", md: "row-reverse" }}
            style={{
              transition: "all 3s ease-in",
              transform: "translateX(0%)",
            }}
            marginTop={{ base: "10%", md: "5%" }}
          >
            <Flex
              flex="0.3"
              justifyContent="flex-end"
              alignItems="flex-end"
              backgroundColor="#ED3237"
              padding="1.5% 3%"
              textAlign="center"
              borderRadius={{ base: "10px 10px 0 0", md: "0 10px 10px 0" }}
              boxShadow="0 4px 18px rgba(0, 0, 0, 0.3)"
              onClick={handleClick6}
              cursor="pointer"
            >
              <Text fontSize="16px" fontWeight="600" color="white">
                Close
              </Text>
            </Flex>
            <Flex flex="4" borderRadius="20px" justifyContent="flex-start">
              <Image
                boxShadow="0 4px 18px rgba(0, 0, 0, 0.3)"
                width="100%"
                borderRadius="20px"
                src={service6C}
              />
            </Flex>
            <Box
              padding="1% 2%"
              fontSize="16px"
              fontWeight="600"
              borderRadius="0 5px 5px 0"
              cursor="pointer"
              flex="5"
              height="100%"
            >
              <Text
                fontSize={{ base: "24px", md: "32px" }}
                fontWeight="700"
                color="#0298DA"
              >
                Content Design
              </Text>
              <Text
                fontSize={{ base: "14px", md: "16px" }}
                fontWeight={{ base: "400", md: "500" }}
              >
                Crafting compelling narratives and visual experiences, our
                content design services seamlessly blend creativity with
                strategy. From captivating copy to visually engaging assets, we
                shape content that not only tells your story but resonates
                deeply with your audience, creating meaningful connections that
                last.
              </Text>
              <Button
                backgroundColor="#0298DA"
                border="1px solid #0298DA"
                padding={{ base: "8% 5%", md: "5% 5%" }}
                borderRadius="10px"
                marginTop="2%"
                marginY="4%"
                color="white"
                fontSize={{ base: "14px", md: "16px" }}
              >
                Contact us
              </Button>
            </Box>
          </Flex>
        ) : (
          <Flex
            alignItems="center"
            marginTop={{ base: "10%", md: "5%" }}
            flexDirection="row-reverse"
            style={{
              transition: "all 3s ease-in-out",
              transform: "translateX(5%)",
            }}
          >
            <Flex borderRadius="20px">
              <Image
                boxShadow="0 4px 18px rgba(0, 0, 0, 0.3)"
                width={{ base: "100%", md: "80%" }}
                borderRadius="20px"
                src={service6}
              />
            </Flex>
            <Box
              padding="1% 2%"
              fontSize={{ base: "14px", md: "16px" }}
              fontWeight="600"
              color="white"
              backgroundColor="#0298DA"
              borderRadius="5px 0 0 5px "
              boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
              cursor="pointer"
              onClick={handleClick6}
              width={{ base: "50%", md: "fit-content" }}
            >
              <Text>CLick to View</Text>
            </Box>
          </Flex>
        )}

        {click7 ? (
          <Flex
            alignItems="center"
            style={{
              transition: "all 3s ease-in",
              transform: "translateX(0%)",
            }}
            marginTop={{ base: "10%", md: "5%" }}
            flexDirection={{ base: "column", md: "row" }}
          >
            <Flex
              flex="0.3"
              justifyContent="flex-end"
              alignItems="flex-end"
              backgroundColor="#ED3237"
              padding="1.5% 3%"
              textAlign="center"
              borderRadius={{ base: "10px 10px 0 0", md: "10px 0 0 10px" }}
              boxShadow="0 4px 18px rgba(0, 0, 0, 0.3)"
              onClick={handleClick7}
              cursor="pointer"
            >
              <Text fontSize="16px" fontWeight="600" color="white">
                Close
              </Text>
            </Flex>
            <Flex flex="4" borderRadius="20px" justifyContent="flex-start">
              <Image
                boxShadow="0 4px 18px rgba(0, 0, 0, 0.3)"
                width="100%"
                borderRadius="20px"
                src={service7C}
              />
            </Flex>
            <Box
              padding="1% 2%"
              fontSize="16px"
              fontWeight="600"
              borderRadius="0 5px 5px 0"
              cursor="pointer"
              flex="5"
              height="100%"
            >
              <Text
                fontSize={{ base: "24px", md: "32px" }}
                fontWeight="700"
                color="#0298DA"
              >
                Animations
              </Text>
              <Text
                fontSize={{ base: "14px", md: "16px" }}
                fontWeight={{ base: "400", md: "500" }}
              >
                Bring your brand to life with our dynamic animation services.
                From attention-grabbing motion graphics to immersive
                storytelling, we add a touch of magic to your content, creating
                visually stunning animations that leave a lasting and memorable
                impression on your audience.
              </Text>
              <Button
                backgroundColor="#0298DA"
                border="1px solid #0298DA"
                padding={{ base: "8% 5%", md: "5% 5%" }}
                borderRadius="10px"
                marginTop="2%"
                marginY="4%"
                color="white"
                fontSize={{ base: "14px", md: "16px" }}
              >
                Contact us
              </Button>
            </Box>
          </Flex>
        ) : (
          <Flex
            alignItems="center"
            style={{
              transition: "all 3s ease-in-out",
              transform: "translateX(-5%)",
            }}
            marginTop={{ base: "10%", md: "5%" }}
            marginBottom={{ base: "5%", md: "5%" }}
          >
            <Flex borderRadius="20px" justifyContent="flex-end">
              <Image
                boxShadow="0 4px 18px rgba(0, 0, 0, 0.3)"
                width={{ base: "100%", md: "80%" }}
                borderRadius="20px"
                src={service7}
              />
            </Flex>
            <Box
              padding="1% 2%"
              fontSize={{ base: "14px", md: "16px" }}
              fontWeight="600"
              color="white"
              backgroundColor="#0298DA"
              borderRadius="0 5px 5px 0"
              boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
              cursor="pointer"
              onClick={handleClick7}
              width={{ base: "50%", md: "fit-content" }}
            >
              <Text>CLick to View</Text>
            </Box>
          </Flex>
        )}
      </Flex>
    </Box>
  );
};

export default ServiceFlex;
