import { HStack, Image, Stack, Text } from "@chakra-ui/react"
const listOfBrandsView = [
    {
        img: "../src/assets/brand1image.svg",
        title: "Brand 1",
    },
    {
        img: "../src/assets/pepsiimage.svg",
        title: "Brand 2",
    },
    {
        img: "../src/assets/pgimage.svg",
        title: "Brand 3",
    },
    {
        img: "../src/assets/macimage.svg",
        title: "Brand 4",
    },
    {
        img: "../src/assets/macimage.svg",
        title: "Brand 4",
    },
    {
        img: "../src/assets/macimage.svg",
        title: "Brand 4",
    },

]

function BrandView() {
    return (
        <Stack>
            <Text fontWeight={"700"} fontSize={"16px"} color={"rgba(0, 0, 0, 1)"}>Brand View</Text>
            <HStack overflowX={"auto"} w={"100%"}>
                {listOfBrandsView.map((item, index) => {
                    return (
                        <Stack key={index} alignItems={"center"} border={"1px solid black"} gap={"12px"} borderRadius={"8px"} padding={"12px"} minW={"77px"}>
                            <Image w={"32px"} h={"32px"} src={item.img} alt="brand" />
                            <Text color={"rgba(0, 0, 0, 1)"} fontWeight={"600"} fontSize={"12px"}>{item.title}</Text>
                        </Stack>
                    )
                })}
            </HStack>

        </Stack>
    )
}

export default BrandView