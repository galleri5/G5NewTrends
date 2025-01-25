import { Image, Stack, Text } from "@chakra-ui/react"
import PropTypes from "prop-types"

function PricingWidgetsLabel({ arrow, value }) {
    return (
        <Stack flexDirection={"row"} padding={"4px 8px"} gap={"4px"} border={arrow == "up" ? "1px solid rgba(0, 128, 0, 1)" : "1px solid rgba(255, 0, 0, 1)"} borderRadius={"72px"} alignItems={"center"}>
            <Image w={"14px"} h={"14px"} src={arrow == "up" ? "/assets/uparrowicon.svg" : "/assets/downarrowicon.svg"} alt="pricingWidgetsLabel" />
            <Text fontWeight={"700"} fontSize={"12px"} color={arrow == "up" ? "rgba(0, 128, 0, 1)" : "rgba(255, 0, 0, 1)"} fontFamily={"Montserrat"}>{value}</Text>
        </Stack>
    )
}

PricingWidgetsLabel.propTypes = {
    arrow: PropTypes.string,
    value: PropTypes.number
}


export default PricingWidgetsLabel