import React from "react";
import {
  Box,
  Flex,
  IconButton,
  Text,
  VStack,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  HStack,
  Badge,
  Image,
} from "@chakra-ui/react";
import { Menu, TrendingUp, Clock, ShoppingBag, Home } from "lucide-react";

const Sidebar = ({ containerRef }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeItem, setActiveItem] = React.useState("Content Trends");

  const menuItems = [
    {
      name: "Content Trends",
      icon: <TrendingUp size={20} />,
      comingSoon: false,
      bg: "yellow.50",
    },
    {
      name: "Topic Trends",
      icon: <Clock size={20} />,
      comingSoon: true,
      bg: "transparent",
    },
    {
      name: "Product Trends",
      icon: <ShoppingBag size={20} />,
      comingSoon: true,
      bg: "transparent",
    },
  ];

  const MenuItem = ({ item }) => (
    <Flex
      align="center"
      p={3}
      cursor="pointer"
      borderRadius="xl"
      bg={activeItem === item.name ? item.bg : "transparent"}
      _hover={{ bg: "gray.50" }}
      transition="all 0.2s"
      onClick={() => {
        if (!item.comingSoon) setActiveItem(item.name);
      }}
      opacity={item.comingSoon ? 0.5 : 1}
    >
      <Box mr={4} color={activeItem === item.name ? "black" : "gray.400"}>
        {item.icon}
      </Box>
      <Text
        fontWeight={activeItem === item.name ? "medium" : "normal"}
        color={activeItem === item.name ? "black" : "gray.500"}
      >
        {item.name}
      </Text>
      {/* {item.comingSoon && (
        <Badge ml="auto" colorScheme="blue" variant="subtle" fontSize="xs">
          COMING SOON
        </Badge>
      )} */}
    </Flex>
  );

  return (
    <>
      <IconButton
        icon={<Menu />}
        onClick={onOpen}
        variant="ghost"
        size="lg"
        aria-label="Open Menu"
        position="absolute"
        top="4"
        left="4"
        zIndex="10"
      />

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        portalProps={{ containerRef: containerRef }}
      >
        <DrawerOverlay />
        <DrawerContent position={"absolute !important"} left="-2 !important">
          <DrawerCloseButton />
          <DrawerHeader pb={4}>
            <Text color="gray.500" fontSize="sm" fontWeight="medium" mb={2}>
              {/* CATEGORY */}
            </Text>
          </DrawerHeader>

          <DrawerBody>
            <Text color="gray.500" fontSize="sm" fontWeight="medium" mb={2}>
              CATEGORY
            </Text>

            <VStack spacing={2} align="stretch">
              {/* <Text fontSize="sm" fontWeight="bold" color="gray.600">
                Available Now
              </Text> */}
              {menuItems
                .filter((item) => !item.comingSoon)
                .map((item, index) => (
                  <MenuItem key={index} item={item} />
                ))}
            </VStack>

            <VStack spacing={2} align="stretch" mt={4}>
              <Text fontSize="sm" fontWeight="bold" color="gray.600">
                Coming Soon
              </Text>
              {menuItems
                .filter((item) => item.comingSoon)
                .map((item, index) => (
                  <MenuItem key={index} item={item} />
                ))}
            </VStack>

            <Box position="absolute" bottom="8" left="0" right="0" px={6}>
              <Text color="gray.500" fontSize="sm" mb={4} textAlign="center">
                Last updated on 12:47am
              </Text>
              <Flex direction="column" align="center">
                <Text color="gray.500" fontSize="sm">
                  Powered by
                </Text>
                <HStack justifyContent={"center"} w="100%">
                  <Image
                    src="./assets/galleri5logo.svg"
                    alt="galleri5logo"
                    mt={"10px"}
                  />

                  <Text fontSize="xl" fontWeight="semibold">
                    Trends
                  </Text>
                </HStack>
              </Flex>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
