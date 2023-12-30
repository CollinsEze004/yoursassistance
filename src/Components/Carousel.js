import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import img1 from "../Assets/Png/project1.png";
import img2 from "../Assets/Png/project2.png";
import img3 from "../Assets/Png/project3.png";
import img4 from "../Assets/Png/project4.png";

const projects = [
  {
    imgSrc: img1,
    title: "The Two and The Bubbles",
    link: "http://www.example.com/project1",
    author: "Vlad Gerasimov",
    date: "2005",
  },
  {
    imgSrc: img2,
    title: "Christmas Ice Skating",
    link: "http://www.example.com/project2",
    author: "Vlad Gerasimov",
    date: "2008",
  },

  {
    imgSrc: img3,
    title: "Christmas Ice Skating",
    link: "http://www.example.com/project2",
    author: "Vlad Gerasimov",
    date: "2008",
  },

  {
    imgSrc: img4,
    title: "Christmas Ice Skating",
    link: "http://www.example.com/project2",
    author: "Vlad Gerasimov",
    date: "2008",
  },

  {
    imgSrc: img1,
    title: "Christmas Ice Skating",
    link: "http://www.example.com/project2",
    author: "Vlad Gerasimov",
    date: "2008",
  },

  {
    imgSrc: img2,
    title: "Christmas Ice Skating",
    link: "http://www.example.com/project2",
    author: "Vlad Gerasimov",
    date: "2008",
  },

  {
    imgSrc: img3,
    title: "Christmas Ice Skating",
    link: "http://www.example.com/project2",
    author: "Vlad Gerasimov",
    date: "2008",
  },
  // Add more project data as needed
];

const Carousel = () => {
  return (
    <Box marginTop="5%">
      <Box>
        <Text
          fontSize="64px"
          textAlign="center"
          color="#ED3237"
          fontWeight="700"
        >
          Projects
        </Text>
      </Box>
      <Flex p="30px">
        <Flex
          height="700px"
          paddingTop="70px"
          overflowX="scroll"
          overflowY="hidden"
          mb="30px"
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
              width="500px"
              height="400px"
              margin="70px 20px 0"
              padding="5px"
              borderRadius="20px"
              bgColor="white"
              fontSize="14px"
              position="relative"
              boxShadow="0px 10px 10px -5px rgba(0,0,0,0.5)"
              transition="all .3s ease, opacity 2s ease,  top 1s ease"
              _nthChild={{ even: { marginTop: "100px" } }}
              _hover={{
                height: "570px",
                padding: "15px",
                transform: "translateY(-68px)",
              }}
              style={{
                marginTop: index % 2 === 0 ? "0" : "90px",
              }}
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
                    width="450px"
                    height="360px"
                  />
                </Box>

                <Box
                  fontSize="20px"
                  fontWeight="600"
                  marginTop="2%"
                  display="unset"
                  _hover={{
                    display: "block",
                  }}
                >
                  <Text>{project.title}</Text>
                </Box>
              </Box>
              <Box
                className="date"
                zIndex="1"
                width="50px"
                height="30px"
                lineHeight="30px"
                color="#fff"
                fontWeight="bold"
                textAlign="center"
                borderRadius="1px"
                bgColor="#ED3237"
                position="absolute"
                bottom="30px"
                left="15px"
                transition="transform 0.5s cubic-bezier(0.12, 1.6, 0.91, 0.92)"
              >
                {project.date}
              </Box>
            </Box>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Carousel;
