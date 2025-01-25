import { HStack, Stack, Text, Image } from "@chakra-ui/react"
import PricingWidgetsLabel from "./pricingWidgetsLabel"
import CommonDialogBox from "./CommonDialogBox"
import { useState } from "react"
import TrendsformationCard from "./TransformationCard"
import { useNavigate } from "react-router-dom"

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

function TransformationContent() {
    const [isOpen, setIsOpen] = useState(false)
    const [selecttrendStatus, setSelectTrendStatus] = useState("Popular Trends")
    const navigate = useNavigate()

    const handleSelectTrendStatus = (item) => {
        setSelectTrendStatus(item)
    }

    return (
        <Stack padding={"10px 24px"}>
            <HStack justifyContent={"space-between"}>
                <Text fontWeight={"800"} fontSize={"16px"} color={"rgba(0, 0, 0, 1)"} fontFamily={"Montserrat"}>Transformation Content</Text>
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
            <HStack overflow="auto" w="full" scrollBehavior="smooth" gap={"16px"}>
                {listOfTransformationContent.map((item, index) => (
                    <TrendsformationCard key={index} item={item} onClick={() => navigate(`/trendsAnalysis/${"fashion"}`)} />
                ))}
            </HStack>

        </Stack>
    )
}

export default TransformationContent