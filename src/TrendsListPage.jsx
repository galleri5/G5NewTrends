// TrendsListPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { ContentCard } from "./components/InstaPostCard";
import {
  Box,
  Flex,
  Text,
  VStack,
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

const categories = [
  { id: 1, name: "Fashion", icon: "/assets/fashionimage.svg" },
  { id: 2, name: "Beauty", icon: "/assets/beautyimage.svg" },
  { id: 3, name: "Home", icon: "/assets/homeimage.svg" },
  { id: 4, name: "Kitchen", icon: "/assets/kitchenimage.svg" },
  { id: 5, name: "Lifestyle", icon: "./assets/lifestyleimage.svg" },
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
      cursor="pointer"
      _hover={{
        transform: "translateY(-2px)",
        transition: "all 0.2s",
      }}
    >
      <Flex justify="space-between" align="center" onClick={onToggle}>
        <HStack spacing={4} justifyContent={"space-between"} w="100%">
          <HStack spacing={4}>
            <Text
              fontSize="l"
              fontWeight="bold"
              style={{ fontFamily: "'Rammetto One', cursive" }}
            >
              {title}
            </Text>
            <Text color="green.500" fontSize="sm">
              {percentage}% ↑
            </Text>
          </HStack>
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
          variant="ghost"
          size="sm"
        />
      </Flex>

      {isExpanded && (
        <HStack
          spacing={4}
          overflowX={"auto"}
          w="100%"
          h="100%"
          onClick={onClick}
        >
          <ContentCard type={"photo"} />
          <ContentCard type={"photo"} />
          <ContentCard type={"photo"} />
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
        pb="10"
      >
        <Sidebar containerRef={containerRef} />
        <Flex
          justify="space-between"
          align="center"
          backgroundColor={"#FFFAD6"}
          pt={4}
          h="120px"
          borderBottom={"2px solid #000"}
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
            <Text
              color="gray.500"
              mb={3}
              fontSize="10px"
              fontWeight={"700"}
              px={4}
            >
              CATEGORIES
            </Text>
            <Box
              mb={6}
              overflowX="auto"
              borderBottom={"2px solid #000"}
              px={4}
              pb={3}
            >
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
                        selectedCategory === category.name
                          ? null
                          : category.name
                      )
                    }
                    position="relative"
                    transition="all 0.2s"
                    _hover={{
                      bg: "yellow.50",
                      transform: "translateY(-2px)",
                    }}
                  >
                    <Image src={category.icon} w="24px" h="24px" />
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
              <Flex pb={3} gap={4} px={4} borderBottom={"2px solid #000"}>
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
          {/* <Box
            textAlign="center"
            mt={2}
            mb={6}
            py={8}
            // bg="#FFFAD6"
            backdropFilter="blur(10px)"
            backgroundBlendMode="overlay"
            backgroundColor="#fffad6a5"
            mx={1}
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
              -------- {selectedTrendType && selectedTrendType.toUpperCase()}{" "}
              TRENDS --------
            </Text>
          </Box> */}
        </Box>
        <VStack spacing={4} align="stretch" mb={6} px={4} pt="4">
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
          />{" "}
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
      </Container>
    </Box>
  );
};

export default TrendsListPage;
