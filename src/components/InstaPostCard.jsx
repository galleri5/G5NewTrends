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
} from "@chakra-ui/react";
import { Eye, Heart, MessageCircle, ExternalLink } from "lucide-react";

export const ContentCard = ({ type }) => (
  <Card minH="340px" minW="260px" m="10px">
    <CardBody padding={"10px"}>
      <Flex align="center" mb={3}>
        <Avatar size="sm" src="/api/placeholder/32/32" />
        <Box ml={2} flex={1}>
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
      <Box position="relative" mb={3} h="238px">
        <Image
          src="/api/placeholder/400/500"
          alt="Content"
          borderRadius="lg"
          w="full"
        />
        <Badge
          position="absolute"
          top={2}
          right={2}
          bg="yellow.400"
          color="black"
          fontSize="xs"
          px={2}
          py={1}
        >
          {type}
        </Badge>
      </Box>
      <HStack spacing={6} color="gray.500">
        <HStack spacing={1}>
          <Eye size={14} />
          <Text fontSize="sm">10k</Text>
        </HStack>
        <HStack spacing={1}>
          <Heart size={14} />
          <Text fontSize="sm">566</Text>
        </HStack>
        <HStack spacing={1}>
          <MessageCircle size={14} />
          <Text fontSize="sm">50</Text>
        </HStack>
      </HStack>
    </CardBody>
  </Card>
);
