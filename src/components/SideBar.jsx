import React, { useState, useEffect } from "react";
import { Menu, TrendingUp, Contact, NotebookTabs } from "lucide-react";
import { createPortal } from "react-dom";
import {
  IconButton,
  Box,
  Text,
  VStack,
  HStack,
  Stack,
  Image,
  Flex,
} from "@chakra-ui/react";
import "./Sidebar.css";

const Sidebar = ({ containerRef, activeItem, setActiveItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!containerRef?.current) return;

    if (isOpen) {
      const scrollY = containerRef.current.scrollTop;
      containerRef.current.style.overflow = "hidden";
      containerRef.current.style.top = `-${scrollY}px`;
    } else {
      const scrollY = containerRef.current.style.top;
      containerRef.current.style.overflow = "auto";
      containerRef.current.style.position = "relative";
      containerRef.current.style.top = "";
      containerRef.current.scrollTop = parseInt(scrollY || "0") * -1;
    }
  }, [isOpen, containerRef]);

  useEffect(() => {
    return () => {
      if (containerRef?.current) {
        containerRef.current.style.overflow = "auto";
        containerRef.current.style.position = "relative";
        containerRef.current.style.top = "";
      }
    };
  }, [containerRef]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const handleContentClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  const menuItems = [
    {
      name: "Content Trends",
      icon: <NotebookTabs size={16} />,
      comingSoon: false,
      bg: "amber",
    },
    {
      name: "Product Trends",
      icon: <Contact size={16} />,
      comingSoon: false,
      bg: "amber",
    },
    {
      name: "Topic Trends",
      icon: <TrendingUp size={16} />,
      comingSoon: false,
      bg: "amber",
    },
  ];

  const MenuItem = ({ item }) => (
    <Flex
      align="center"
      p={3}
      cursor="pointer"
      borderRadius="xl"
      bg={
        activeItem === item.name && item.bg === "amber"
          ? "#FFFAD6"
          : "transparent"
      }
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

  const SidebarContent = () => (
    <>
      <IconButton
        icon={<Menu size={24} />}
        onClick={() => setIsOpen(true)}
        position="absolute"
        top={8}
        left={4}
        variant="ghost"
        aria-label="Open Menu"
        zIndex={10}
      />

      <div
        className={`backdrop ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`drawer ${isOpen ? "active" : ""}`}
        onClick={handleContentClick}
      >
        <Box
          className="drawer-content"
          bg="white"
          opacity={1}
          backdropFilter="blur(100px)"
          borderRightRadius="lg"
          borderRight="1px solid"
          borderRightColor="gray.200"
        >
          <Box p={4} />

          <Stack justify="space-between" h="calc(100% - 4rem)" p={4}>
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

              {menuItems.filter((item) => item.comingSoon).length > 0 && (
                <VStack spacing={2} align="stretch" mt={4}>
                  <Text fontSize="sm" color="gray.400">
                    COMING SOON
                  </Text>
                  {menuItems
                    .filter((item) => item.comingSoon)
                    .map((item, index) => (
                      <MenuItem key={index} item={item} />
                    ))}
                </VStack>
              )}
            </Stack>

            <Box px={6}>
              <Text
                color="gray.500"
                fontSize="sm"
                mb={4}
                textAlign="center"
                maxW="200px"
                mx="auto"
              >
                Last updated on Feb 18, 2025, 7 PM
              </Text>

              <Flex direction="column" align="center">
                <Text color="gray.500" fontSize="sm">
                  Powered by
                </Text>
                <HStack justify="center" w="100%" mt={2}>
                  <Image
                    src="./assets/galleri5logo.svg"
                    alt="galleri5logo"
                    mt={2}
                  />
                  <Text fontSize="xl" fontWeight="semibold">
                    Trends
                  </Text>
                </HStack>
              </Flex>
            </Box>
          </Stack>
        </Box>
      </div>
    </>
  );

  return (
    <Box className="sidebar-wrapper">
      {containerRef?.current ? (
        createPortal(<SidebarContent />, containerRef.current)
      ) : (
        <SidebarContent />
      )}
    </Box>
  );
};

export default Sidebar;
