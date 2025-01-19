import { HStack, VStack, Text, Image, } from "@chakra-ui/react";

const trendsData = [
    { name: "Vintage Block Print Sarees", stats: "+4.5%", reach: "1.8 M", trend: "up" },
    { name: "Elegant Silk Scarves", stats: "-6.2%", reach: "2.3 M", trend: "down" },
    { name: "Handmade Ceramic Mugs", stats: "+3.8%", reach: "1.5 M", trend: "up" },
    { name: "Organic Cotton T-Shirts", stats: "-5.1%", reach: "1.9 M", trend: "down" },
    { name: "Artisanal Leather Wallets", stats: "-4.9%", reach: "1.7 M", trend: "down" },
    { name: "Rustic Wooden Photo Frames", stats: "-4.1%", reach: "1.6 M", trend: "down" },
    { name: "Bohemian Rattan Baskets", stats: "-5.6%", reach: "2.1 M", trend: "down" },
    { name: "Minimalist Brass Jewelry", stats: "-4.3%", reach: "1.4 M", trend: "down" },
];

const TrendList = () => {
    return (
        <VStack
            borderWidth="1px"
            borderColor="rgba(0, 0, 0, 1)"
            borderRadius="8px"
            overflow="auto"
            width="100%"
            margin="10px auto"
            h={"90vh"}
            bg="white"
        >
            <HStack
                justifyContent="space-between"
                w="100%"
                bg="rgba(251, 221, 107, 1)"
                padding="10px 16px"
                borderBottom="1px solid rgba(0, 0, 0, 1)"
                position={"sticky"}
            >
                <Text fontWeight="400" fontSize="12px" color="rgba(0, 0, 0, 1)">
                    Trend Name
                </Text>
                <Text fontWeight="400" fontSize="12px" color="rgba(0, 0, 0, 1)">
                    Stats
                </Text>
                <Text fontWeight="400" fontSize="12px" color="rgba(0, 0, 0, 1)">
                    Reach
                </Text>
            </HStack>

            {trendsData.map((trend, index) => (
                <HStack
                    key={index}
                    w="100%"
                    padding="12px 16px"
                    justifyContent="space-between"
                    borderBottom={index === trendsData.length - 1 ? "none" : "1px solid rgba(0, 0, 0, 0.1)"}
                >
                    <Text fontWeight="700" fontSize="12px" color="rgba(0, 0, 0, 1)" flex="2">
                        {trend.name}
                    </Text>

                    <HStack flex="1" justifyContent="center">
                        {/* <Image
                            src={trend.trend === "up" ? "./path-to-up-icon.svg" : "./path-to-down-icon.svg"}
                            alt="trend-icon"
                            w="12px"
                            h="12px"
                        /> */}
                        <Text
                            fontWeight="500"
                            fontSize="12px"
                            color={trend.trend === "up" ? "green.500" : "red.500"}
                        >
                            {trend.stats}
                        </Text>
                    </HStack>

                    <Text fontWeight="600" fontSize="12px" color="rgba(0, 0, 0, 1)" flex="1" textAlign="right">
                        {trend.reach}
                    </Text>
                </HStack>
            ))}
        </VStack>
    );
};

export default TrendList;
