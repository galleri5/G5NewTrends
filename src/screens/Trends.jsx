import { useNavigate, useParams } from "react-router-dom"
import { HStack, Image, Stack, Text, VStack } from "@chakra-ui/react"
import ListOfTrendsTable from "@/components/ListOfTrendsTable"
import { useEffect, useRef, useState } from "react"

const optionsOfTrendingNow = [
    {
        img: "/assets/Clockicon.svg",
        title: "Trending Now",
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
function Trends() {
    const { selectedtrend, trending } = useParams()
    const navigate = useNavigate();
    const [openTrendingNow, setOpenTrendingNow] = useState(false);
    const dropdownRef = useRef(null);

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
    console.log(trending)
    return (
        <Stack padding={"20px"}>
            <HStack alignItems={"flex-start"}>
                <Image onClick={() => navigate(-1)} w={"30px"} h={"24px"} src="/assets/leftarrowicon.svg" alt="trend" />
                <Text fontWeight={"500"} fontSize={"16px"} color={"rgba(0, 0, 0, 1)"}>Trends</Text>
            </HStack>
            <VStack alignItems={"flex-start"} mt={"20px"} gap={"20px"}>
                <Text fontWeight={"800"} fontSize={"16px"} color={"rgba(248, 198, 7, 1)"}>{selectedtrend}</Text>

                <VStack alignItems={"flex-start"}>
                    <HStack ref={dropdownRef} onClick={() => setOpenTrendingNow(!openTrendingNow)} position="relative">
                        <Text fontWeight={"700"} color={"rgba(0, 0, 0, 1)"} fontSize={"18px"}>{trending}</Text>
                        <Image src="/assets/dropdownlogo.svg" alt="Trending Now" />

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
                                    <HStack onClick={() => { navigate(`/trends/${selectedtrend}/${option?.title}`) }} key={index} background={option?.title == trending ? "rgba(251, 221, 107, 1)" : ""} padding={"12px"} w={"100%"} borderRadius={"8px"}>
                                        <Image w={"16px"} h={"16px"} src={option.img} alt={option.title} />
                                        <Text fontWeight={"600"} color={"rgba(0, 0, 0, 1)"} fontSize={"14px"}>
                                            {option.title}
                                        </Text>
                                    </HStack>
                                ))}
                            </VStack>
                        )}
                    </HStack>
                    <Text fontWeight={"500"} fontSize={"14px"} color={"rgba(0, 0, 0, 1)"}>Discover what’s capturing attention right now in real time.</Text>
                </VStack>
                <VStack alignItems={"flex-start"} w={"100%"} gap={"20px"} width={"100%"}>
                    <HStack justifyContent={"space-between"} w={"100%"}>
                        <Text fontWeight={"600"} fontSize={"14px"} color={"rgba(0, 0, 0, 1)"}>18 Trends</Text>
                        <Image src="/assets/filterimage.svg" alt="trend" />
                    </HStack>
                </VStack>
                <ListOfTrendsTable />
            </VStack>

        </Stack>
    )
}

export default Trends