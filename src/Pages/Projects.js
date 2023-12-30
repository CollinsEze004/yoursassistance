import { Box, Button, Flex, Text, Image, color } from "@chakra-ui/react";
import React, { useState } from "react";
import HeaderTwo from "../Components/HeaderTwo";
import ProjectCard from "../Components/ProjectCard";
import pageCover from "../Assets/Svg/pageCover.svg";
import Footer from "../Components/Footer";
import data from "../Utilities/Data";

const Projects = () => {
  const projectsPerPage = 4;
  const [visibleProjects, setVisibleProjects] = useState(projectsPerPage);

  const handleViewMore = () => {
    setVisibleProjects(
      (prevVisibleProjects) => prevVisibleProjects + projectsPerPage
    );
  };

  return (
    <Box>
      <Box paddingX="5%">
        <HeaderTwo />
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          marginTop="5%"
        >
          <Text fontSize="48px" fontWeight="bold" color="#0298DA">
            Projects
          </Text>
          <Flex
            marginTop="3%"
            justifyContent="center"
            width="60%"
            alignItems="center"
          >
            <Button
              backgroundColor="#0298DA"
              border="1px solid #0298DA"
              padding="3% 6%"
              borderRadius="10px"
              marginX="2%"
              color="white"
              colorScheme="messanger"
              transition="1s ease-in"
            >
              All
            </Button>
            <Button
              backgroundColor="white"
              border="1px solid #0298DA"
              padding="3% 6%"
              borderRadius="10px"
              marginX="2%"
              color="#0298DA"
            >
              Brand Identity Design
            </Button>
            <Button
              backgroundColor="white"
              border="1px solid #0298DA"
              padding="3% 6%"
              borderRadius="10px"
              marginX="2%"
              color="#0298DA"
            >
              Digital marketing
            </Button>
            <Button
              backgroundColor="white"
              border="1px solid #0298DA"
              padding="3% 6%"
              borderRadius="10px"
              marginX="2%"
              color="#0298DA"
            >
              Web Development
            </Button>
          </Flex>

          <Flex
            marginTop="1.5%"
            justifyContent="center"
            width="60%"
            alignItems="center"
          >
            <Button
              backgroundColor="white"
              border="1px solid #0298DA"
              padding="3% 6%"
              borderRadius="10px"
              marginX="2%"
              color="#0298DA"
            >
              UI/UX Design
            </Button>
            <Button
              backgroundColor="white"
              border="1px solid #0298DA"
              padding="3% 6%"
              borderRadius="10px"
              marginX="2%"
              color="#0298DA"
            >
              Product Designs
            </Button>
            <Button
              backgroundColor="white"
              border="1px solid #0298DA"
              padding="3% 6%"
              borderRadius="10px"
              marginX="2%"
              color="#0298DA"
            >
              Graphics Design
            </Button>
          </Flex>

          <Flex
            marginTop="1.5%"
            justifyContent="center"
            width="60%"
            alignItems="center"
          >
            <Button
              backgroundColor="white"
              border="1px solid #0298DA"
              padding="3% 6%"
              borderRadius="10px"
              marginX="2%"
              color="#0298DA"
            >
              Content Design
            </Button>
            <Button
              backgroundColor="white"
              border="1px solid #0298DA"
              padding="3% 6%"
              borderRadius="10px"
              marginX="2%"
              color="#0298DA"
            >
              Animations
            </Button>
          </Flex>
        </Flex>

        <Flex marginTop="5%" flexWrap="wrap" align="center" justifyContent="center">
          {data.slice(0, visibleProjects).map((project, index) => (
            <ProjectCard
              key={index}
              date={project.date}
              imageSrc={project.imgSrc}
              description={project.description}
              style={{
                marginTop: index % 2 === 0 ? "0" : "90px",
                textAlign: index % 2 === 0 ? "left" : "right",
              }}
            />
          ))}
        </Flex>

        {visibleProjects < data.length && (
          <Box>
            <Button
              width="90%"
              marginX="5%"
              fontSize="36px"
              backgroundColor="#0298DA"
              fontWeight="bold"
              paddingY="3%"
              borderRadius="10px"
              color="white"
              colorScheme="red"
              transition="1s ease-in"
              onClick={handleViewMore}
            >
              View More
            </Button>
          </Box>
        )}

        <Flex justifyContent="center" marginTop="5%">
          <Image src={pageCover} />
        </Flex>
      </Box>
      <Footer />
    </Box>
  );
};

export default Projects;
