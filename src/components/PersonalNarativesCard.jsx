import { VStack, HStack, Image, Text, Badge } from "@chakra-ui/react";
import PropTypes from "prop-types";

const PersonalNarativesCard = ({ item }) => {
    return (
        <VStack
            minW={"130px"}
            minH={"150px"}
            gap={"12px"}
            align="center"
            position={"relative"}
        >

            <Badge
                bg="yellow.400"
                borderRadius="93px"
                px="8px"
                py="2px"
                fontWeight="bold"
                fontSize="12px"
                color="black"
                position={"absolute"}
                top={"2"}
                left={"1"}
            >
                {item.rank}
            </Badge>



            <Image
                src={item.img}
                alt="Trend"
                w="96px"
                h="96px"
                objectFit="cover"
                border="1px solid rgba(0, 0, 0, 1)"
                borderRadius="53px"
            />


            <Badge
                borderRadius="4px"
                padding={"2px 3px"}
                background={item?.arrow == "up" ? "rgba(99, 220, 161, 1)" : "rgba(237, 129, 106, 1)"}
                position="absolute"
                bottom="3rem"
                right="2.5rem"
                border="1px solid rgba(0, 0, 0, 1)"
                gap={"8px"}
            >
                <HStack align="center">
                    <Image src={item?.arrow == "up" ? "/assets/uparrowicon.svg" : "/assets/downarrowicon.svg"} alt="Up Arrow" w="10px" h="10px" />
                    <Text fontWeight={"700"} fontSize={"9px"} color={"rgba(0, 0, 0, 1)"}>{item.percentage}</Text>
                </HStack>
            </Badge>




            <Text
                fontSize="12px"
                fontWeight="800"
                color="black"
                textAlign={"center"}
            >
                {item.title}
            </Text>


        </VStack>
    );
};

PersonalNarativesCard.propTypes = {
    item: PropTypes.object,
}



export default PersonalNarativesCard;
