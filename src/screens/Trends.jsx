import { useNavigate, useParams } from "react-router-dom"
import { HStack, Image, Stack, Text, VStack } from "@chakra-ui/react"
import ListOfTrendsTable from "@/components/ListOfTrendsTable"
function Trends() {
    const { selectedtrend, trending } = useParams()
    const navigate = useNavigate();
    console.log(trending)
    return (
        <Stack padding={"20px"}>
            <HStack alignItems={"flex-start"}>
                <Image onClick={() => navigate(-1)} w={"30px"} h={"24px"} src="/src/assets/leftarrowicon.svg" alt="trend" />
                <Text fontWeight={"500"} fontSize={"16px"} color={"rgba(0, 0, 0, 1)"}>Trends</Text>
            </HStack>
            <VStack alignItems={"flex-start"} mt={"20px"} gap={"20px"}>
                <Text fontWeight={"800"} fontSize={"16px"} color={"rgba(248, 198, 7, 1)"}>{selectedtrend}</Text>
                <VStack alignItems={"flex-start"}>
                    <HStack>
                        <Text fontWeight={"700"} fontSize={"18px"} color={"rgba(0, 0, 0, 1)"}>{trending}</Text>
                        <Image src="/src/assets/dropdownlogo.svg" alt="trend" />
                    </HStack>
                    <Text fontWeight={"500"} fontSize={"14px"} color={"rgba(0, 0, 0, 1)"}>Discover what’s capturing attention right now in real time.</Text>
                </VStack>
                <VStack alignItems={"flex-start"} w={"100%"} gap={"20px"} width={"100%"}>
                    <HStack justifyContent={"space-between"} w={"100%"}>
                        <Text fontWeight={"600"} fontSize={"14px"} color={"rgba(0, 0, 0, 1)"}>18 Trends</Text>
                        <Image src="/src/assets/filterimage.svg" alt="trend" />
                    </HStack>
                </VStack>
                <ListOfTrendsTable />
            </VStack>

        </Stack>
    )
}

export default Trends