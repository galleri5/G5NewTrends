import { HStack, Stack, Text, Image, VStack } from "@chakra-ui/react"
import PricingWidgetsLabel from "./pricingWidgetsLabel"
import CommonDialogBox from "./CommonDialogBox"
import { useState } from "react"

const optionsOfTrendingNow = [
    {
        img: "/assets/Clockicon.svg",
        title: "Popular Trends",
    },
    {
        img: "/assets/Trending up.svg",
        title: "Emerging Trends"
    },
    {
        img: "/assets/Trending down.svg",
        title: "Declining Trends"
    }
]

const listOfTransformationContent = [
    {
        img: "/assets/transformationimage.svg",
        title: "Get Ready With Me",
        rank: "#1",
        percentage: "4.5%",
        arrow: "up"
    },
    {
        img: "/assets/transformationimage.svg",
        title: "Day in My Life",
        rank: "#2",
        percentage: "2.3%",
        arrow: "down"
    },
    {
        img: "/assets/transformationimage.svg",
        title: "Week in My Life",
        rank: "#3",
        percentage: "2.3%",
        arrow: "up"
    },
    {
        img: "/assets/transformationimage.svg",
        title: "Week in My Life",
        rank: "#3",
        percentage: "2.3%",
        arrow: "up"
    },
]

function EducationalContent() {
    const [isOpen, setIsOpen] = useState(false)
    const [selecttrendStatus, setSelectTrendStatus] = useState("Popular Trends")

    const handleSelectTrendStatus = (item) => {
        setSelectTrendStatus(item)
    }

    return (
        <Stack padding={"10px 24px"}>
            <HStack justifyContent={"space-between"}>
                <Text fontWeight={"800"} fontSize={"16px"} color={"rgba(0, 0, 0, 1)"} fontFamily={"Montserrat"}>Educational Content</Text>
                <PricingWidgetsLabel arrow={"up"} value={"-4.5 %"} />

            </HStack>
            <HStack
                // ref={dropdownRef}
                onClick={() => setIsOpen(!isOpen)}
                position="relative"
            >
                <Text fontWeight={"600"} color={"rgba(0, 0, 0, 1)"} fontSize={"14px"}>
                    {selecttrendStatus}
                </Text>
                <Image src="/assets/dropdownlogo.svg" alt="Trending Now" />
                <CommonDialogBox items={optionsOfTrendingNow} isOpen={isOpen} onClose={() => setIsOpen(false)} onSelect={handleSelectTrendStatus} selectedItem={selecttrendStatus} />
            </HStack>
            <VStack w="100%" gap={"12px"}>
                {listOfTransformationContent.map((item, index) => (
                    <HStack key={index} justifyContent={"space-between"} padding={"8px 12px"} borderRadius={"6px"} border={"1px solid rgba(0, 0, 0, 1)"} width={"100%"}>
                        <HStack gap={"16px"}>
                            <Text fontWeight={"700"} fontSize={"12px"} color={"rgba(0, 0, 0, 1)"}>{item?.rank}</Text>
                            <Text fontWeight={"700"} fontSize={"12px"} color={"rgba(0, 0, 0, 1)"}>{item?.title}</Text>
                        </HStack>
                        <HStack>
                            <Image src={item?.arrow == "up" ? "/assets/uparrowicon.svg" : "/assets/downarrowicon.svg"} alt="Up Arrow" w="14px" h="14px" />
                            <Text fontWeight={"700"} fontSize={"12px"} color={item?.arrow == "up" ? "rgba(0, 128, 0, 1)" : "rgba(255, 0, 0, 1)"}>{item.percentage}</Text>
                        </HStack>
                    </HStack>
                ))}
            </VStack>

        </Stack>
    )
}

export default EducationalContent