import { useRef } from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  HStack,
  Badge,
  IconButton,
  Avatar,
  Card,
  CardBody,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { Eye, Heart, MessageCircle, ExternalLink } from "lucide-react";
import { AnalyticsSection } from "@/TrendDetailsPage";

export const ContentCard = ({ type }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const timerRef = useRef(null);

  const handlePointerDown = (e) => {
    e.preventDefault();
    timerRef.current = setTimeout(onOpen, 400);
  };

  const handlePointerUp = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Box position="relative">
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          zIndex="2"
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          onContextMenu={handleContextMenu}
          style={{
            background: "transparent",
            WebkitTapHighlightColor: "transparent",
          }}
        />

        <Card
          minH="340px"
          minW="260px"
          m="10px"
          position="relative"
          draggable={false}
        >
          <CardBody padding="10px">
            <Flex align="center" mb={3}>
              <Avatar size="sm" src="/api/placeholder/32/32" />
              <Box ml={2} flex={1}>
                <Text fontSize="sm" fontWeight="bold">
                  Skylar Voss
                </Text>
                <Text fontSize="xs" color="gray.500">
                  @g5SkylarVoss
                </Text>
              </Box>
              <IconButton
                icon={<ExternalLink size={16} />}
                variant="ghost"
                size="sm"
                zIndex="3" // Make sure the button is above the overlay
              />
            </Flex>

            <Box position="relative" mb={3} h="238px">
              <Image
                src="assets/transformationimage.svg"
                alt="Content"
                borderRadius="lg"
                w="full"
                draggable={false}
                style={{
                  WebkitUserSelect: "none",
                  userSelect: "none",
                }}
              />

              <Badge
                position="absolute"
                top={2}
                right={2}
                bg="yellow.400"
                color="black"
                fontSize="xs"
                px={2}
                py={1}
                zIndex="1"
              >
                {type}
              </Badge>
            </Box>

            <HStack spacing={6} color="gray.500">
              <HStack spacing={1}>
                <Eye size={14} />
                <Text fontSize="sm">10k</Text>
              </HStack>
              <HStack spacing={1}>
                <Heart size={14} />
                <Text fontSize="sm">566</Text>
              </HStack>
              <HStack spacing={1}>
                <MessageCircle size={14} />
                <Text fontSize="sm">50</Text>
              </HStack>
            </HStack>
          </CardBody>
        </Card>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent bg="transparent" boxShadow="none" h="400px">
          <ModalBody p={0} display="flex" justifyContent="center">
            <Stack
              bg="#fff"
              minH="340px"
              minW="260px"
              maxH="60vh"
              m="10px"
              p="10px"
              borderRadius={"xl"}
              overflowY={"auto"}
            >
              <Flex align="center" mb={3}>
                <Avatar size="sm" src="/api/placeholder/32/32" />
                <Box ml={2} flex={1}>
                  <Text fontSize="sm" fontWeight="bold">
                    Skylar Voss
                  </Text>
                  <Text fontSize="xs" color="gray.500">
                    @g5SkylarVoss
                  </Text>
                </Box>
                <IconButton
                  icon={<ExternalLink size={16} />}
                  variant="ghost"
                  size="sm"
                  zIndex="3" // Make sure the button is above the overlay
                />
              </Flex>

              <Box position="relative" mb={3} h="238px">
                <Image
                  src="assets/transformationimage.svg"
                  alt="Content"
                  borderRadius="lg"
                  w="full"
                  draggable={false}
                  style={{
                    WebkitUserSelect: "none",
                    userSelect: "none",
                  }}
                />

                <Badge
                  position="absolute"
                  top={2}
                  right={2}
                  bg="yellow.400"
                  color="black"
                  fontSize="xs"
                  px={2}
                  py={1}
                  zIndex="1"
                >
                  {type}
                </Badge>
              </Box>

              <HStack spacing={6} color="gray.500">
                <HStack spacing={1}>
                  <Eye size={14} />
                  <Text fontSize="sm">10k</Text>
                </HStack>
                <HStack spacing={1}>
                  <Heart size={14} />
                  <Text fontSize="sm">566</Text>
                </HStack>
                <HStack spacing={1}>
                  <MessageCircle size={14} />
                  <Text fontSize="sm">50</Text>
                </HStack>
              </HStack>
              <Stack mt="100px">
                <AnalyticsSection />
              </Stack>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
