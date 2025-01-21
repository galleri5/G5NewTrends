import { Stack, Text, Image, HStack } from "@chakra-ui/react"
import { useState, useRef, useEffect } from "react"
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import CommonDialogBox from "./CommonDialogBox";


const listOfTrendingNow = [
    {
        img: "./assets/trendingone.svg",
        title: "Rich Brunette Waves",
        percentage: "1.2%",
        bgColor: "rgba(188, 196, 255, 1)"
    },
    {
        img: "./assets/trendingtwo.svg",
        title: "Sleek Blonde Bob",
        percentage: "2.5%",
        bgColor: "rgba(254, 243, 113, 1)"
    },
    {
        img: "./assets/trendingtwo.svg",
        title: "Curly Red Locks",
        percentage: "4.1%",
        bgColor: "rgba(218, 247, 239, 1)"
    }
]

const optionsOfTrendingNow = [
    {
        img: "./assets/Clockicon.svg",
        title: "Trending Now",
    },
    {
        img: "./assets/Trending up.svg",
        title: "Emerging Trends"
    },
    {
        img: "./assets/Trending down.svg",
        title: "Declining Trends"
    }
]

function TrendingNow({ onSelectTrendingNow, selectedTrendingNow, selectedTrend }) {
    const [openTrendingNow, setOpenTrendingNow] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    const handleSelect = (selectedItem) => {
        onSelectTrendingNow(selectedItem);
        navigate(`/trends/${selectedTrend}/${selectedItem}`);
    };

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
            <HStack
                ref={dropdownRef}
                onClick={() => setOpenTrendingNow(!openTrendingNow)}
                position="relative"
            >
                <Text fontWeight={"700"} color={"rgba(0, 0, 0, 1)"} fontSize={"18px"}>
                    Trending Now
                </Text>
                <Image src="/assets/dropdownlogo.svg" alt="Trending Now" />

                <CommonDialogBox
                    isOpen={openTrendingNow}
                    onClose={() => setOpenTrendingNow(false)}
                    items={optionsOfTrendingNow}
                    onSelect={handleSelect}
                    selectedItem={selectedTrendingNow}
                />
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
                            <Image src="./assets/uparrowicon.svg" alt="Arrow Up" />
                            <Text fontWeight={"700"} color={"rgba(0, 128, 0, 1)"} fontSize={"14px"}>{trend.percentage}</Text>
                        </HStack>
                    </Stack>
                ))}
            </HStack>
            <HStack alignItems={"center"} justifyContent={"center"} mt={"15px"}>
                <Text fontWeight={"800"} color={"rgba(0, 0, 0, 1)"} fontSize={"14px"} textDecoration={"underline"}>See More Trends</Text>
                <Image src="./assets/rightarrowicon.svg" alt="Right Arrow" />
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