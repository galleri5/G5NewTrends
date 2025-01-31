import React from "react";
import {
  Box,
  Flex,
  IconButton,
  Text,
  VStack,
  Drawer,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  HStack,
  Stack,
  Image,
} from "@chakra-ui/react";
import { Menu, TrendingUp, Contact, NotebookTabs } from "lucide-react";

const Sidebar = ({ containerRef }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeItem, setActiveItem] = React.useState("Content Trends");

  const handleContentClick = (e) => {
    // If the click target is the DrawerContent itself (not its children),
    // close the drawer
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const menuItems = [
    {
      name: "Content Trends",
      icon: <NotebookTabs size={18} />,
      comingSoon: false,
      bg: "#FFFAD6",
    },
    {
      name: "Topic Trends",
      icon: <TrendingUp size={18} />,
      comingSoon: true,
      bg: "transparent",
    },
    {
      name: "Product Trends",
      icon: <Contact size={18} />,
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
        top="8"
        left="4"
        zIndex="10"
      />

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        position={"absolute !important"}
        portalProps={{ containerRef: containerRef }}
      >
        <DrawerOverlay />
        <DrawerContent
          position={"relative !important"}
          maxW={"480px"}
          background={"transparent"}
          onClick={handleContentClick}
        >
          <VStack
            maxW={"300px"}
            backdropFilter="blur(10px)"
            backgroundBlendMode="overlay"
            backgroundColor="#ffffffe0"
            h="100%"
            position={"relative"}
            borderRightRadius={10}
          >
            <DrawerHeader pb={4}>
              <Text
                color="gray.500"
                fontSize="sm"
                fontWeight="medium"
                mb={2}
              ></Text>
            </DrawerHeader>
            {/* <DrawerCloseButton
              position={"absolute !important"}
              size={"xl"}
              top={4}
              right={4}
            /> */}

            <Stack justifyContent={"space-between"} h="100%" mb="4">
              <Stack>
                <Text color="gray.500" fontSize="sm" fontWeight="medium" mb={2}>
                  CATEGORY
                </Text>

                <VStack spacing={2} align="stretch">
                  {menuItems
                    .filter((item) => !item.comingSoon)
                    .map((item, index) => (
                      <MenuItem key={index} item={item} />
                    ))}
                </VStack>

                <VStack spacing={2} align="stretch" mt={4}>
                  <Text fontSize="sm" color="gray.400">
                    COMING SOON{" "}
                  </Text>
                  {menuItems
                    .filter((item) => item.comingSoon)
                    .map((item, index) => (
                      <MenuItem key={index} item={item} />
                    ))}
                </VStack>
              </Stack>
              <Box px={6}>
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
            </Stack>
          </VStack>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
