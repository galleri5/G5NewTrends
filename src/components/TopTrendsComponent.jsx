import { HStack, Stack, Text, Image } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const listOfTrends = [
    { img: "./assets/trendoneimage.svg", title: "Fashion" },
    { img: "./assets/trendtwoimage.svg", title: "Beauty" },
    { img: "./assets/trendthreeimage.svg", title: "Travel" },
    { img: "./assets/trendfourimage.svg", title: "Food" },
];



function TopTrendsComponent({ selectedTrend }) {
    const navigate = useNavigate();
    return (
        <Stack padding={"20px"}>
            <HStack alignItems={"center"} justifyContent={"space-between"}>
                <Text fontSize={"16px"} fontWeight={"700"} color={"rgba(0, 0, 0, 1)"}>Top Trends in {selectedTrend}</Text>
                <Image src="./assets/rightarrowicon.svg" alt="arrow" />
            </HStack>
            <HStack overflowX={"auto"} marginTop={"10px"} border={"1px solid rgba(0, 0, 0, 1)"} borderRadius={"8px"} gap={"7px"}>
                {listOfTrends.map((trend) => (
                    <Image
                        onClick={() => navigate(`/trendsAnalysis/${trend?.title}`)}
                        w={"100%"}
                        h={"108px"}
                        key={trend?.img}
                        src={trend.img}
                        alt="trend"
                    />
                ))}
            </HStack>
        </Stack>
    )
}


TopTrendsComponent.propTypes = {
    selectedTrend: PropTypes.string
};

export default TopTrendsComponent