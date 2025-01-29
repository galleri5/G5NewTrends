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
} from "@chakra-ui/react";
import { Menu, TrendingUp, Clock, Home, ShoppingBag } from "lucide-react";

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const menuItems = [
    { name: "Content Trends", icon: <TrendingUp size={20} /> },
    { name: "Topic Trends", icon: <Clock size={20} /> },
    { name: "Product Trends", icon: <ShoppingBag size={20} /> },
    { name: "Home", icon: <Home size={20} /> },
  ];

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

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            <HStack>
              <Text
                fontSize="xl"
                fontWeight="bold"
                bgGradient="linear(to-r, yellow.400, yellow.600)"
                bgClip="text"
              >
                galleri5
              </Text>
              <Text fontSize="xl" fontWeight="semibold">
                Trends
              </Text>
            </HStack>
          </DrawerHeader>

          <DrawerBody>
            <VStack spacing={4} align="stretch" mt={4}>
              {menuItems.map((item, index) => (
                <Flex
                  key={index}
                  align="center"
                  p={3}
                  cursor="pointer"
                  borderRadius="lg"
                  _hover={{ bg: "yellow.50" }}
                  transition="all 0.2s"
                >
                  <Box mr={4} color="gray.600">
                    {item.icon}
                  </Box>
                  <Text fontWeight="medium">{item.name}</Text>
                </Flex>
              ))}
            </VStack>

            <Box position="absolute" bottom="8" left="0" right="0" px={6}>
              <Flex direction="column" align="center">
                <Text color="gray.500" fontSize="sm">
                  Powered by
                </Text>
                <Text
                  fontSize="lg"
                  fontWeight="bold"
                  bgGradient="linear(to-r, yellow.400, yellow.600)"
                  bgClip="text"
                >
                  galleri5 Trends
                </Text>
              </Flex>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
