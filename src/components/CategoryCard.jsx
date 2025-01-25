import { Box, Image, Text, HStack } from "@chakra-ui/react";
import PropTypes from "prop-types";


const CategoryCard = ({ name, img, bgcolor, onClick }) => {
    return (
        <Box
            bg={bgcolor}
            boxShadow="md"
            overflow="hidden"
            border={"1px solid rgba(0, 0, 0, 1)"}
            w="full"
            maxH={"130px"}
            borderRightRadius={"80px"}
            borderLeftRadius={"12px"}
            onClick={() => onClick(name)}
        >
            <HStack align="end" justifyContent={"space-between"}>
                <Box bg="white" p={2} borderRadius="md" w="40%" textAlign={"center"}>
                    <Text fontWeight="400" fontSize="20px" color="rgba(0, 0, 0, 1)" fontFamily={"Paytone One"}>
                        {name}
                    </Text>
                </Box>
                <Image src={img} alt={name} padding={"10px 30px"} />
            </HStack>
        </Box>
    );
};

CategoryCard.propTypes = {
    name: PropTypes.string,
    img: PropTypes.string,
    bgcolor: PropTypes.string,
    onClick: PropTypes.func,
};


export default CategoryCard;
