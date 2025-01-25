import { HStack, Stack, Text, VStack, Image, Box } from "@chakra-ui/react"
import PropTypes from "prop-types";

const listOfMethodsInTrends = [
    {
        img: "/assets/videoformatsimage.svg",
        title: "Video Formats"
    },
    {
        img: "/assets/photographystylesimage.svg",
        title: "Photography Styles"
    },
    {
        img: "/assets/contentstrategiesimage.svg",
        title: "Content Strategies"
    },
    {
        img: "/assets/visualelementimage.svg",
        title: "Visual Element Trends"
    }
]

function ListOfTrendsMethod({ selectedMethodOftrendType, handleSelectTrendType }) {

    return (
        <Stack p={"0px 20px"}>
            <HStack overflowX={"auto"}>
                {listOfMethodsInTrends.map((trend) => (
                    <VStack key={trend?.title} onClick={() => handleSelectTrendType(trend.title)} padding={"16px"} gap={"8px"}
                    >
                        <Image src={trend.img} w={"56px"} h={"46px"} alt={trend.title} />
                        <Text maxH={"35px"} overflow={"hidden"} minW={"85px"} textAlign={"center"} fontWeight={selectedMethodOftrendType === trend?.title ? "900" : "600"} fontSize={"12px"} color={"rgba(0, 0, 0, 1)"} fontFamily={"Montserrat"}>{trend.title}</Text>
                        {selectedMethodOftrendType === trend?.title && (
                            <Box w="full" h="3px" bg="black" />
                        )}
                    </VStack>
                ))}
            </HStack>

        </Stack>
    )
}

ListOfTrendsMethod.propTypes = {
    handleSelectTrendType: PropTypes.func,
    selectedMethodOftrendType: PropTypes.string
};

export default ListOfTrendsMethod