import { Stack, HStack, Text, Image, VStack } from "@chakra-ui/react"
import PropTypes from "prop-types"
import { useState } from "react"

const listOfContent = [
    { title: "All" },
    { title: "Reels" },
    { title: "Photos" },
    { title: "Stories" },
    { title: "Carousels" },
]

const listOfReels = [
    { img: "../src/assets/contentinspirationImage.svg" },
    { img: "../src/assets/contentinspirationImage.svg" },
    { img: "../src/assets/contentinspirationImage.svg" },
    { img: "../src/assets/contentinspirationImage.svg" },
]

const optionsOfTrendingNow = [
    {
        img: "../src/assets/engagementsimage.svg",
        title: "Engagements",
    },
    {
        img: "../src/assets/Impressionsimage.svg",
        title: "Impressions"
    },
    {
        img: "../src/assets/virtalityimage.svg",
        title: "Virtality"
    }
]

function ContentInspiration({ onSelectContent, selectedContent, showContentGallery, onSelectImpressions, selectedImpressions }) {
    const [showImpressions, setShowImpressions] = useState(false)
    return (
        <Stack padding={showContentGallery == true ? "" : "20px"}>
            <HStack alignItems={"center"} justifyContent={"space-between"}>
                <Text fontSize={"16px"} fontWeight={"700"} color={"rgba(0, 0, 0, 1)"}>{showContentGallery ? "Content Inspirations Gallery" : "Content Inspirations for you"}</Text>
                <Image src="../src/assets/rightarrowicon.svg" alt="arrow" />
            </HStack>
            <HStack w={"100%"} justifyContent={"space-around"} mt={"10px"}>
                {listOfContent.map((content) => (
                    <Text key={content.title} onClick={() => onSelectContent(content?.title)} background={content?.title == selectedContent ? "rgba(251, 221, 107, 1)" : ""} padding={"6px 8px"} border={"1px solid black"} borderRadius={"128px"} fontSize={"12px"} fontWeight={"600"} color={"rgba(0, 0, 0, 1)"}>{content.title}</Text>
                ))}
            </HStack>

            {showContentGallery && <HStack
                marginTop={"20px"}
                justifyContent={"space-between"}
                position={"relative"}
            >
                <HStack>
                    <Image w={"16px"} h={"16px"} src="../src/assets/rankedimage.svg" alt="content" />
                    <Text fontSize={"12px"} fontWeight={"600"} color={"rgba(0, 0, 0, 1)"}>Ranked By</Text>
                </HStack>
                <HStack onClick={() => setShowImpressions(!showImpressions)}>
                    <Text fontSize={"12px"} fontWeight={"600"} color={"rgba(0, 0, 0, 1)"}>Impressions</Text>
                    <Image w={"16px"} h={"16px"} src="../src/assets/dropdownlogo.svg" alt="content" />
                </HStack>

                {showImpressions && (
                    <VStack
                        position="absolute"
                        top="100%"
                        right="0"
                        borderWidth={"1px"}
                        padding={"12px"}
                        borderRadius={"8px"}
                        background={"rgba(255, 255, 255, 1)"}
                        minW={"230px"}
                        borderColor={"rgba(0, 0, 0, 1)"}
                        zIndex={10}
                        boxShadow={"0px 4px 6px rgba(0, 0, 0, 0.1)"}
                    >
                        {optionsOfTrendingNow.map((option, index) => (
                            <HStack
                                onClick={() => { onSelectImpressions(option?.title), setShowImpressions(false) }}
                                key={index}
                                background={option?.title === selectedImpressions ? "rgba(251, 221, 107, 1)" : ""}
                                padding={"12px"}
                                w={"100%"}
                                borderRadius={"8px"}
                            >
                                <Image w={"16px"} h={"16px"} src={option.img} alt={option.title} />
                                <Text fontWeight={"600"} color={"rgba(0, 0, 0, 1)"} fontSize={"14px"}>
                                    {option.title}
                                </Text>
                            </HStack>
                        ))}
                    </VStack>
                )}
            </HStack>}


            {showContentGallery ? <Stack
                display={"grid"}
                gridTemplateColumns={"repeat(3, 1fr)"}
                gap={"16px"}
                mt={"20px"}
            >
                {listOfReels.map((reel) => (
                    <Image
                        w={"100%"}
                        h={"148px"}
                        key={reel?.img}
                        src={reel.img}
                        alt="reel"
                        borderRadius={"8px"}
                        objectFit={"cover"}
                    />
                ))}
            </Stack>
                : <HStack overflowX={"auto"} marginTop={"10px"} gap={"7px"}>
                    {listOfReels.map((reel) => (
                        <Image w={"100%"} h={"148px"} key={reel?.img} src={reel.img} alt="reel" />
                    ))}
                </HStack>}
        </Stack>
    )
}

ContentInspiration.propTypes = {
    onSelectContent: PropTypes.func,
    selectedContent: PropTypes.string,
    showContentGallery: PropTypes.bool,
    onSelectImpressions: PropTypes.func,
    selectedImpressions: PropTypes.string
};

export default ContentInspiration