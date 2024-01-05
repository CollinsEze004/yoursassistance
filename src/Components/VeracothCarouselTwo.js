import React, { useState } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import img1 from "../Assets/Veracoth/mock1.jpg";
import img2 from "../Assets/Veracoth/mock2.jpg";
import img3 from "../Assets/Veracoth/mock3.jpg";
import img4 from "../Assets/Veracoth/mock4.jpg";
import img5 from "../Assets/Veracoth/mock5.jpg";
import img6 from "../Assets/Veracoth/mock6.jpg";

import { useMediaQuery } from "@chakra-ui/react";

const projects = [
  {
    imgSrc: img1,
  },
  {
    imgSrc: img2,
  },
  {
    imgSrc: img3,
  },
  {
    imgSrc: img4,
  },
  {
    imgSrc: img5,
  },
  {
    imgSrc: img6,
  },

  // Add more project data as needed
];

const CarouselTwo = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const [isHovered, setIsHovered] = useState(
    Array(projects.length).fill(false)
  );

  const handleMouseEnter = (index) => {
    const newHoverState = [...isHovered];
    newHoverState[index] = true;
    setIsHovered(newHoverState);
  };

  const handleMouseLeave = (index) => {
    const newHoverState = [...isHovered];
    newHoverState[index] = false;
    setIsHovered(newHoverState);
  };

  return (
    <Box marginTop="5%">
      <Text fontSize="20px" fontWeight="600" marginBottom="2%">
        Mock up Deliverables
      </Text>
      <Flex p={{ base: "5px", md: "10px 30px" }}>
        <Flex
          height={{ base: "580px", md: "680px" }}
          paddingTop="2%"
          overflowX="scroll"
          overflowY="hidden"
          //   mb="30px"
          css={{
            "&::-webkit-scrollbar": {
              width: "6px",
              height: "7px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#ED3237",
              borderRadius: "6px",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "#f1f1f1",
            },
          }}
        >
          {projects.map((project, index) => (
            <Box
              key={index}
              width={{ base: "300px", md: "500px" }}
              height={{ base: "270px", md: "400px" }}
              margin="70px 20px 0"
              padding="5px"
              borderRadius="20px"
              bgColor="white"
              fontSize="14px"
              position="relative"
              boxShadow="0px 10px 10px -5px rgba(0,0,0,0.5)"
              transition="all .3s ease, opacity 2s ease,  top 1s ease"
              _nthChild={{ even: { marginTop: "100px" } }}
              _hover={
                isMobile
                  ? {
                      height: "500px",
                      padding: "15px",
                      transform: "translateY(-68px)",
                    }
                  : {
                      height: "500px",
                      padding: "15px",
                      transform: "translateY(-68px)",
                    }
              }
              style={{
                marginTop: index % 2 === 0 ? "0" : "90px",
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <Box
                as="figure"
                width="450px"
                height="100%"
                margin="0"
                padding="0"
              >
                <Box width="100%" position="relative">
                  <Image
                    src={project.imgSrc}
                    alt={`Project ${index + 1}`}
                    width={{ base: "280px", md: "450px" }}
                    height={{ base: "230px", md: "360px" }}
                    borderRadius="20px"
                  />
                </Box>

                <Box
                  fontSize={{ base: "16px", md: "20px" }}
                  fontWeight="600"
                  paddingTop="3%"
                  opacity={isHovered[index] ? 1 : 0}
                  width={{ base: "60%", md: "100%" }}
                >
                  <Text
                    backgroundColor="#0298DA"
                    color="white"
                    padding="2% 2%"
                    borderRadius="10px"
                    marginTop="2%"
                  >
                    {project.title}
                  </Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default CarouselTwo;
