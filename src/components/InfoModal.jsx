import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  VStack,
  Text,
  HStack,
  Box,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { Info } from "lucide-react";

export const InfoPopover = ({ title, sections }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <Box
          position="fixed"
          top={0}
          left={0}
          width="100vw"
          height="100vh"
          bg="rgba(0, 0, 0, 0.5)"
          zIndex={10}
          onClick={() => setIsOpen(false)}
        />
      )}

      <Popover
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        placement="bottom-start"
      >
        <PopoverTrigger>
          <HStack cursor={"pointer"} onClick={() => setIsOpen((prev) => !prev)}>
            <IconButton
              icon={<Info size={18} />}
              variant="ghost"
              size="sm"
              colorScheme="gray"
            />
          </HStack>
        </PopoverTrigger>
        <PopoverContent
          zIndex={20}
          //   maxW={"50%"}
          fontFamily={"Teachers"}
          minW="400px"
        >
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader fontWeight="bold" fontSize="18px" textAlign="center">
            {title}
          </PopoverHeader>
          <PopoverBody>
            <VStack align="start" spacing={4}>
              {sections.map((section, index) => (
                <Box key={index}>
                  <Text fontSize={"16px"} fontWeight={"800"} color={"#111111"}>
                    {section.header}
                  </Text>
                  <Text fontSize={"16px"} fontWeight={"400"} color={"#111111"}>
                    {section.content}
                  </Text>
                </Box>
              ))}
            </VStack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default InfoPopover;
