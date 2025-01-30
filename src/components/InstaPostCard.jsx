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
import { Heart, MessageSquare, ExternalLink, Images, Star } from "lucide-react";

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
          top="20"
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
          border="1px solid #000000"
        >
          <CardBody paddingY="10px" paddingX="0px">
            <Flex
              align="center"
              mb={3}
              px={4}
              onClick={() => {
                window.alert("will redirect to insta");
              }}
            >
              <Box position={"relative"}>
                <Avatar size="sm" src="/api/placeholder/32/32" />
                <Image
                  src="../../assets/insta.png"
                  alt="insta"
                  position={"absolute"}
                  bottom={"0"}
                  right="0"
                />
              </Box>
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
                zIndex="3"
              />
            </Flex>

            <Box
              position="relative"
              mb={4}
              h="238px"
              w="100%"
              overflow={"hidden"}
            >
              <Image
                src="../../assets/demo.png"
                alt="Content"
                w="full"
                draggable={false}
                style={{
                  WebkitUserSelect: "none",
                  userSelect: "none",
                }}
              />
              <Stack position="absolute" bottom={0} left={-1} gap="1">
                <Badge
                  bg="#FAC912"
                  color="black"
                  fontSize="8.61px"
                  px={2}
                  py={1}
                  zIndex="1"
                  maxW="63px"
                  borderRadius={"6px"}
                  display={"flex"}
                  alignItems={"center"}
                  gap={1}
                >
                  <Images size="10px" /> {type}
                </Badge>
                <Badge
                  bg="#4BDB93"
                  color="black"
                  fontSize="8.61px"
                  px={2}
                  py={1}
                  zIndex="1"
                  borderRadius={"6px"}
                  display={"flex"}
                  alignItems={"center"}
                  gap={1}
                >
                  <Star size="10px" fill="#000000" /> Aesthetic score - 9.5{" "}
                </Badge>
              </Stack>
            </Box>

            <HStack spacing={6} color="gray.500" pt={4} px={4}>
              <HStack spacing={1}>
                <Heart size={14} fill="#5A5B5F" />
                <Text fontSize="sm" color="#5A5B5F">
                  566
                </Text>
              </HStack>
              <HStack spacing={1}>
                <MessageSquare size={14} fill="#5A5B5F" />
                <Text fontSize="sm" color="#5A5B5F">
                  50
                </Text>
              </HStack>
            </HStack>
            <Text fontWeight={"400"} fontSize={"12.27px"} mt={1} px={4}>
              {"Lorem ipsum dolor sit amet, consect adipiscing elit. Erat sempersagittis".slice(
                0,
                90
              )}
              ...
            </Text>
          </CardBody>
        </Card>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent bg="transparent" boxShadow="none" h="400px">
          <ModalBody p={0} display="flex" justifyContent="center">
            <Stack
              w="100%"
              backdropFilter="blur(10px)"
              backgroundBlendMode="overlay"
              backgroundColor="#ffffff7d"
              minH="340px"
              minW="260px"
              maxH="60vh"
              m="10px"
              p="10px"
              borderRadius={"xl"}
              overflowY={"auto"}
              overflowX={"hidden"}
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
                  zIndex="3"
                />
              </Flex>

              <Box position="relative" mb={3} objectFit={"fill"}>
                <Image
                  src="assets/transformationimage.svg"
                  alt="Content"
                  borderRadius="lg"
                  w="100%"
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
                {/* <HStack spacing={1}>
                  <Eye size={14} />
                  <Text fontSize="sm">10k</Text>
                </HStack> */}
                <HStack spacing={1}>
                  <Heart size={14} fill="#5A5B5F" />
                  <Text fontSize="sm">566</Text>
                </HStack>
                <HStack spacing={1}>
                  <MessageSquare size={14} fill="#5A5B5F" />
                  <Text fontSize="sm">50</Text>
                </HStack>
              </HStack>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
