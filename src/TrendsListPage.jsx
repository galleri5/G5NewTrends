// TrendsListPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { ContentCard } from "./components/InstaPostCard";
import {
  Box,
  Flex,
  Text,
  VStack,
  Stack,
  HStack,
  Badge,
  IconButton,
  Container,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
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

const images = [
  "/api/placeholder/400/500",
  "/api/placeholder/400/500",
  "/api/placeholder/400/500",
  "/api/placeholder/400/500",
];
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

// Categories data with updated icons
const categories = [
  { id: 1, name: "Fashion", icon: "👗" },
  { id: 2, name: "Beauty", icon: "💄" },
  { id: 3, name: "Home", icon: "🏠" },
  { id: 4, name: "Kitchen", icon: "🍳" },
  { id: 5, name: "Lifestyle", icon: "✨" },
];

const TrendCard = ({
  rank,
  title,
  username,
  percentage,
  isExpanded,
  onToggle,
  onClick,
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
      onClick={onClick}
      cursor="pointer"
      _hover={{
        transform: "translateY(-2px)",
        transition: "all 0.2s",
      }}
    >
      <Flex justify="space-between" align="center">
        <HStack spacing={4}>
          <Text fontSize="2xl" fontWeight="bold">
            {title}
          </Text>
          <Text color="green.500" fontSize="sm">
            {percentage}% ↑
          </Text>
          <Badge
            colorScheme={
              rank === "1st" ? "yellow" : rank === "2nd" ? "gray" : "orange"
            }
            borderRadius="md"
            px={2}
          >
            {rank}
          </Badge>
        </HStack>
        <IconButton
          icon={
            isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />
          }
          onClick={onToggle}
          variant="ghost"
          size="sm"
        />
      </Flex>

      {isExpanded && (
        <HStack spacing={4} overflowX={"auto"} w="100%" h="100%">
          <ContentCard type={"photo"} />
          <ContentCard type={"photo"} />
          <ContentCard type={"photo"} />
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

  const toggleCard = (rank, event) => {
    event.stopPropagation();
    setExpandedCards((prev) =>
      prev.includes(rank) ? prev.filter((r) => r !== rank) : [...prev, rank]
    );
  };

  const handleTrendClick = (title) => {
    navigate(`/trend/${encodeURIComponent(title.toLowerCase())}`);
  };

  return (
    <Box bg="gray.100" minH="100vh">
      <Container
        maxW="480px"
        p={0}
        bg="white"
        h="100vh"
        overflow="auto"
        ref={containerRef}
        position="relative"
      >
        <Sidebar containerRef={containerRef} />
        <Box px={4} pt={4}>
          <Flex justify="space-between" align="center" mb={6}>
            <HStack>
              <Text
                fontSize="xl"
                fontWeight="bold"
                bgGradient="linear(to-r, yellow.400, yellow.600)"
                bgClip="text"
              >
                galleri5
              </Text>
              <Text fontSize="xl" fontWeight="semibold">
                Trends
              </Text>
            </HStack>
          </Flex>

          <Text color="gray.500" mb={3} fontSize="sm">
            CATEGORIES
          </Text>
          <Box mb={6} overflowX="auto" pb={2}>
            <HStack spacing={4}>
              {categories.map((category) => (
                <Flex
                  key={category.id}
                  direction="column"
                  align="center"
                  bg={
                    selectedCategory === category.name
                      ? "yellow.100"
                      : "gray.50"
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
                >
                  <Text fontSize="xl">{category.icon}</Text>
                  <Text
                    fontSize="xs"
                    mt={1}
                    fontWeight={
                      selectedCategory === category.name ? "bold" : "normal"
                    }
                  >
                    {category.name}
                  </Text>
                  {selectedCategory === category.name && (
                    <Box
                      position="absolute"
                      bottom="-2px"
                      left="50%"
                      transform="translateX(-50%)"
                      w="20px"
                      h="2px"
                      bg="yellow.400"
                      borderRadius="full"
                    />
                  )}
                </Flex>
              ))}
            </HStack>
          </Box>

          <Text color="gray.500" mb={3} fontSize="sm">
            FILTERS
          </Text>
          <Flex mb={6} gap={4}>
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

          <Box
            textAlign="center"
            mb={6}
            py={3}
            bg="yellow.50"
            borderRadius="xl"
          >
            <Text
              fontSize="xl"
              fontWeight="black"
              letterSpacing="wider"
              style={{
                fontFamily: "'Rampart One', cursive",
                textTransform: "uppercase",
              }}
            >
              ---- {selectedTrendType && selectedTrendType.toUpperCase()} TRENDS
              ----
            </Text>
          </Box>
          <VStack spacing={4} align="stretch" mb={6}>
            <TrendCard
              rank="1st"
              title="ASMR"
              username="g5SkylarVoss"
              percentage="15.6"
              isExpanded={expandedCards.includes("1st")}
              onToggle={(e) => toggleCard("1st", e)}
              onClick={() => handleTrendClick("ASMR")}
            />
            <TrendCard
              rank="2nd"
              title="GRWM"
              username="g5SkylarVoss"
              percentage="15.6"
              isExpanded={expandedCards.includes("2nd")}
              onToggle={(e) => toggleCard("2nd", e)}
              onClick={() => handleTrendClick("GRWM")}
            />
            <TrendCard
              rank="3rd"
              title="ASMR"
              username="g5SkylarVoss"
              percentage="15.6"
              isExpanded={expandedCards.includes("3rd")}
              onToggle={(e) => toggleCard("3rd", e)}
              onClick={() => handleTrendClick("ASMR")}
            />
          </VStack>
        </Box>
      </Container>
    </Box>
  );
};

export default TrendsListPage;
