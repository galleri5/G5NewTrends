import { VStack, HStack, Image, Text, Badge, Skeleton } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const PersonalNarativesCard = ({ item, onClick, type, index }) => {
  const [fetchedData, setFetchedData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPostData(item?.shortcode);
  }, [item?.shortcode]);
  const fetchPostData = (postId) => {
    if (!postId || postId == "") return;
    setIsLoading(true);
    fetch(
      `https://api.galleri5.co.in/brandsprod/brands/instagram-thumbnail/${postId}`,
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjkyODg2OGRjNDRlYTZhOThjODhiMzkzZDM2NDQ1MTM2NWViYjMwZDgiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYW5hY3Jvbi0zMzQ2MTEiLCJhdWQiOiJhbmFjcm9uLTMzNDYxMSIsImF1dGhfdGltZSI6MTcyOTc0MzEyOCwidXNlcl9pZCI6IllpUUIwdnhKYnZhRmgwelQyNUFIY1JhMkV2aDIiLCJzdWIiOiJZaVFCMHZ4SmJ2YUZoMHpUMjVBSGNSYTJFdmgyIiwiaWF0IjoxNzMyNTYwOTI1LCJleHAiOjE3MzI1NjQ1MjUsImVtYWlsIjoibWFuamlyYS5iYXN1QHJpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWFuamlyYS5iYXN1QHJpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.lGzRBQAVV-2YTkuTIeHOZskyMUyG8iNNgt3flSjgu-dwh5tnvbcoO_V-XNxCh1m8CFEgXtz9-kAVyVY_6od7gf9DHh9ezuDnW_8BfvSt7COptcJtWkQ5Hhryq91Z3i4YB5AyC4lmVuP-TUZX5XrYNH5uFcLO-FseQERGVsGl_LN3FcsoRdFDOszBd5apomSnbsPJO17xZU6OemoMcRKa0USzG5AYlDed0H9VUJc3UErLdP-eosZhr87w3m69iCLDs_GuhkXLTRUYnniWBCIuzl4F9cfH0PzUVnAYeYbxd_YSUjEmKDj0CLoBbIjJLY2ZFk2nYEataVoelW6W0LYDMA",
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setFetchedData(data?.thumbnail || "");
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setIsLoading(false);
      });
  };

  return (
    <VStack
      minW={"130px"}
      minH={"150px"}
      gap={"12px"}
      align="center"
      position={"relative"}
    >
      <Badge
        bg="yellow.400"
        borderRadius="93px"
        px="8px"
        py="2px"
        fontWeight="bold"
        fontSize="12px"
        color="black"
        position={"absolute"}
        top={"2"}
        left={"1"}
      >
        #{index + 1}
      </Badge>

      <Skeleton
        loading={isLoading}
        w="96px"
        h="96px"
        objectFit="cover"
        borderRadius="53px"
      >
        {!isLoading && (
          <Image
            src={fetchedData}
            alt="Trend"
            w="96px"
            h="96px"
            objectFit="cover"
            border="1px solid rgba(0, 0, 0, 1)"
            borderRadius="53px"
            onClick={onClick}
          />
        )}
      </Skeleton>
      <Badge
        borderRadius="4px"
        padding={"2px 3px"}
        background={
          type == "emerging" || type == "popular"
            ? "rgba(99, 220, 161, 1)"
            : "rgba(237, 129, 106, 1)"
        }
        position="absolute"
        bottom="3rem"
        right="2.5rem"
        border="1px solid rgba(0, 0, 0, 1)"
        gap={"8px"}
      >
        <HStack align="center">
          <Image
            src={
              type == "emerging" || type == "popular"
                ? "/assets/uparrowicon.svg"
                : "/assets/downarrowicon.svg"
            }
            alt="Up Arrow"
            w="10px"
            h="10px"
          />
          <Text fontWeight={"700"} fontSize={"9px"} color={"rgba(0, 0, 0, 1)"}>
            {item.percentage}%
          </Text>
        </HStack>
      </Badge>

      <Text fontSize="12px" fontWeight="800" color="black" textAlign={"center"}>
        {item.name}
      </Text>
    </VStack>
  );
};

PersonalNarativesCard.propTypes = {
  item: PropTypes.object,
};

export default PersonalNarativesCard;
