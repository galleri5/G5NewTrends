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

export const InfoPopover = ({ children }) => {
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
              icon={<Info size={24} />}
              variant="ghost"
              size="sm"
              colorScheme="gray"
              cursor={"pointer"}
            />
          </HStack>
        </PopoverTrigger>
        <PopoverContent zIndex={20} fontFamily={"Teachers"} minW="320px">
          <PopoverArrow />
          <PopoverCloseButton />

          <PopoverBody>
            <VStack align="start" spacing={4}>
              {children}
            </VStack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default InfoPopover;
