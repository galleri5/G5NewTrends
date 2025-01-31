import { useParams, useNavigate, useLocation } from "react-router-dom";
import { ContentCard } from "./components/InstaPostCard";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import {
  Box,
  Container,
  Flex,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Image,
  HStack,
  VStack,
  Button,
  IconButton,
  Progress,
  Avatar,
  Card,
  Stack,
  CardBody,
} from "@chakra-ui/react";
import InfoPopover from "./components/InfoModal";
import { ExternalLink, ChevronLeft } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
} from "recharts";
import React from "react";
const data = [
  { name: "Jan", value: 5 },
  { name: "Feb", value: 20 },
  { name: "Mar", value: 40 },
  { name: "Apr", value: 80 },
  { name: "May", value: 37 },
];

const locationData = [
  { city: "Bangalore", percentage: 75 },
  { city: "Mumbai", percentage: 50 },
  { city: "New Delhi", percentage: 25 },
  { city: "Jaipur", percentage: 5 },
  { city: "Pune", percentage: 25 },
];

const brandsData = [
  { name: "Synergy", logo: "/api/placeholder/40/40" },
  { name: "Procter & Gamble", logo: "/api/placeholder/40/40" },
  { name: "Pepsi", logo: "/api/placeholder/40/40" },
  { name: "McDonalds", logo: "/api/placeholder/40/40" },
  { name: "Synergy", logo: "/api/placeholder/40/40" },
  { name: "P&G", logo: "/api/placeholder/40/40" },
];

// About Section Component
const AboutSection = () => (
  <Box bg="white" borderRadius="xl" p={4}>
    <Flex justify="space-between" mb={4}>
      <Text fontSize="lg" fontWeight="bold">
        About this trend
      </Text>

      <InfoPopover>
        <Text fontSize="sm" color="gray.600">
          Hello
        </Text>
      </InfoPopover>
    </Flex>
    <Stack
      border="1px solid #000"
      p="3"
      borderRadius="lg"
      alignItems={"flex-start"}
    >
      <Text fontSize="sm" color="gray.600" mb={3}>
        {"Bold and oversized blazers dominate this season, blending structure with comfort. Paired with sleek trousers or casual jeans, this versatile trend redefines power dressing, adding a chic edge look.".slice(
          0,
          300
        )}
      </Text>
      <Button variant="link" color="#CFA817" size="sm" textAlign={"left"}>
        See More
      </Button>
    </Stack>
  </Box>
);

// Analytics Section Component
export const AnalyticsSection = ({ graphData, locData, brands }) => {
  const months = ["Jan", "Feb", "Mar"];
  const data = Object.entries(graphData?.post_counts).map(
    ([key, value], index) => ({
      name: key,
      value: value,
    })
  );
  return (
    <VStack spacing={4} align="stretch">
      {/* Posts Chart */}
      <Box bg="white" borderRadius="xl">
        <Flex justify="space-between" mb={4}>
          <Text fontSize="lg" fontWeight="bold">
            No. of Posts
          </Text>

          <InfoPopover>
            <Text fontSize="sm" color="gray.600">
              Hello
            </Text>
          </InfoPopover>
        </Flex>

        <Box
          border="1px solid black"
          borderRadius="12px"
          py={4}
          paddingRight={10}
          width="100%"
        >
          <ResponsiveContainer width="100%" height={290}>
            <LineChart data={data}>
              <CartesianGrid vertical={false} horizontal={true} />
              <XAxis
                dataKey="name"
                tickFormatter={(value, index) =>
                  (index === 0 && graphData?.startDate) ||
                  (index === data.length - 1 && graphData?.endDate) ||
                  ""
                }
              />
              <YAxis domain={[0, 10]} />
              <Line
                type="monotone"
                dataKey="value"
                stroke="gold"
                strokeWidth={3}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </Box>

      {/* Location Demographics */}
      <Box bg="white" borderRadius="xl">
        <Flex justify="space-between" mb={4}>
          <Text fontSize="lg" fontWeight="bold">
            Location Demographics
          </Text>
          <InfoPopover>
            <Text fontSize="sm" color="gray.600">
              Info
            </Text>
          </InfoPopover>
        </Flex>
        <VStack
          spacing={4}
          align="stretch"
          border="1px solid #000"
          p="12px"
          borderRadius={"lg"}
        >
          {Object.entries(locData)
            .map(([city, percentage]) => ({
              city,
              percentage,
            }))
            .map((location, index) => (
              <Box key={index}>
                <Flex justify="space-between" mb={1}>
                  <Text fontSize="sm">{location.city}</Text>
                  <Text fontSize="sm">{location.percentage}%</Text>
                </Flex>
                <Progress
                  value={location.percentage}
                  size="sm"
                  colorScheme="yellow"
                  borderRadius="full"
                />
              </Box>
            ))}
        </VStack>
      </Box>

      {/* Brands Associated */}
      <Box bg="white" borderRadius="xl" p={4}>
        <Flex justify="space-between" mb={4}>
          <Text fontSize="lg" fontWeight="bold">
            Brands Associated
          </Text>
          <InfoPopover>
            <Text fontSize="sm" color="gray.600">
              Hello
            </Text>
          </InfoPopover>
        </Flex>
        <Flex flexWrap="wrap" gap={2} justifyContent={"space-around"}>
          {brands?.map((brand, index) => (
            <Box
              key={index}
              borderWidth="1px"
              borderRadius="lg"
              p={3}
              w="100px"
              h="100px"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Image src={brand.logo} alt={brand.name} boxSize="40px" mb={2} />
              <Text fontSize="xs" textAlign="center" fontWeight={"700"}>
                {brand}
              </Text>
            </Box>
          ))}
        </Flex>
      </Box>
    </VStack>
  );
};

// Content Section Component
const ContentSection = ({ content, creators }) => {
  const formatNumber = (number) => {
    if (number >= 1e9) {
      return (number / 1e9).toFixed(1) + "B";
    } else if (number >= 1e6) {
      return (number / 1e6).toFixed(1) + "M";
    } else if (number >= 1e3) {
      return (number / 1e3).toFixed(1) + "K";
    } else {
      return number.toString();
    }
  };
  return (
    <VStack spacing={6} align="stretch" h="100%">
      {/* Top Reels Content */}
      <Box h="100%">
        <Flex justify="space-between" mb={4}>
          <Text fontSize="lg" fontWeight="bold">
            Top Reels Content
          </Text>
          <InfoPopover>
            <Text fontSize="sm" color="gray.600">
              Info
            </Text>
          </InfoPopover>
        </Flex>
        {content?.reels.length > 0 ? (
          <HStack overflowX={"auto"} w="100%">
            {content?.reels?.map((post, index) => (
              <ContentCard key={index} type={"video"} post={post} />
            ))}
          </HStack>
        ) : (
          <Text>No Reels Content Found</Text>
        )}
      </Box>

      {/* Top Posts Content */}
      <Box h="100%">
        <Flex justify="space-between" mb={4}>
          <Text fontSize="lg" fontWeight="bold">
            Top Posts Content
          </Text>
          <InfoPopover>
            <Text fontSize="sm" color="gray.600">
              Hello
            </Text>
          </InfoPopover>
        </Flex>
        {content?.feed?.length > 0 ? (
          <HStack spacing={4} overflowX={"auto"} w="100%" h="100%">
            {content?.feed?.map((post, index) => (
              <ContentCard key={index} type={"video"} post={post} />
            ))}
          </HStack>
        ) : (
          <Text>No Posts Content Found</Text>
        )}
      </Box>

      {/* Top Creators */}
      <Box>
        <Flex justify="space-between" mb={4}>
          <Text fontSize="lg" fontWeight="bold">
            Top Creators
          </Text>
          <InfoPopover>
            <Text fontSize="sm" color="gray.600">
              Hello
            </Text>
          </InfoPopover>
        </Flex>
        <Flex gap={4} overflowX="auto">
          {creators?.map((creator, index) => (
            <Card
              key={index}
              minW="142px"
              maxW="142px"
              minH="173px"
              maxH="173px"
              onClick={() =>
                window.open(`https://www.instagram.com/${creator?.ou}/`)
              }
            >
              <CardBody
                border="1px solid #111111"
                borderRadius={"lg"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                p={1}
                overflow={"hidden"}
              >
                <Stack align="center" overflow={"hidden"}>
                  <Box position={"relative"}>
                    <Avatar
                      size="md"
                      src={`https://gallerify.s3-us-west-2.amazonaws.com/ipics/${creator?.ou}.jpg`}
                      border="1px solid grey"
                    ></Avatar>
                  </Box>
                  <Stack>
                    <Text
                      fontSize="sm"
                      fontWeight="bold"
                      textAlign={"center"}
                      style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {creator?.name.slice(0, 12)}{" "}
                      {creator?.name.length > 12 ? "..." : ""}
                    </Text>
                    <Text fontSize="xs" color="gray.500" textAlign={"center"}>
                      @{creator?.ou}
                    </Text>
                    <Text fontSize="xs" color="gray.500" textAlign={"center"}>
                      {formatNumber(creator?.fc)} Followers
                    </Text>
                  </Stack>
                  <IconButton
                    icon={<ExternalLink size={16} />}
                    variant="ghost"
                    size="sm"
                    position={"absolute"}
                    right={2}
                    top={2}
                  />
                </Stack>
              </CardBody>
            </Card>
          ))}
        </Flex>
      </Box>
    </VStack>
  );
};

// Main TrendDetailsPage Component
const TrendDetailsPage = () => {
  const { trendName } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get("selectedCategory");
  const selectedTimeRange = queryParams.get("selectedTimeRange");
  const selectedTrendType = queryParams.get("selectedTrendType");
  const growth = queryParams.get("growth");
  const [data, setData] = React.useState();

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = React.useCallback(async () => {
    try {
      const response = await fetch(
        "https://amazon-api.indianetailer.in/amazon/trend-data",
        {
          method: "POST",
          headers: {
            "x-api-key": "fake-duper-secret-key-6969",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            genre: selectedCategory,
            duration: selectedTimeRange,
            trend_type: selectedTrendType,
            trend: trendName,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const fetchedData = await response.json();
      setData(fetchedData);
      console.log(fetchedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  });
  return (
    <Box bg="gray.100" minH="100vh">
      <Container
        maxW="480px"
        p={0}
        bg="white"
        minH="100dvh"
        h={"100vh"}
        overflow="auto"
        pb="100px"
      >
        <Box
          borderBottomWidth="1px"
          bg="white"
          position={"sticky !important"}
          top="0"
          zIndex={"999"}
          backdropFilter="blur(10px)"
          backgroundBlendMode="overlay"
          backgroundColor="#ffffff7d"
        >
          <HStack
            pt="8"
            pb="6"
            align="center"
            zIndex={"999"}
            backdropFilter="blur(10px)"
            backgroundBlendMode="overlay"
            bg="#FFFAD6"
            position={"relative"}
            justifyContent={"center"}
          >
            <IconButton
              icon={<ChevronLeft size={24} />}
              variant="ghost"
              aria-label="Back"
              onClick={() => navigate(-1)}
              position={"absolute"}
              left="2"
            />
            <Stack alignItems={"center"} gap="0">
              <Stack maxW="96%" alignItems={"center"}>
                <Text fontSize="2xl" fontWeight="bold" textAlign={"center"}>
                  {trendName?.toUpperCase()}
                </Text>
                <Text
                  color={
                    selectedTrendType === "declining" ? "red.500" : "green.500"
                  }
                  fontSize="sm"
                >
                  {growth} change in{" "}
                  {selectedTimeRange === "7d"
                    ? "the last week"
                    : selectedTimeRange === "15d"
                    ? "the last 15 days"
                    : "the last 30 days"}{" "}
                </Text>
              </Stack>
            </Stack>
          </HStack>
        </Box>

        <Tabs colorScheme="yellow" h="100%">
          <TabList
            px={6}
            pt="4"
            position={"sticky !important"}
            top="28"
            zIndex={"999"}
            backdropFilter="blur(10px)"
            backgroundBlendMode="overlay"
            backgroundColor="#ffffff7d"
            border={"none"}
            display={"flex"}
            justifyContent={"space-between"}
          >
            <Tab>About</Tab>
            <Tab>Analytics</Tab>
            <Tab>Content</Tab>
          </TabList>

          {data ? (
            <TabPanels>
              <TabPanel>
                <AboutSection />
              </TabPanel>
              <TabPanel>
                <AnalyticsSection
                  graphData={data?.analytics}
                  locData={data?.location_demographics}
                  brands={data?.brands_associated}
                />
              </TabPanel>
              <TabPanel>
                <ContentSection
                  content={data?.content}
                  creators={data?.creators}
                />
              </TabPanel>
            </TabPanels>
          ) : (
            <VStack justifyContent={"center"} alignItems={"center"} h="80%">
              <VStack>
                <DotLottieReact
                  src="https://lottie.host/58be6e20-5a21-4e6f-b08e-5425639c5ab4/u6YqH3nMRh.lottie"
                  loop
                  autoplay
                />
              </VStack>
            </VStack>
          )}
        </Tabs>
      </Container>
    </Box>
  );
};

export default TrendDetailsPage;
