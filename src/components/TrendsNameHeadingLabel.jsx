import { HStack, Stack, Text } from "@chakra-ui/react"
import PropTypes from "prop-types"

function TrendsNameHeadingLabel({ heading }) {
    return (
        <Stack bg={"rgba(199, 206, 255, 1)"} alignItems={"center"} justifyContent={"center"} w={"100%"} minH={"121px"}>
            <HStack bg={"rgba(247, 243, 194, 1)"} padding={"12px 32px"} textAlign={"center"} borderRadius={"6px"}>
                <Text fontSize={"20px"} fontWeight={"900"} color={"rgba(0, 0, 0, 1)"} >
                    {heading}
                </Text>
            </HStack>
        </Stack>
    )
}

TrendsNameHeadingLabel.propTypes = {
    heading: PropTypes.string
}

export default TrendsNameHeadingLabel