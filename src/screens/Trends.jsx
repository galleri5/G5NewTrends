import { useNavigate, useParams } from "react-router-dom"
import { HStack, Image, Stack, Text, VStack } from "@chakra-ui/react"
import ListOfTrendsTable from "@/components/ListOfTrendsTable"
import { useEffect, useRef, useState } from "react"
import CommonDialogBox from "@/components/CommonDialogBox"

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


    const handleSelect = (selectedItem) => {
        navigate(`/trends/${selectedtrend}/${selectedItem}`);
    };
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
                    <HStack
                        ref={dropdownRef}
                        onClick={() => setOpenTrendingNow(!openTrendingNow)}
                        position="relative"
                    >
                        <Text fontWeight={"700"} color={"rgba(0, 0, 0, 1)"} fontSize={"18px"}>
                            {trending}
                        </Text>
                        <Image src="/assets/dropdownlogo.svg" alt="Trending Now" />

                        <CommonDialogBox
                            isOpen={openTrendingNow}
                            onClose={() => setOpenTrendingNow(false)}
                            items={optionsOfTrendingNow}
                            onSelect={handleSelect}
                            selectedItem={trending}
                        />
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