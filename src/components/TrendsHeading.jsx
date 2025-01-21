import { Stack, HStack, Image, Text } from '@chakra-ui/react'

function TrendsHeading() {
    return (
        <Stack>
            <HStack alignItems={"center"} pt={"24px"} pl={"24px"} >
                <Image src="./assets/galleri5logo.svg" alt="galleri5logo" mt={"10px"} />
                <Text fontWeight={"700"} fontSize={"24px"} color={"#000000"}>Trends</Text>
            </HStack>
            <HStack border={"0.5px solid rgba(0, 0, 0, 0.1)"} width={"100%"} />
        </Stack>
    )
}

export default TrendsHeading