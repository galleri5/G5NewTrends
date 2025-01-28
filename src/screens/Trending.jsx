import React from "react";
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
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  ArrowLeft,
  Eye,
  Heart,
  MessageCircle,
  Info,
  ExternalLink,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

// Simulated data for the line chart
const postData = [
  { name: "Jan", posts: 0 },
  { name: "Feb", posts: 20 },
  { name: "Mar", posts: 40 },
  { name: "Apr", posts: 60 },
  { name: "May", posts: 80 },
  { name: "Jun", posts: 37 },
];

const TrendDetailsPage = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);
  const bgColor = useColorModeValue("white", "gray.800");

  const locationData = [
    { city: "Bangalore", percentage: 75 },
    { city: "Mumbai", percentage: 50 },
    { city: "New Delhi", percentage: 25 },
    { city: "Jaipur", percentage: 5 },
    { city: "Pune", percentage: 25 },
  ];

  const brands = [
    { name: "Synergy", logo: "/api/placeholder/40/40" },
    { name: "Procter & Gamble", logo: "/api/placeholder/40/40" },
    { name: "Pepsi", logo: "/api/placeholder/40/40" },
    { name: "McDonalds", logo: "/api/placeholder/40/40" },
    { name: "Synergy", logo: "/api/placeholder/40/40" },
    { name: "P&G", logo: "/api/placeholder/40/40" },
  ];

  const creators = [
    {
      name: "Kitty Herman",
      username: "@avneektkaur_13",
      followers: "13.5M",
      avatar: "/api/placeholder/40/40",
    },
    {
      name: "Robyn Koelpin",
      username: "@avneektkaur_13",
      followers: "13.5M",
      avatar: "/api/placeholder/40/40",
    },
  ];

  return (
    <Box bg="gray.100" minH="100vh">
      <Container maxW="480px" p={0} bg={bgColor} h="100vh" overflow="auto">
        {/* Header */}
        <Box p={4} borderBottomWidth="1px">
          <Flex align="center" justify="space-between">
            <HStack spacing={4}>
              <IconButton
                icon={<ArrowLeft size={20} />}
                variant="ghost"
                aria-label="Back"
              />
              <Text fontSize="2xl" fontWeight="bold">
                ASMR
              </Text>
            </HStack>
            <Text color="green.500" fontSize="sm">
              15.6% ↑
            </Text>
          </Flex>
        </Box>

        {/* Tabs */}
        <Tabs onChange={setSelectedTab} colorScheme="yellow">
          <TabList px={4}>
            <Tab>About</Tab>
            <Tab>Analytics</Tab>
            <Tab>Content</Tab>
          </TabList>

          <TabPanels>
            {/* About Tab */}
            <TabPanel>
              <Box p={4} bg="white" borderRadius="lg" mb={4}>
                <Flex justify="space-between" mb={2}>
                  <Text fontSize="lg" fontWeight="bold">
                    About this trend
                  </Text>
                  <Info size={18} />
                </Flex>
                <Text color="gray.600" fontSize="sm">
                  Bold and oversized blazers dominate this season, blending
                  structure with comfort. Paired with sleek trousers or casual
                  jeans, this versatile trend redefines power dressing, adding a
                  chic edge look.
                </Text>
                <Button variant="link" colorScheme="yellow" size="sm" mt={2}>
                  See More
                </Button>
              </Box>
            </TabPanel>

            {/* Analytics Tab */}
            <TabPanel>
              {/* Posts Chart */}
              <Box p={4} bg="white" borderRadius="lg" mb={4}>
                <Flex justify="space-between" mb={4}>
                  <Text fontSize="lg" fontWeight="bold">
                    No. of Posts
                  </Text>
                  <Info size={18} />
                </Flex>
                <Box h="200px">
                  <LineChart width={400} height={200} data={postData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
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
              <Box p={4} bg="white" borderRadius="lg" mb={4}>
                <Flex justify="space-between" mb={4}>
                  <Text fontSize="lg" fontWeight="bold">
                    Location Demographics
                  </Text>
                  <Info size={18} />
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
              <Box p={4} bg="white" borderRadius="lg" mb={4}>
                <Flex justify="space-between" mb={4}>
                  <Text fontSize="lg" fontWeight="bold">
                    Brands Associated
                  </Text>
                  <Info size={18} />
                </Flex>
                <Flex flexWrap="wrap" gap={4}>
                  {brands.map((brand, index) => (
                    <Box
                      key={index}
                      p={3}
                      borderWidth="1px"
                      borderRadius="lg"
                      w="100px"
                      textAlign="center"
                    >
                      <Image
                        src={brand.logo}
                        alt={brand.name}
                        boxSize="40px"
                        mx="auto"
                        mb={2}
                      />
                      <Text fontSize="xs">{brand.name}</Text>
                    </Box>
                  ))}
                </Flex>
              </Box>
            </TabPanel>

            {/* Content Tab */}
            <TabPanel>
              {/* Top Reels Content */}
              <Box mb={6}>
                <Flex justify="space-between" mb={4}>
                  <Text fontSize="lg" fontWeight="bold">
                    Top Reels Content
                  </Text>
                  <Info size={18} />
                </Flex>
                <VStack spacing={4}>
                  {[1, 2].map((item) => (
                    <Card key={item} w="full">
                      <CardBody>
                        <Flex align="center" mb={3}>
                          <Avatar
                            size="sm"
                            src="/api/placeholder/32/32"
                            mr={2}
                          />
                          <Box flex="1">
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
                          />
                        </Flex>
                        <Box position="relative">
                          <Image
                            src="/api/placeholder/400/500"
                            alt="Content"
                            borderRadius="lg"
                          />
                          <Badge
                            position="absolute"
                            top={2}
                            right={2}
                            colorScheme="yellow"
                          >
                            VIDEO
                          </Badge>
                        </Box>
                        <HStack mt={3} spacing={6} color="gray.500">
                          <HStack>
                            <Eye size={14} />
                            <Text fontSize="sm">10k</Text>
                          </HStack>
                          <HStack>
                            <Heart size={14} />
                            <Text fontSize="sm">566</Text>
                          </HStack>
                          <HStack>
                            <MessageCircle size={14} />
                            <Text fontSize="sm">50</Text>
                          </HStack>
                        </HStack>
                      </CardBody>
                    </Card>
                  ))}
                </VStack>
              </Box>

              {/* Top Creators */}
              <Box mb={6}>
                <Flex justify="space-between" mb={4}>
                  <Text fontSize="lg" fontWeight="bold">
                    Top Creators
                  </Text>
                  <Info size={18} />
                </Flex>
                <Flex gap={4} overflowX="auto">
                  {creators.map((creator, index) => (
                    <Card key={index} minW="200px">
                      <CardBody>
                        <Flex align="center">
                          <Avatar size="md" src={creator.avatar} mr={3} />
                          <Box>
                            <Text fontSize="sm" fontWeight="bold">
                              {creator.name}
                            </Text>
                            <Text fontSize="xs" color="gray.500">
                              {creator.username}
                            </Text>
                            <Text fontSize="xs" color="gray.500">
                              {creator.followers} Followers
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
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </Box>
  );
};

export default TrendDetailsPage;
