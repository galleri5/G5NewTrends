import { Box, Button, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Box textAlign="center" mt="20">
      <Text fontSize="4xl" fontWeight="bold">
        404 - Page Not Found
      </Text>
      <Text mt={2} color="gray.500">
        The page you're looking for doesn't exist.
      </Text>
      <Button mt={6} colorScheme="blue" onClick={() => navigate("/")}>
        Go Back Home
      </Button>
    </Box>
  );
};

export default NotFoundPage;
