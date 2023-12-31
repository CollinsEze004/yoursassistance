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

const CardGallery = () => {
  return (
    <Flex direction="column" align="center" p="4" style={{ perspective: 1000 }}>
      <Flex className="container" wrap="wrap" justify="center">
        <Card>
          <Image src={service1} />
        </Card>

        <Card>
          <Image src={service2} />
        </Card>

        <Card>
          <Image src={service3} />
        </Card>

        <Card>
          <Image src={service4} />
        </Card>

        <Card>
          <Image src={service5} />
        </Card>

        <Card>
          <Image src={service6} />
        </Card>

        <Card>
          <Image src={service7} />
        </Card>

        <Card>
          <Image src={service8} />
        </Card>

        <Card>
          <Image src={service9} />
        </Card>
      </Flex>
    </Flex>
  );
};

export default CardGallery;
