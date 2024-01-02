import { Box, Text, Flex } from "@chakra-ui/react";
import React from "react";
import Header from "../Components/HeaderTwo";
import Carousel from "../Components/Carousel";

const ProjectDetails = ({ service, title }) => {
  return (
    <Box marginX="5%">
      <Header />

      <Box>
        <Box textAlign="center" marginTop="5%" fontWeight="600">
          <Text fontSize={{ base: "32px", md: "36px" }} color="#393637">
            {title}
          </Text>
        </Box>

        <Carousel />

        <Box>
          <Flex>
            <Box></Box>
            <Box>
              <Box></Box>
              <Box></Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectDetails;
