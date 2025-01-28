import { VStack, HStack, Text, Image } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

const CommonDialogBox = ({
  isOpen,
  onClose,
  items,
  onSelect,
  selectedItem,
}) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <VStack
      ref={dialogRef}
      position="absolute"
      top="120%"
      left="0"
      borderWidth={"1px 3px 3px 1px"}
      padding={"12px"}
      borderRadius={"8px"}
      background={"rgba(255, 255, 255, 1)"}
      minW={"230px"}
      borderColor={"rgba(0, 0, 0, 1)"}
      zIndex={10}
      alignItems={"flex-start"}
    >
      {items.map((item, index) => (
        <HStack
          key={index}
          onClick={() => {
            onSelect(item.title);
            onClose();
          }}
          padding={"12px"}
          w={"100%"}
          borderRadius={"8px"}
          background={
            item.title === selectedItem ? "rgba(251, 221, 107, 0.8)" : ""
          }
          _hover={{
            background:
              item.title === selectedItem
                ? "rgba(251, 221, 107, 0.9)"
                : "rgba(0, 0, 0, 0.05)",
          }}
          cursor="pointer"
          transition="background 0.2s"
        >
          <Image w={"16px"} h={"16px"} src={item.img} alt={item.title} />
          <Text fontWeight={"600"} color={"rgba(0, 0, 0, 1)"} fontSize={"14px"}>
            {item.title}
          </Text>
        </HStack>
      ))}
    </VStack>
  );
};

CommonDialogBox.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
  selectedItem: PropTypes.string,
};

export default CommonDialogBox;
