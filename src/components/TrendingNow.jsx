import { Stack, Text, Image, HStack, VStack } from "@chakra-ui/react"
import { useState, useRef, useEffect } from "react"
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";


const listOfTrendingNow = [
    {
        img: "./src/assets/trendingone.svg",
        title: "Rich Brunette Waves",
        percentage: "1.2%",
        bgColor: "rgba(188, 196, 255, 1)"
    },
    {
        img: "./src/assets/trendingtwo.svg",
        title: "Sleek Blonde Bob",
        percentage: "2.5%",
        bgColor: "rgba(254, 243, 113, 1)"
    },
    {
        img: "./src/assets/trendingtwo.svg",
        title: "Curly Red Locks",
        percentage: "4.1%",
        bgColor: "rgba(218, 247, 239, 1)"
    }
]

const optionsOfTrendingNow = [
    {
        img: "./src/assets/Clockicon.svg",
        title: "Trending Now",
    },
    {
        img: "./src/assets/Trending up.svg",
        title: "Emerging Trends"
    },
    {
        img: "./src/assets/Trending down.svg",
        title: "Declining Trends"
    }
]

function TrendingNow({ onSelectTrendingNow, selectedTrendingNow, selectedTrend }) {
    const [openTrendingNow, setOpenTrendingNow] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpenTrendingNow(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    return (
        <Stack pl={"20px"} pr={"20px"} >
            <HStack ref={dropdownRef} onClick={() => setOpenTrendingNow(!openTrendingNow)} position="relative">
                <Text fontWeight={"700"} color={"rgba(0, 0, 0, 1)"} fontSize={"18px"}>Trending Now</Text>
                <Image src="./src/assets/dropdownlogo.svg" alt="Trending Now" />

                {openTrendingNow && (
                    <VStack
                        position="absolute"
                        top="120%"
                        left="0"
                        borderWidth={"1px 3px 3px 1px"}
                        padding={"12px"}
                        borderRadius={"8px"}
                        background={"rgba(255, 255, 255, 1)"}
                        minW={"230px"}
                        borderColor={"rgba(0, 0, 0, 1)"}
                        zIndex={10}
                        alignItems={"flex-start"}
                    >
                        {optionsOfTrendingNow.map((option, index) => (
                            <HStack onClick={() => { onSelectTrendingNow(option?.title), navigate(`/trends/${selectedTrend}/${option?.title}`) }} key={index} background={option?.title == selectedTrendingNow ? "rgba(251, 221, 107, 1)" : ""} padding={"12px"} w={"100%"} borderRadius={"8px"}>
                                <Image w={"16px"} h={"16px"} src={option.img} alt={option.title} />
                                <Text fontWeight={"600"} color={"rgba(0, 0, 0, 1)"} fontSize={"14px"}>
                                    {option.title}
                                </Text>
                            </HStack>
                        ))}
                    </VStack>
                )}
            </HStack>

            <Text fontWeight={"500"} color={"rgba(0, 0, 0, 1)"} fontSize={"14px"}>
                Discover the latest styles making waves !
            </Text>
            <HStack overflowX={"auto"} mt={"20px"}>
                {listOfTrendingNow.map((trend, index) => (
                    <Stack key={index} minW={"128px"} minH={"131px"} bg={trend?.bgColor} borderRadius={"10px"} p={"12px"} spacing={"10px"}>
                        <Image w={"32px"} h={"32px"} src={trend.img} alt={trend.title} />
                        <Text fontWeight={"600"} color={"rgba(0, 0, 0, 0.9)"} fontSize={"14px"}>{trend.title}</Text>
                        <HStack>
                            <Image src="./src/assets/uparrowicon.svg" alt="Arrow Up" />
                            <Text fontWeight={"700"} color={"rgba(0, 128, 0, 1)"} fontSize={"14px"}>{trend.percentage}</Text>
                        </HStack>
                    </Stack>
                ))}
            </HStack>
            <HStack alignItems={"center"} justifyContent={"center"} mt={"15px"}>
                <Text fontWeight={"800"} color={"rgba(0, 0, 0, 1)"} fontSize={"14px"} textDecoration={"underline"}>See More Trends</Text>
                <Image src="./src/assets/rightarrowicon.svg" alt="Right Arrow" />
            </HStack>
        </Stack>
    )
}

TrendingNow.propTypes = {
    onSelectTrendingNow: PropTypes.func.isRequired,
    selectedTrendingNow: PropTypes.string,
    selectedTrend: PropTypes.string
};

export default TrendingNow