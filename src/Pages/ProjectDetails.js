import { Box, Text, Flex, Image } from "@chakra-ui/react";
import React from "react";
import Header from "../Components/HeaderTwo";
import Yoursassistance from "../Components/Yoursassistance";
import pageCover from "../Assets/Svg/pageCover.svg";
import Seedtime from "../Components/Seedtime";
import Veracoth from "../Components/Veracoth";
import Coastwide from "../Components/Coastwide";
import Dreadit from "../Components/Dreadit";
import Softlink from "../Components/Softlink";

const componentMapping = {
    Yoursassistance,
    Seedtime,
    Veracoth,
    Coastwide,
    Dreadit,
    Softlink
    // Add more components as needed
  };

  const ProjectDetails = ({ navlink, title }) => {
    const DynamicComponent = componentMapping[navlink];
  return (
    <Box marginX="5%">
      <Header />

      <Box>
        <Box textAlign="center" marginTop="5%" fontWeight="600">
          <Text fontSize={{ base: "32px", md: "36px" }} color="#393637">
            {title}
          </Text>
        </Box>
        
        {DynamicComponent && <DynamicComponent />}
        <Flex
          justifyContent="center"
          marginBottom={{ base: "15%", md: "0" }}
          marginTop={{ base: "10%", md: "5%" }}
          marginX="5%"
        >
          <Image width={{ base: "100%", md: "100%" }} src={pageCover} />
        </Flex>
      </Box>
    </Box>
  );
};

export default ProjectDetails;
