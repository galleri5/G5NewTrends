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
  Badge,
  IconButton,
  Progress,
  Avatar,
  Card,
  CardBody,
} from "@chakra-ui/react";
import {
  ArrowLeft,
  Eye,
  Heart,
  MessageCircle,
  Info,
  ExternalLink,
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis } from "recharts";

// Sample data for the posts chart
const postData = [
  { month: "Jan", posts: 0 },
  { month: "Feb", posts: 20 },
  { month: "Mar", posts: 40 },
  { month: "Apr", posts: 60 },
  { month: "May", posts: 80 },
  { month: "Jun", posts: 37 },
];

// Sample data for locations
const locationData = [
  { city: "Bangalore", percentage: 75 },
  { city: "Mumbai", percentage: 50 },
  { city: "New Delhi", percentage: 25 },
  { city: "Jaipur", percentage: 5 },
  { city: "Pune", percentage: 25 },
];

// Sample data for brands
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
      <IconButton
        icon={<Info size={18} />}
        variant="ghost"
        size="sm"
        colorScheme="gray"
      />
    </Flex>
    <Text fontSize="sm" color="gray.600" mb={3}>
      Bold and oversized blazers dominate this season, blending structure with
      comfort. Paired with sleek trousers or casual jeans, this versatile trend
      redefines power dressing, adding a chic edge look.
    </Text>
    <Button variant="link" colorScheme="yellow" size="sm">
      See More
    </Button>
  </Box>
);

// Analytics Section Component
const AnalyticsSection = () => (
  <VStack spacing={4} align="stretch">
    {/* Posts Chart */}
    <Box bg="white" borderRadius="xl" p={4}>
      <Flex justify="space-between" mb={4}>
        <Text fontSize="lg" fontWeight="bold">
          No. of Posts
        </Text>
        <IconButton
          icon={<Info size={18} />}
          variant="ghost"
          size="sm"
          colorScheme="gray"
        />
      </Flex>
      <Box h="200px">
        <LineChart width={350} height={200} data={postData}>
          <XAxis dataKey="month" />
          <YAxis />
          <Line
            type="monotone"
            dataKey="posts"
            stroke="#ECC94B"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </Box>
    </Box>

    {/* Location Demographics */}
    <Box bg="white" borderRadius="xl" p={4}>
      <Flex justify="space-between" mb={4}>
        <Text fontSize="lg" fontWeight="bold">
          Location Demographics
        </Text>
        <IconButton
          icon={<Info size={18} />}
          variant="ghost"
          size="sm"
          colorScheme="gray"
        />
      </Flex>
      <VStack spacing={4} align="stretch">
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
        <IconButton
          icon={<Info size={18} />}
          variant="ghost"
          size="sm"
          colorScheme="gray"
        />
      </Flex>
      <Flex flexWrap="wrap" gap={2}>
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
          <IconButton
            icon={<Info size={18} />}
            variant="ghost"
            size="sm"
            colorScheme="gray"
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
          <IconButton
            icon={<Info size={18} />}
            variant="ghost"
            size="sm"
            colorScheme="gray"
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
          <IconButton
            icon={<Info size={18} />}
            variant="ghost"
            size="sm"
            colorScheme="gray"
          />
        </Flex>
        <Flex gap={4} overflowX="auto">
          {[1, 2, 3].map((index) => (
            <Card key={index} minW="200px">
              <CardBody>
                <Flex align="center">
                  <Avatar size="md" src={`/api/placeholder/48/48`} />
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
                    ml="auto"
                  />
                </Flex>
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
      <Container maxW="480px" p={0} bg="white" h="100vh" overflow="auto">
        {/* Header */}
        <Box p={4} borderBottomWidth="1px" bg="white">
          <Flex align="center" justify="space-between">
            <HStack spacing={4}>
              <IconButton
                icon={<ArrowLeft size={20} />}
                variant="ghost"
                aria-label="Back"
                onClick={() => navigate(-1)}
              />
              <Text fontSize="2xl" fontWeight="bold">
                {trendName?.toUpperCase() || "ASMR"}
              </Text>
            </HStack>
            <Text color="green.500" fontSize="sm">
              15.6% ↑
            </Text>
          </Flex>
        </Box>

        {/* Tabs */}
        <Tabs colorScheme="yellow">
          <TabList px={4}>
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
