import React, { useState } from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import yoursassistance from "../Assets/Png/yoursassistance.png";
import veracoth from "../Assets/Png/veracoth.png";
import vixtus from "../Assets/Png/vixtus.png";
import Xtraray from "../Assets/Png/Xtaray.png";
import softlink from "../Assets/Png/Softlink.png";
import capital from "../Assets/Png/capital.png";
import nnaoma from "../Assets/Png/nnaoma.png";
import ag from "../Assets/Png/ag.png";
import janeg from "../Assets/Png/janeg.png";
import img1 from "../Assets/Png/seedtime.png";
import img2 from "../Assets/Png/project1.png";
import img3 from "../Assets/Png/project2.png";
import img4 from "../Assets/Png/project3.png";
import img5 from "../Assets/Png/project4.png";
import { useMediaQuery } from "@chakra-ui/react";

const projects = [
  {
    imgSrc: yoursassistance,
    title: "Yoursassistance",
    link: "click to view project",
    services: "Branding, Content Creation, Graphics Design, UI/UX, Website",
    date: "12-2023",
  },
  {
    imgSrc: img1,
    title: "Seedtime Landscape",
    link: "click to view project",
    services: "Branding, Graphics Design, Website and UI/UX",
    date: "11-2023",
  },
  {
    imgSrc: veracoth,
    title: "Veracoth",
    link: "click to view project",
    services: "Branding, Content Creation, Graphics Design",
    date: "09-2023",
  },
  {
    imgSrc: vixtus,
    title: "Vixtus Direct Living",
    link: "click to view project",
    services: "Branding, Content Creation, Graphics Design",
    date: "09-2023",
  },

  {
    imgSrc: img3,
    title: "Coastwide Church",
    link: "Click to view Project",
    services: "Branding, Graphics design, Content creation ",
    date: "08-2022",
  },

  {
    imgSrc: img4,
    title: "Dreadit",
    link: "Click to view Project",
    services: "Branding Graphics design",
    date: "07-2022",
  },
  {
    imgSrc: softlink,
    title: "Softlink",
    link: "Click to view Project",
    services: "Branding, Graphics design ",
    date: "09-2021",
  },

  {
    imgSrc: img5,
    title: "Adirebyteeny",
    link: "Click to view Project",
    services: "Branding, Graphics design ",
    date: "10-2021",
  },
  {
    imgSrc: img2,
    title: "Charis God",
    link: "click to view project",
    services: "Branding, Content Creation, Graphics Design",
    date: "07-2022",
  },

  {
    imgSrc: Xtraray,
    title: "Xtraray",
    link: "click to view project",
    services: "Branding, Content Creation, Graphics Design",
    date: "06-2021",
  },

  {
    imgSrc: capital,
    title: "Capital Global Trade",
    link: "click to view project",
    services: "Branding, Content Creation, Graphics Design",
    date: "03-2021",
  },

  {
    imgSrc: nnaoma,
    title: "Nnaoma Global Ventures",
    link: "click to view project",
    services: "Branding, Content Creation, Graphics Design",
    date: "02-2021",
  },
  {
    imgSrc: ag,
    title: "AG Global",
    link: "click to view project",
    services: "Branding, Graphics Design",
    date: "01-2021",
  },
  {
    imgSrc: janeg,
    title: "Jane G Fashion Empire",
    link: "click to view project",
    services: "Branding, Graphics Design",
    date: "02-2021",
  },
  // Add more project data as needed
];

const Carousel = () => {
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
      <Box>
        <Text
          fontSize={{ base: "32px", md: "64px" }}
          textAlign="center"
          color="#ED3237"
          fontWeight="700"
        >
          Projects
        </Text>
      </Box>
      <Flex p={{base: "5px",md:"30px"}}>
        <Flex
          height={{base: "580px", md:"780px"}}
          paddingTop="10%"
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
                      height: "640px",
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
                    backgroundColor="#ED3237"
                    color="white"
                    padding="2% 2%"
                    borderRadius="10px"
                    marginTop="2%"
                  >
                    {project.title}
                  </Text>
                  <Text
                    width={{ base: "80%", md: "100%" }}
                    padding="2% 2%"
                    fontSize={{ base: "14px", md: "16px" }}
                  >
                    {project.services}
                  </Text>
                  <Button
                    backgroundColor="white"
                    border="1px solid #0298DA"
                    padding="5.5% 5%"
                    borderRadius="10px"
                    marginTop="2%"
                    marginY="4%"
                    color="#0298DA"
                  >
                    Click to view
                  </Button>
                </Box>
              </Box>
              <Box
                className="date"
                zIndex="1"
                width="100px"
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
