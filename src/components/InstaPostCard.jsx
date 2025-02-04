import { useRef, useState, useEffect } from "react";
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
  Skeleton,
} from "@chakra-ui/react";
import { Heart, MessageSquare, ExternalLink, Images, Star } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const thumbnailCache = new Map();

export const ContentCard = ({ type, post }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const timerRef = useRef(null);
  const [fetchedData, setFetchedData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const shortCode = post?.s;

  useEffect(() => {
    const fetchPostData = async () => {
      if (!shortCode) return;

      if (thumbnailCache.has(shortCode)) {
        setFetchedData(thumbnailCache.get(shortCode));

        return;
      }

      setIsLoading(true);
      try {
        const response = await fetch(
          `https://api.galleri5.co.in/brandsprod/brands/instagram-thumbnail/${shortCode}`,
          {
            method: "GET",
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjkyODg2OGRjNDRlYTZhOThjODhiMzkzZDM2NDQ1MTM2NWViYjMwZDgiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYW5hY3Jvbi0zMzQ2MTEiLCJhdWQiOiJhbmFjcm9uLTMzNDYxMSIsImF1dGhfdGltZSI6MTcyOTc0MzEyOCwidXNlcl9pZCI6IllpUUIwdnhKYnZhRmgwelQyNUFIY1JhMkV2aDIiLCJzdWIiOiJZaVFCMHZ4SmJ2YUZoMHpUMjVBSGNSYTJFdmgyIiwiaWF0IjoxNzMyNTYwOTI1LCJleHAiOjE3MzI1NjQ1MjUsImVtYWlsIjoibWFuamlyYS5iYXN1QHJpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWFuamlyYS5iYXN1QHJpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.lGzRBQAVV-2YTkuTIeHOZskyMUyG8iNNgt3flSjgu-dwh5tnvbcoO_V-XNxCh1m8CFEgXtz9-kAVyVY_6od7gf9DHh9ezuDnW_8BfvSt7COptcJtWkQ5Hhryq91Z3i4YB5AyC4lmVuP-TUZX5XrYNH5uFcLO-FseQERGVsGl_LN3FcsoRdFDOszBd5apomSnbsPJO17xZU6OemoMcRKa0USzG5AYlDed0H9VUJc3UErLdP-eosZhr87w3m69iCLDs_GuhkXLTRUYnniWBCIuzl4F9cfH0PzUVnAYeYbxd_YSUjEmKDj0CLoBbIjJLY2ZFk2nYEataVoelW6W0LYDMA",
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const thumbnail = data?.thumbnail || "";

        // Store in cache
        thumbnailCache.set(shortCode, thumbnail);
        setFetchedData(thumbnail);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setIsLoading(false);
      }
    };

    if (shortCode && !thumbnailCache.has(shortCode)) {
      fetchPostData();
    } else if (shortCode && thumbnailCache.has(shortCode)) {
      setFetchedData(thumbnailCache.get(shortCode));
    }
  }, [shortCode]);

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
          h="436px"
          w="270px"
          mr="10px"
          my="10px"
          position="relative"
          draggable={false}
          border="1px solid #000000"
        >
          <CardBody paddingY="10px" paddingX="0px">
            <Flex
              align="center"
              mb={3}
              px={4}
              onClick={() =>
                window.open(`https://www.instagram.com/p/${post?.s}`, "_blank")
              }
            >
              <Box position={"relative"}>
                <Avatar
                  size="sm"
                  src={`https://gallerify.s3-us-west-2.amazonaws.com/ipics/${post?.ou}.jpg`}
                />
                <Image
                  src="../../assets/insta.png"
                  alt="insta"
                  position={"absolute"}
                  bottom={"0"}
                  right="0"
                />
              </Box>
              <Box ml={2} flex={1} overflow={"hidden"}>
                <Text
                  fontSize="sm"
                  fontWeight="bold"
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {post?.name || ""}
                </Text>

                <Text fontSize="xs" color="gray.500">
                  @{post?.ou || ""}
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
              h="260px"
              w="100%"
              overflow={"hidden"}
            >
              {isLoading ? (
                <DotLottieReact
                  src="https://lottie.host/eece49fe-be1b-4719-bf9e-b9c05b7041d4/UwkV2RqYci.lottie"
                  loop
                  autoplay
                />
              ) : (
                <Skeleton
                  isLoaded={!isLoading}
                  w="full"
                  h="full"
                  endColor="#fac812aa"
                >
                  <Image
                    src={fetchedData}
                    alt="Content"
                    w="full"
                    draggable={false}
                    style={{
                      WebkitUserSelect: "none",
                      userSelect: "none",
                    }}
                  />
                </Skeleton>
              )}
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
                  <Images size="10px" /> {post?.p === "FEED" ? "POST" : "REEL"}
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
                  <Star size="10px" fill="#000000" /> Aesthetic score -{" "}
                  {post?.score}/10{" "}
                </Badge>
              </Stack>
            </Box>

            <HStack spacing={6} color="gray.500" px={4}>
              <HStack spacing={1}>
                <Heart size={14} fill="#5A5B5F" />
                <Text fontSize="sm" color="#5A5B5F">
                  {post?.l}
                </Text>
              </HStack>
              <HStack spacing={1}>
                <MessageSquare size={14} fill="#5A5B5F" />
                <Text fontSize="sm" color="#5A5B5F">
                  {post?.c}
                </Text>
              </HStack>
            </HStack>
            <Text fontWeight={"400"} fontSize={"12.27px"} mt={1} px={4}>
              {(post?.ca || "").slice(0, 90)} ...
            </Text>
          </CardBody>
        </Card>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent bg="transparent" boxShadow="none">
          <ModalBody p={0} display="flex" justifyContent="center">
            <Stack
              w="100%"
              backdropFilter="blur(10px)"
              backgroundBlendMode="overlay"
              backgroundColor="#ffffff7d"
              // minH="340px"
              // minW="260px"
              // // maxH="420px"
              // maxW="380px"
              m="10px"
              p="10px"
              borderRadius={"xl"}
              overflowY={"auto"}
              overflowX={"hidden"}
            >
              <Flex
                align="center"
                mb={3}
                px={4}
                onClick={() =>
                  window.open(
                    `https://www.instagram.com/p/${post?.s}`,
                    "_blank"
                  )
                }
              >
                <Box position={"relative"}>
                  <Avatar
                    size="sm"
                    src={`https://gallerify.s3-us-west-2.amazonaws.com/ipics/${post?.ou}.jpg`}
                  />
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
                    {post?.name || ""}
                  </Text>
                  <Text fontSize="xs" color="gray.500">
                    @{post?.ou || ""}
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
                w="100%"
                overflow={"hidden"}
                maxH={"50vh"}
              >
                <Skeleton
                  isLoaded={!isLoading}
                  w="full"
                  h="full"
                  endColor="#fac812aa"
                >
                  <Image
                    src={fetchedData}
                    // h="100%"
                    alt="Content"
                    w="full"
                    draggable={false}
                    style={{
                      WebkitUserSelect: "none",
                      userSelect: "none",
                    }}
                  />
                </Skeleton>
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
                    <Images size="10px" />{" "}
                    {post?.p === "FEED" ? "POST" : "REEL"}
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
                    <Star size="10px" fill="#000000" /> Aesthetic score -{" "}
                    {post?.score}/10{" "}
                  </Badge>
                </Stack>
              </Box>

              <HStack spacing={6} color="gray.500" px={4}>
                <HStack spacing={1}>
                  <Heart size={14} fill="#5A5B5F" />
                  <Text fontSize="sm" color="#5A5B5F">
                    {post?.l}
                  </Text>
                </HStack>
                <HStack spacing={1}>
                  <MessageSquare size={14} fill="#5A5B5F" />
                  <Text fontSize="sm" color="#5A5B5F">
                    {post?.c}
                  </Text>
                </HStack>
              </HStack>
              <Text fontWeight={"400"} fontSize={"12.27px"} mt={1} px={4}>
                {(post?.ca || "").slice(0, 90)} ...
              </Text>
            </Stack>
          </ModalBody>
          <HStack
            justifyContent={"center"}
            cursor={"pointer"}
            onClick={onClose}
          >
            <Text
              textColor={"red.400"}
              fontWeight={"600"}
              textAlign={"center"}
              backdropFilter="blur(10px)"
              backgroundBlendMode="overlay"
              backgroundColor="#ffffff7d"
              display={"inline"}
              maxW="100px"
              paddingX={"2"}
              borderRadius={"xl"}
            >
              Close
            </Text>
          </HStack>
        </ModalContent>
      </Modal>
    </>
  );
};
