import { Box, Button, Flex, Text, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import HeaderTwo from "../Components/HeaderTwo";
import ProjectCard from "../Components/ProjectCard";
import pageCover from "../Assets/Svg/pageCover.svg";
import Footer from "../Components/Footer";
import data from "../Utilities/Data";
import ProjectDetails from "./ProjectDetails";
import { useMediaQuery } from "@chakra-ui/react";

const Projects = () => {
  const [clicked, setClicked] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const handleDetails = (title, services, navlink) => {
    setSelectedProject({ title, services, navlink });
    setClicked(true);
  };

  const projectsPerPage = 4;
  const [visibleProjects, setVisibleProjects] = useState(projectsPerPage);

  const handleViewMore = () => {
    setVisibleProjects(
      (prevVisibleProjects) => prevVisibleProjects + projectsPerPage
    );
  };

  return (
    <Box>
      {clicked ? (
        <ProjectDetails
          title={selectedProject.title}
          services={selectedProject.services}
          navlink={selectedProject.navlink}
        />
      ) : (
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

            {isMobile ? (
              <Box>
                <Flex
                  marginTop="3%"
                  justifyContent="center"
                  alignItems="center"
                  width={{ base: "100%", md: "60%" }}
                  flexWrap={{ base: "wrap" }}
                >
                  <Button
                    backgroundColor="#0298DA"
                    border="1px solid #0298DA"
                    padding={{ base: "6% 6%", md: "3% 6%" }}
                    borderRadius="10px"
                    marginX="2%"
                    color="white"
                    colorScheme="messanger"
                    transition="1s ease-in"
                    fontSize={{ base: "12px", md: "16px" }}
                  >
                    All
                  </Button>
                  <Button
                    backgroundColor="white"
                    border="1px solid #0298DA"
                    padding={{ base: "6% 6%", md: "3% 6%" }}
                    borderRadius="10px"
                    marginX="2%"
                    color="#0298DA"
                    fontSize={{ base: "12px", md: "16px" }}
                  >
                    Brand Identity Design
                  </Button>
                  <Button
                    backgroundColor="white"
                    border="1px solid #0298DA"
                    padding={{ base: "6% 6%", md: "3% 6%" }}
                    borderRadius="10px"
                    marginX="2%"
                    color="#0298DA"
                    marginTop={{ base: "2%", md: "0" }}
                    fontSize={{ base: "12px", md: "16px" }}
                  >
                    Digital marketing
                  </Button>
                  <Button
                    backgroundColor="white"
                    border="1px solid #0298DA"
                    padding={{ base: "6% 6%", md: "3% 6%" }}
                    borderRadius="10px"
                    marginX="2%"
                    color="#0298DA"
                    fontSize={{ base: "12px", md: "16px" }}
                    marginTop={{ base: "2%", md: "0" }}
                  >
                    Web Development
                  </Button>

                  <Button
                    backgroundColor="white"
                    border="1px solid #0298DA"
                    padding={{ base: "6% 6%", md: "3% 6%" }}
                    borderRadius="10px"
                    marginX="2%"
                    color="#0298DA"
                    fontSize={{ base: "12px", md: "16px" }}
                    marginTop={{ base: "2%", md: "0" }}
                  >
                    UI/UX Design
                  </Button>
                  <Button
                    backgroundColor="white"
                    border="1px solid #0298DA"
                    padding={{ base: "6% 6%", md: "3% 6%" }}
                    borderRadius="10px"
                    marginX="2%"
                    color="#0298DA"
                    fontSize={{ base: "12px", md: "16px" }}
                    marginTop={{ base: "2%", md: "0" }}
                  >
                    Product Designs
                  </Button>
                  <Button
                    backgroundColor="white"
                    border="1px solid #0298DA"
                    padding={{ base: "6% 6%", md: "3% 6%" }}
                    borderRadius="10px"
                    marginX="2%"
                    color="#0298DA"
                    fontSize={{ base: "12px", md: "16px" }}
                    marginTop={{ base: "2%", md: "0" }}
                  >
                    Graphics Design
                  </Button>

                  <Button
                    backgroundColor="white"
                    border="1px solid #0298DA"
                    padding={{ base: "6% 6%", md: "3% 6%" }}
                    borderRadius="10px"
                    marginX="2%"
                    color="#0298DA"
                    marginTop={{ base: "2%", md: "0" }}
                    fontSize={{ base: "12px", md: "16px" }}
                  >
                    Content Design
                  </Button>
                  <Button
                    backgroundColor="white"
                    border="1px solid #0298DA"
                    padding={{ base: "6% 6%", md: "3% 6%" }}
                    borderRadius="10px"
                    marginX="2%"
                    color="#0298DA"
                    marginTop={{ base: "2%", md: "0" }}
                    fontSize={{ base: "12px", md: "16px" }}
                  >
                    Animations
                  </Button>
                </Flex>
              </Box>
            ) : (
              <Flex
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                textAlign="center"
                width="50%"
              >
                <Flex
                  marginTop="3%"
                  justifyContent="center"
                  alignItems="center"
                  width={{ base: "100%", md: "100%" }}
                  flexWrap={{ base: "wrap", md: "nowrap" }}
                >
                  <Button
                    backgroundColor="#0298DA"
                    border="1px solid #0298DA"
                    padding={{ base: "6% 8%", md: "3% 6%" }}
                    borderRadius="10px"
                    marginX="2%"
                    color="white"
                    colorScheme="messanger"
                    transition="1s ease-in"
                    fontSize={{ base: "14px", md: "16px" }}
                  >
                    All
                  </Button>
                  <Button
                    backgroundColor="white"
                    border="1px solid #0298DA"
                    padding={{ base: "6% 6%", md: "3% 6%" }}
                    borderRadius="10px"
                    marginX="2%"
                    color="#0298DA"
                    fontSize={{ base: "14px", md: "16px" }}
                  >
                    Brand Identity Design
                  </Button>
                  <Button
                    backgroundColor="white"
                    border="1px solid #0298DA"
                    padding={{ base: "6% 6%", md: "3% 6%" }}
                    borderRadius="10px"
                    marginX="2%"
                    color="#0298DA"
                    marginTop={{ base: "2%", md: "0" }}
                    fontSize={{ base: "14px", md: "16px" }}
                  >
                    Digital marketing
                  </Button>
                  <Button
                    backgroundColor="white"
                    border="1px solid #0298DA"
                    padding={{ base: "6% 6%", md: "3% 6%" }}
                    borderRadius="10px"
                    marginX="2%"
                    color="#0298DA"
                    fontSize={{ base: "14px", md: "16px" }}
                    marginTop={{ base: "2%", md: "0" }}
                  >
                    Web Development
                  </Button>
                </Flex>

                <Flex
                  marginTop="1.5%"
                  justifyContent="center"
                  alignItems="center"
                  flexWrap={{ base: "wrap", md: "nowrap" }}
                  width={{ base: "100%", md: "100%" }}
                >
                  <Button
                    backgroundColor="white"
                    border="1px solid #0298DA"
                    padding={{ base: "6% 8%", md: "3% 6%" }}
                    borderRadius="10px"
                    marginX="2%"
                    color="#0298DA"
                    fontSize={{ base: "14px", md: "16px" }}
                    marginTop={{ base: "2%", md: "0" }}
                  >
                    UI/UX Design
                  </Button>
                  <Button
                    backgroundColor="white"
                    border="1px solid #0298DA"
                    padding={{ base: "6% 8%", md: "3% 6%" }}
                    borderRadius="10px"
                    marginX="2%"
                    color="#0298DA"
                    fontSize={{ base: "14px", md: "16px" }}
                    marginTop={{ base: "2%", md: "0" }}
                  >
                    Product Designs
                  </Button>
                  <Button
                    backgroundColor="white"
                    border="1px solid #0298DA"
                    padding={{ base: "6% 8%", md: "3% 6%" }}
                    borderRadius="10px"
                    marginX="2%"
                    color="#0298DA"
                    fontSize={{ base: "14px", md: "16px" }}
                    marginTop={{ base: "2%", md: "0" }}
                  >
                    Graphics Design
                  </Button>
                </Flex>

                <Flex
                  marginTop="1.5%"
                  justifyContent="center"
                  width={{ base: "100%", md: "100%" }}
                  alignItems="center"
                  flexWrap={{ base: "wrap", md: "nowrap" }}
                >
                  <Button
                    backgroundColor="white"
                    border="1px solid #0298DA"
                    padding={{ base: "6% 8%", md: "3% 6%" }}
                    borderRadius="10px"
                    marginX="2%"
                    color="#0298DA"
                    marginTop={{ base: "2%", md: "0" }}
                  >
                    Content Design
                  </Button>
                  <Button
                    backgroundColor="white"
                    border="1px solid #0298DA"
                    padding={{ base: "6% 8%", md: "3% 6%" }}
                    borderRadius="10px"
                    marginX="2%"
                    color="#0298DA"
                    marginTop={{ base: "2%", md: "0" }}
                  >
                    Animations
                  </Button>
                </Flex>
              </Flex>
            )}
          </Flex>

          {isMobile ? (
            <Flex
              marginTop="5%"
              flexWrap="wrap"
              align="center"
              justifyContent="center"
            >
              {data.slice(0, visibleProjects).map((project, index) => (
                <ProjectCard
                  onClick={() => handleDetails(project.title, project.services)}
                  key={index}
                  date={project.date}
                  imageSrc={project.imgSrc}
                  services={project.services}
                  title={project.title}
                  navlink={project.titleNav}
                  style={{
                    marginTop: "20px",
                    textAlign: index % 2 === 0 ? "left" : "right",
                  }}
                />
              ))}
            </Flex>
          ) : (
            <Flex
              marginTop="5%"
              flexWrap="wrap"
              align="center"
              justifyContent="center"
            >
              {data.slice(0, visibleProjects).map((project, index) => (
                <ProjectCard
                  onClick={() => handleDetails(project.title, project.services, project.titleNav)}
                  key={index}
                  date={project.date}
                  imageSrc={project.imgSrc}
                  services={project.services}
                  title={project.title}
                  navlink={project.titleNav}
                  style={{
                    marginTop: index % 2 === 0 ? "0" : "90px",
                    textAlign: index % 2 === 0 ? "left" : "right",
                  }}
                />
              ))}
            </Flex>
          )}

          {visibleProjects < data.length && (
            <Box>
              <Button
                width="90%"
                marginX="5%"
                fontSize={{ base: "20px", md: "36px" }}
                backgroundColor="#0298DA"
                fontWeight="bold"
                paddingY={{ base: "8%", md: "3%" }}
                borderRadius="10px"
                color="white"
                colorScheme="red"
                transition="1s ease-in"
                onClick={handleViewMore}
                marginY={{ base: "5%", md: "5%" }}
              >
                View More
              </Button>
            </Box>
          )}

          <Flex justifyContent="center" marginTop="5%">
            <Image src={pageCover} />
          </Flex>
        </Box>
      )}

      <Footer />
    </Box>
  );
};

export default Projects;
