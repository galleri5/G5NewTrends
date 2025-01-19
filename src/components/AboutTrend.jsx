import { Stack, Text } from "@chakra-ui/react"

function AboutTrend() {
    return (
        <Stack>
            <Text fontWeight={"700"} fontSize={"16px"} color={"rgba(0, 0, 0, 1)"}>About this Trend</Text>
            <Text color={"rgba(0, 0, 0, 0.8)"} border={"1px solid black"} borderRadius={"8px"} padding={"16px 12px"} fontWeight={"500"} fontSize={"12px"}>Bold and oversized blazers dominate this season, blending structure with comfort. Paired with sleek trousers or casual jeans, this versatile trend redefines power dressing, adding a chic edge to every look.</Text>
        </Stack>
    )
}

export default AboutTrend