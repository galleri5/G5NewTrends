import { VStack, HStack, Text, Image, } from "@chakra-ui/react";
import PropTypes from "prop-types";



const CommonDialogBox = ({
    isOpen,
    onClose,
    items,
    onSelect,
    selectedItem
}) => {
    if (!isOpen) return null; // Only render if dialog is open

    return (
        <VStack
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
                        onClose(); // Close the dialog after selection
                    }}
                    padding={"12px"}
                    w={"100%"}
                    borderRadius={"8px"}
                    background={item.title === selectedItem ? "rgba(251, 221, 107, 0.8)" : ""}
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
    items: PropTypes.array,
    onSelect: PropTypes.func.isRequired,
    selectedItem: PropTypes.string
}

export default CommonDialogBox;
