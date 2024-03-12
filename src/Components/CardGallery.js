import React, { useState, useRef, useEffect } from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import service1 from "../Assets/Png/service1.png";
import service2 from "../Assets/Png/service2.png";
import service3 from "../Assets/Png/service3.png";
import service4 from "../Assets/Png/service4.png";
import service5 from "../Assets/Png/service5.png";
import service6 from "../Assets/Png/service6.png";
import service7 from "../Assets/Png/service7.png";
import service8 from "../Assets/Png/service8.png";
import service9 from "../Assets/Png/serviceMore.png";

const Card = ({ dataImage, children }) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  let mouseLeaveDelay = null;

  const cardRef = useRef();

  useEffect(() => {
    setWidth(cardRef.current.offsetWidth);
    setHeight(cardRef.current.offsetHeight);

    // Reset mouse position on component mount
    setMouseX(cardRef.current.offsetWidth / 2);
    setMouseY(cardRef.current.offsetHeight / 2);
  }, []);

  const calculateRotation = (coordinate, dimension) => {
    const center = dimension / 2;
    const maxRotation = 15; // Adjust the max rotation angle as needed
    const distanceFromCenter = coordinate - center;
    const rotation = (distanceFromCenter / center) * maxRotation;
    return rotation;
  };

  const cardStyle = {
    transform: `rotateY(${calculateRotation(
      mouseX,
      width
    )}deg) rotateX(${calculateRotation(mouseY, height)}deg)`,
  };

  const cardBgTransform = {
    transform: `translateX(${(mouseX / width) * -40}px) translateY(${
      (mouseY / height) * -40
    }px)`,
  };

  const handleMouseMove = (e) => {
    setMouseX(e.pageX - cardRef.current.offsetLeft);
    setMouseY(e.pageY - cardRef.current.offsetTop);
  };

  const handleMouseEnter = () => {
    clearTimeout(mouseLeaveDelay);
  };

  const handleMouseLeave = () => {
    mouseLeaveDelay = setTimeout(() => {
      setMouseX(width / 2);
      setMouseY(height / 2);
    }, 1000);
  };

  return (
    <Box
      className="card-wrap"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
      m="2" // Add margin to each card
    >
      <motion.div
        className="card"
        style={cardStyle}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      >
        <Box
          className="card-bg"
          style={{ ...cardBgTransform, backgroundImage: `url(${dataImage})` }}
        />
        <Box className="card-info">{children}</Box>
      </motion.div>
    </Box>
  );
};

const ServiceCard = ({ src }) => (
  <Card flexBasis={{ base: "100%", sm: "50%", md: "50%", lg: "33.33%" }}>
    <Image src={src} />
  </Card>
);

const CardGallery = () => {
  // Define the services and their corresponding image sources
  const services = [
    { id: 1, src: service1 },
    { id: 2, src: service2 },
    { id: 3, src: service3 },
    { id: 4, src: service4 },
    { id: 5, src: service5 },
    { id: 6, src: service6 },
    { id: 7, src: service7 },
    { id: 8, src: service8 },
    { id: 9, src: service9 },
  ];

  return (
    <Flex
      direction="column"
      align="center"
      p={{ base: "0", md: "4" }}
      style={{ perspective: 1000 }}
    >
      <Flex className="container" wrap="wrap" justify="center" flexDirection={{ base: "column", sm: "row", md: "row", lg: "row" }}>
        {services.map((service) => (
          <ServiceCard key={service.id} src={service.src} />
        ))}
      </Flex>
    </Flex>
  );
};

export default CardGallery;
