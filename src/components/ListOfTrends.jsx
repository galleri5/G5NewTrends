import { HStack, Stack, Text } from "@chakra-ui/react"
import PropTypes from "prop-types";

const listOfTrends = [
    {
        title: "Fashion",
        image: "./assets/"
    },
    {
        title: "Music",
        image: "./assets/"
    },
    {
        title: "Drinks",
        image: "./assets/"
    },
    {
        title: "Beauty",
        image: "./assets/"
    },
    {
        title: "Styles",
        image: "./assets/"
    },
    {
        title: "Beauty",
        image: "./assets/"
    }
]

function ListOfTrends({ onTrendSelect, selectedTrend }) {

    return (
        <Stack p={"20px"}>
            <HStack overflowX={"auto"}>
                {listOfTrends.map((trend) => (
                    <Stack key={trend?.title} onClick={() => onTrendSelect(trend.title)} background={trend?.title == selectedTrend ? "rgba(251, 221, 107, 1)" : ""} border={"1px solid rgba(0, 0, 0, 1)"} borderRadius={"104px"} padding={"11px 16px"} >
                        <Text fontWeight={"700"} fontSize={"14px"} color={"rgba(0, 0, 0, 1)"}>{trend.title}</Text>
                    </Stack>
                ))}
            </HStack>

        </Stack>
    )
}

ListOfTrends.propTypes = {
    onTrendSelect: PropTypes.func.isRequired,
    selectedTrend: PropTypes.string
};

export default ListOfTrends