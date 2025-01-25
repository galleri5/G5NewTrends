import { useNavigate, useParams } from "react-router-dom"
import { HStack, Image, Stack, Text, VStack } from "@chakra-ui/react"
import ListOfTrendsTable from "@/components/ListOfTrendsTable"
import { useEffect, useRef, useState } from "react"
import CommonDialogBox from "@/components/CommonDialogBox"
import TrendsNameHeadingLabel from "@/components/TrendsNameHeadingLabel"
import { img } from "framer-motion/client"
import ListOfTrends from "@/components/ListOfMethodsInTrends"
import TransformationContent from "@/components/TransformationContent"
import PersonalNarratives from "@/components/PersonalNarratives"
import EducationalContent from "@/components/EducationalContent"
import LifeCycleDocumentation from "@/components/LifeCycleDocumentation"

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
    const [selectedMethodOftrendType, setSelectedMethodOftrendType] = useState("Video Formats")
    const { category } = useParams()
    // const dropdownRef = useRef(null);

    // useEffect(() => {
    //     function handleClickOutside(event) {
    //         if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
    //             setOpenTrendingNow(false);
    //         }
    //     }

    //     document.addEventListener("mousedown", handleClickOutside);
    //     return () => {
    //         document.removeEventListener("mousedown", handleClickOutside);
    //     };
    // }, []);

    const handleSelectTrendType = (trendType) => {
        setSelectedMethodOftrendType(trendType)
    }


    return (
        <Stack>
            <TrendsNameHeadingLabel heading={category} />
            <ListOfTrends selectedMethodOftrendType={selectedMethodOftrendType} handleSelectTrendType={handleSelectTrendType} />
            <TransformationContent />
            <PersonalNarratives />
            <EducationalContent />
            <LifeCycleDocumentation />

        </Stack>
    )
}

export default Trends