import { Stack, HStack, Text, Image, VStack } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useState } from "react";

const listOfContent = [
  { title: "All" },
  { title: "Reels" },
  { title: "Photos" },
];

const optionsOfTrendingNow = [
  {
    img: "/assets/engagementsimage.svg",
    title: "Recent Posts",
    key: "recentPosts",
  },
  {
    img: "/assets/Impressionsimage.svg",
    title: "Top Engagement Posts",
    key: "topEngagementPosts",
  },
];

function ContentInspiration({
  data,
  onSelectContent,
  selectedContent,
  showContentGallery,
  onSelectPostsFilter,
  selectPostsFilter,
}) {
  const [showImpressions, setShowImpressions] = useState(false);

  // Get current posts based on filter
  const currentPosts =
    selectPostsFilter === "Recent Posts"
      ? data?.recentPosts || []
      : data?.topEngagementPosts || [];

  // Filter posts based on content type
  const filteredPosts =
    selectedContent === "All"
      ? currentPosts
      : currentPosts.filter(
          (post) => post.postType === selectedContent.toUpperCase()
        );

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, "") + "k";
    }
    return num.toString();
  };

  return (
    <Stack padding={showContentGallery ? "" : "20px"}>
      <HStack alignItems="center" justifyContent="space-between">
        <Text fontSize="16px" fontWeight="700" color="rgba(0, 0, 0, 1)">
          {showContentGallery
            ? "Content Inspirations Gallery"
            : "Content Inspirations for you"}
        </Text>
        <Image src="/assets/rightarrowicon.svg" alt="arrow" />
      </HStack>

      <HStack w="100%" mt="10px">
        {listOfContent?.map((content) => (
          <Text
            key={content.title}
            onClick={() => onSelectContent(content?.title)}
            background={
              content?.title === selectedContent ? "rgba(251, 221, 107, 1)" : ""
            }
            padding="6px 8px"
            border="1px solid black"
            borderRadius="128px"
            fontSize="12px"
            fontWeight="600"
            color="rgba(0, 0, 0, 1)"
            cursor="pointer"
          >
            {content.title}
          </Text>
        ))}
      </HStack>

      {showContentGallery && (
        <HStack
          marginTop="20px"
          justifyContent="space-between"
          position="relative"
        >
          <HStack>
            <Image
              w="16px"
              h="16px"
              src="/assets/rankedimage.svg"
              alt="content"
            />
            <Text fontSize="12px" fontWeight="600" color="rgba(0, 0, 0, 1)">
              Ranked By
            </Text>
          </HStack>

          <HStack
            onClick={() => setShowImpressions(!showImpressions)}
            cursor="pointer"
          >
            <Text fontSize="12px" fontWeight="600" color="rgba(0, 0, 0, 1)">
              {selectPostsFilter}
            </Text>
            <Image
              w="16px"
              h="16px"
              src="/assets/dropdownlogo.svg"
              alt="content"
            />
          </HStack>

          {showImpressions && (
            <VStack
              position="absolute"
              top="100%"
              right="0"
              borderWidth="1px"
              padding="12px"
              borderRadius="8px"
              background="rgba(255, 255, 255, 1)"
              minW="230px"
              borderColor="rgba(0, 0, 0, 1)"
              zIndex={10}
              boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)"
            >
              {optionsOfTrendingNow.map((option) => (
                <HStack
                  key={option.key}
                  onClick={() => {
                    onSelectPostsFilter(option?.title);
                    setShowImpressions(false);
                  }}
                  background={
                    option?.title === selectPostsFilter
                      ? "rgba(251, 221, 107, 1)"
                      : ""
                  }
                  padding="12px"
                  w="100%"
                  borderRadius="8px"
                  cursor="pointer"
                >
                  <Image
                    w="16px"
                    h="16px"
                    src={option.img}
                    alt={option.title}
                  />
                  <Text
                    fontWeight="600"
                    color="rgba(0, 0, 0, 1)"
                    fontSize="14px"
                  >
                    {option.title}
                  </Text>
                </HStack>
              ))}
            </VStack>
          )}
        </HStack>
      )}

      <Stack
        display={showContentGallery ? "grid" : "flex"}
        gridTemplateColumns={showContentGallery ? "repeat(3, 1fr)" : ""}
        flexDirection={showContentGallery ? "" : "row"}
        gap="16px"
        mt="20px"
        overflowX={showContentGallery ? "visible" : "auto"}
      >
        {filteredPosts.map((post) => (
          <Stack
            key={post.shortcode}
            position="relative"
            cursor="pointer"
            onClick={() =>
              window.open(
                `https://www.instagram.com/p/${post.shortcode}`,
                "_blank"
              )
            }
            _hover={{ opacity: 0.9 }}
          >
            <video
              src={post.imageUrl}
              style={{
                width: "100%",
                height: "148px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
              controls={false}
              muted
              loop
              playsInline
            />
            {selectPostsFilter === "Top Engagement Posts" && (
              <Text
                position="absolute"
                bottom="8px"
                right="8px"
                bg="blackAlpha.500"
                color="white"
                fontSize="12px"
                px="2"
                py="1"
                borderRadius="4px"
              >
                {formatNumber(post.engagement)}
              </Text>
            )}
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}

ContentInspiration.propTypes = {
  data: PropTypes.shape({
    recentPosts: PropTypes.array,
    topEngagementPosts: PropTypes.array,
  }),
  onSelectContent: PropTypes.func.isRequired,
  selectedContent: PropTypes.string.isRequired,
  showContentGallery: PropTypes.bool.isRequired,
  onSelectPostsFilter: PropTypes.func.isRequired,
  selectPostsFilter: PropTypes.string.isRequired,
};

export default ContentInspiration;
