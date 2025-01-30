// TrendsListPage.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ContentCard } from "./components/InstaPostCard";
import {
  Box,
  Flex,
  Text,
  VStack,
  HStack,
  IconButton,
  Container,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Stack,
  Button,
  Image,
} from "@chakra-ui/react";
import {
  ChevronDown,
  ChevronUp,
  Clock,
  TrendingUp,
  TrendingDown,
} from "lucide-react";
import Sidebar from "./components/SideBar";

const FilterDropdown = ({ value, onChange }) => {
  const options = [
    {
      label: "Emerging Trends",
      icon: <TrendingUp size={18} />,
      value: "emerging",
    },
    { label: "Popular Trends", icon: <Clock size={18} />, value: "popular" },
    {
      label: "Declining Trends",
      icon: <TrendingDown size={18} />,
      value: "declining",
    },
  ];

  const selectedOption =
    options.find((opt) => opt.value === value) || options[0];

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDown size={18} />}
        w="full"
        textAlign="left"
        bg="white"
        borderRadius="lg"
        borderWidth="1px"
        borderColor="gray.200"
        _hover={{ bg: "gray.50" }}
        fontSize="sm"
        h="40px"
      >
        {selectedOption.label}
      </MenuButton>
      <MenuList borderRadius="lg">
        {options.map((option) => (
          <MenuItem
            key={option.value}
            onClick={() => onChange(option.value)}
            py={2}
            px={3}
          >
            <HStack spacing={3}>
              {option.icon}
              <Text>{option.label}</Text>
            </HStack>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

// Time Range Dropdown Component
const TimeRangeDropdown = ({ value, onChange }) => {
  const options = [
    { label: "7 days", value: "7d" },
    { label: "15 days", value: "15d" },
    { label: "30 days", value: "30d" },
  ];

  const selectedOption =
    options.find((opt) => opt.value === value) || options[0];

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDown size={18} />}
        w="150px"
        textAlign="left"
        bg="white"
        borderRadius="lg"
        borderWidth="1px"
        borderColor="gray.200"
        _hover={{ bg: "gray.50" }}
        fontSize="sm"
        h="40px"
      >
        {selectedOption.label}
      </MenuButton>
      <MenuList borderRadius="lg">
        {options.map((option) => (
          <MenuItem
            key={option.value}
            onClick={() => onChange(option.value)}
            py={2}
            px={3}
          >
            {option.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

const categories = [
  { id: 1, name: "Fashion", icon: "/assets/fashionimage.svg" },
  { id: 2, name: "Beauty", icon: "/assets/beautyimage.svg" },
  { id: 3, name: "Home", icon: "/assets/homeimage.svg" },
  { id: 4, name: "Kitchen", icon: "/assets/kitchenimage.svg" },
  { id: 5, name: "Lifestyle", icon: "/assets/lifestyleimage.svg" },
  { id: 6, name: "Pets", icon: "/assets/petsimage.svg" },
  { id: 7, name: "Parenting", icon: "/assets/parentingimage.svg" },
  { id: 8, name: "Fitness", icon: "/assets/fitnessimage.svg" },
];

const TrendCard = ({
  title,
  percentage,
  isExpanded,
  onToggle,
  onClick,
  posts,
  selectedTimeRange,
  selectedTrendType,
}) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="xl"
      p={4}
      mb={3}
      bg="white"
      w="100%"
      borderColor="gray.200"
      cursor="pointer"
      _hover={{
        transform: "translateY(-2px)",
        transition: "all 0.2s",
      }}
    >
      <Flex justify="space-between" align="center" onClick={onToggle}>
        <HStack spacing={4} justifyContent={"space-between"} w="100%">
          <Stack spacing={0}>
            <Text fontSize="l" fontWeight="bold">
              {title}
            </Text>
            <Text
              color={
                selectedTrendType === "declining" ? "red.500" : "green.500"
              }
              fontSize="sm"
            >
              {percentage}{" "}
              {selectedTrendType === "declining" ? "decrease" : "increase"} in{" "}
              {selectedTimeRange === "7d"
                ? "a week"
                : selectedTimeRange === "15d"
                ? "the last 15 days"
                : "a month"}{" "}
            </Text>
          </Stack>
          <Button
            bg="black"
            color="white"
            fontSize={"sm"}
            _hover={{ bg: "#FFFAD6", color: "#000" }}
            onClick={onClick}
          >
            View Trend
          </Button>
        </HStack>
        <IconButton
          icon={
            isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />
          }
          variant="ghost"
          size="sm"
        />
      </Flex>

      {isExpanded && (
        <HStack spacing={4} overflowX={"auto"} w="100%" h="100%">
          {posts?.map((post, index) => (
            <ContentCard key={index} type={"video"} post={post} />
          ))}
        </HStack>
      )}
    </Box>
  );
};

const TrendsListPage = () => {
  const navigate = useNavigate();
  const [expandedCards, setExpandedCards] = React.useState([]);
  const [selectedTrendType, setSelectedTrendType] = React.useState("emerging");
  const [selectedTimeRange, setSelectedTimeRange] = React.useState("7d");
  const [selectedCategory, setSelectedCategory] = React.useState("Fashion");
  const containerRef = React.useRef(null);
  const [data, setData] = React.useState();

  console.log(selectedCategory, selectedTimeRange, selectedTrendType, data);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://amazon-api.indianetailer.in/amazon/homepage",
        {
          method: "POST",
          headers: {
            "x-api-key": "fake-duper-secret-key-6969",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            genre: selectedCategory,
            duration: selectedTimeRange,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const fetchData = await response.json();
      setData(fetchData);
      console.log("Response Data:", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [selectedCategory, selectedTimeRange]);

  const toggleCard = (rank, event) => {
    event.stopPropagation();
    setExpandedCards((prev) =>
      prev.includes(rank) ? prev.filter((r) => r !== rank) : [...prev, rank]
    );
  };

  const handleTrendClick = (title) => {
    navigate(`/trend/${encodeURIComponent(title.toLowerCase())}`);
  };
  if (data)
    return (
      <Box bg="gray.100" minH="100vh">
        <Container
          maxW="480px"
          p={0}
          bg="white"
          minH="100dvh"
          h={"100vh"}
          overflow="auto"
          ref={containerRef}
          position="relative"
          pb="100px"
        >
          <Sidebar containerRef={containerRef} />
          <Flex
            justify="space-between"
            align="center"
            backgroundColor={"#FFFAD6"}
            pt={4}
            h="120px"
          >
            <HStack justifyContent={"center"} w="100%">
              <Image
                src="./assets/galleri5logo.svg"
                alt="galleri5logo"
                mt={"10px"}
              />

              <Text fontSize="xl" fontWeight="semibold">
                Trends
              </Text>
            </HStack>
          </Flex>

          <Text
            color="gray.500"
            mb={3}
            fontSize="10px"
            fontWeight={"700"}
            px={4}
            pt="4"
          >
            CATEGORIES
          </Text>
          <Box px={4}>
            <HStack
              spacing={4}
              overflowX="auto"
              pt="2"
              // paddingRight={"20px"}
              // border={"2px solid red"}
            >
              {categories?.map((category) => (
                <Flex
                  key={category.id}
                  direction="column"
                  align="center"
                  bg={
                    selectedCategory === category.name ? "#FFFAD6" : "gray.50"
                  }
                  p={3}
                  borderRadius="xl"
                  minW="70px"
                  cursor="pointer"
                  onClick={() =>
                    setSelectedCategory(
                      selectedCategory === category.name ? null : category.name
                    )
                  }
                  position="relative"
                  transition="all 0.2s"
                  _hover={{
                    bg: "yellow.50",
                    transform: "translateY(-2px)",
                  }}
                  border={
                    selectedCategory === category.name
                      ? "2px solid #fffad6a5"
                      : "2px solid transparent"
                  }
                  gap="1"
                >
                  <Image src={category.icon} w="21px" h="16px" />
                  <Text
                    fontSize="xs"
                    mt={1}
                    fontWeight={
                      selectedCategory === category.name ? "bold" : "normal"
                    }
                  >
                    {category.name}
                  </Text>
                </Flex>
              ))}
            </HStack>
          </Box>
          <Box
            pt="4"
            position={"sticky !important"}
            top="0"
            zIndex={"999"}
            backdropFilter="blur(10px)"
            backgroundBlendMode="overlay"
            backgroundColor="#ffffff7d"
          >
            <Box>
              <Box>
                <Text
                  color="gray.500"
                  mb={3}
                  fontSize="10px"
                  fontWeight={"700"}
                  px={4}
                >
                  FILTERS
                </Text>
                <Flex pb={3} gap={4} px={4} borderBottom={"2px solid #e4e4e4"}>
                  <Box flex={1}>
                    <FilterDropdown
                      value={selectedTrendType}
                      onChange={setSelectedTrendType}
                    />
                  </Box>
                  <TimeRangeDropdown
                    value={selectedTimeRange}
                    onChange={setSelectedTimeRange}
                  />
                </Flex>
              </Box>
            </Box>
          </Box>
          <VStack spacing={4} align="stretch" mb={6} px={4} pt="4">
            {data[selectedTrendType].map((item, index) => (
              <TrendCard
                key={item.id}
                rank={index + 1}
                title={item.name}
                percentage={item.growth}
                isExpanded={expandedCards?.includes(index)}
                onToggle={(e) => toggleCard(index, e)}
                onClick={() => handleTrendClick(item?.name)}
                posts={item.posts}
                selectedTimeRange={selectedTimeRange}
                selectedTrendType={selectedTrendType}
              />
            ))}
          </VStack>
        </Container>
      </Box>
    );

  return (
    <VStack h="100vh" w="100vw" justifyContent={"center"}>
      <Text>loading....</Text>
    </VStack>
  );
};

export default TrendsListPage;
