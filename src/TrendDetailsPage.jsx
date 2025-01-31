import { useParams, useNavigate } from "react-router-dom";
import { ContentCard } from "./components/InstaPostCard";
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
      <InfoPopover
        title={"modalData.title"}
        sections={[{ header: "Alpha", content: "ihibibkjbijbijbibibibib" }]}
      />
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
export const AnalyticsSection = () => (
  <VStack spacing={4} align="stretch">
    {/* Posts Chart */}
    <Box bg="white" borderRadius="xl">
      <Flex justify="space-between" mb={4}>
        <Text fontSize="lg" fontWeight="bold">
          No. of Posts
        </Text>
        <InfoPopover
          title={"modalData.title"}
          sections={[{ header: "Alpha", content: "ihibibkjbijbijbibibibib" }]}
        />
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
                index === 0 || index === data.length - 1 ? value : ""
              }
            />
            <YAxis domain={[0, 100]} />
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
        <InfoPopover
          title={"modalData.title"}
          sections={[{ header: "Alpha", content: "ihibibkjbijbijbibibibib" }]}
        />
      </Flex>
      <VStack
        spacing={4}
        align="stretch"
        border="1px solid #000"
        p="12px"
        borderRadius={"lg"}
      >
        {locationData.map((location, index) => (
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
        <InfoPopover
          title={"modalData.title"}
          sections={[{ header: "Alpha", content: "ihibibkjbijbijbibibibib" }]}
        />
      </Flex>
      <Flex flexWrap="wrap" gap={2} justifyContent={"space-around"}>
        {brandsData.map((brand, index) => (
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
            <Text fontSize="xs" textAlign="center">
              {brand.name}
            </Text>
          </Box>
        ))}
      </Flex>
    </Box>
  </VStack>
);

// Content Section Component
const ContentSection = () => {
  return (
    <VStack spacing={6} align="stretch" h="100%">
      {/* Top Reels Content */}
      <Box h="100%">
        <Flex justify="space-between" mb={4}>
          <Text fontSize="lg" fontWeight="bold">
            Top Reels Content
          </Text>
          <InfoPopover
            title={"modalData.title"}
            sections={[{ header: "Alpha", content: "ihibibkjbijbijbibibibib" }]}
          />
        </Flex>
        <HStack overflowX={"auto"} w="100%">
          <ContentCard type="VIDEO" />
          <ContentCard type="VIDEO" />
          <ContentCard type="VIDEO" />
          <ContentCard type="VIDEO" />
        </HStack>
      </Box>

      {/* Top Posts Content */}
      <Box h="100%">
        <Flex justify="space-between" mb={4}>
          <Text fontSize="lg" fontWeight="bold">
            Top Posts Content
          </Text>
          <InfoPopover
            title={"modalData.title"}
            sections={[{ header: "Alpha", content: "ihibibkjbijbijbibibibib" }]}
          />
        </Flex>
        <HStack spacing={4} overflowX={"auto"} w="100%" h="100%">
          <ContentCard type="PHOTO" />
          <ContentCard type="PHOTO" />
          <ContentCard type="PHOTO" />
          <ContentCard type="PHOTO" />
        </HStack>
      </Box>

      {/* Top Creators */}
      <Box>
        <Flex justify="space-between" mb={4}>
          <Text fontSize="lg" fontWeight="bold">
            Top Creators
          </Text>
          <InfoPopover
            title={"modalData.title"}
            sections={[{ header: "Alpha", content: "ihibibkjbijbijbibibibib" }]}
          />
        </Flex>
        <Flex gap={4} overflowX="auto">
          {[1, 2, 3].map((index) => (
            <Card
              key={index}
              minW="142px"
              maxW="142px"
              minH="173px"
              maxH="173px"
              onClick={() => window.alert("redirect to creator profile")}
            >
              <CardBody
                border="1px solid #111111"
                borderRadius={"lg"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Stack align="center">
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
                  <Box ml={3}>
                    <Text fontSize="sm" fontWeight="bold">
                      Kitty Herman
                    </Text>
                    <Text fontSize="xs" color="gray.500">
                      @avneektkaur_13
                    </Text>
                    <Text fontSize="xs" color="gray.500">
                      13.5M Followers
                    </Text>
                  </Box>
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
              <Text fontSize="2xl" fontWeight="bold">
                {trendName?.toUpperCase()}
              </Text>
              <Text color="#00AB55" fontSize="sm">
                15.6% ↑ increase in a week
              </Text>
            </Stack>
          </HStack>
        </Box>

        <Tabs colorScheme="yellow">
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

          <TabPanels>
            <TabPanel>
              <AboutSection />
            </TabPanel>
            <TabPanel>
              <AnalyticsSection />
            </TabPanel>
            <TabPanel>
              <ContentSection />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </Box>
  );
};

export default TrendDetailsPage;
