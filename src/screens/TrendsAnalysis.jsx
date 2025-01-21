import InterestGraph from "@/components/InterestGraph";
import { HStack, Stack, VStack, Image, Text } from "@chakra-ui/react";
import { useNavigate, useParams, } from "react-router-dom";
import { useState } from "react";
import AboutTrend from "@/components/AboutTrend";
import LocationDemographics from "@/components/LocationDemographics";
import BrandView from "@/components/BrandView";
import ContentInspiration from "@/components/ContentInspiration";


function TrendsAnalysis() {
    const { trend } = useParams();
    const navigate = useNavigate();
    const [selectedGraphDates, setSelectedGraphDates] = useState("All");
    console.log(trend);
    const [selectedContent, setSelectedContent] = useState("All");
    const [selectImpressions, setSelectImpressions] = useState("Engagements");


    const handleSelectGraphDates = (graphDates) => {
        setSelectedGraphDates(graphDates);
    }

    const handleSelectContent = (content) => {
        setSelectedContent(content);
    }

    const handleSelectImpressions = (impressions) => {
        setSelectImpressions(impressions);
    }

    return (
        <Stack>
            <VStack alignItems={"flex-start"} padding={"24px 20px"} background={"rgba(254, 243, 113, 1)"} >
                <Image onClick={() => navigate(-1)} w={"24px"} h={"24px"} src="/assets/leftarrowicon.svg" alt="trend" />
                <HStack>
                    <Image w={"66px"} h={"72px"} border={"1px solid rgba(0, 0, 0, 1)"} src="/assets/trendtwoimage.svg" alt="trend" />
                    <VStack>
                        <Text fontWeight={"700"} fontSize={"20px"} color={"rgba(0, 0, 0, 1)"}>{trend}</Text>
                        <HStack>
                            <Image src="/assets/downarrowicon.svg" alt="trend" />
                            <Text color={"rgba(255, 0, 0, 1)"} fontWeight={"500"} fontSize={"14px"}>-4.5%</Text>
                            <Text color={"rgba(0, 0, 0, 1)"} fontWeight={"500"} fontSize={"14px"}>Today</Text>
                        </HStack>
                    </VStack>
                </HStack>
            </VStack>
            <Stack padding={"20px"} gap={"40px"} flexDirection={"column"}>
                <VStack alignItems={"flex-start"} width={"100%"} gap={"20px"}>
                    <Text color={"rgba(0, 0, 0, 1)"} fontWeight={"700"} fontSize={"16px"}>Overall Analysis</Text>
                    <VStack border={"1px solid rgba(0, 0, 0, 1)"} padding={"16px"} borderRadius={"8px"} w={"100%"} alignItems={"flex-start"}>
                        <Text><span style={{ color: "rgba(0, 0, 0, 1)", fontSize: "14px", fontWeight: "700" }}>{trend}</span> <span style={{ color: "rgba(0, 0, 0, 1)", fontSize: "14px", fontWeight: "500" }}>is a</span>
                            <span style={{ color: "rgba(255, 0, 0, 1)", fontSize: "14px", fontWeight: "700" }}>Declining Trend</span>
                        </Text>
                        <Text color={"rgba(0, 0, 0, 1)"} fontWeight={"500"} fontSize={"12px"}>Expected to be declining in 3 days from today</Text>
                        <Text color={"rgba(0, 0, 0, 1)"} fontWeight={"500"} fontSize={"12px"}>Score <span style={{ color: "rgba(255, 0, 0, 1)", fontSize: "12px", fontWeight: "600" }}>2.29</span></Text>
                    </VStack>
                </VStack>
                <InterestGraph onSelectGraphDates={handleSelectGraphDates} selectedGraphDates={selectedGraphDates} />
                <AboutTrend />
                <LocationDemographics />
                <BrandView />
                <ContentInspiration onSelectContent={handleSelectContent} selectedContent={selectedContent} showContentGallery={true} onSelectImpressions={handleSelectImpressions}
                    selectedImpressions={selectImpressions}
                />
            </Stack>

        </Stack>
    )
}

export default TrendsAnalysis