import { HStack, Stack, Text, Image, VStack } from "@chakra-ui/react";
import PricingWidgetsLabel from "./pricingWidgetsLabel";
import CommonDialogBox from "./CommonDialogBox";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const optionsOfTrendingNow = [
  {
    img: "/assets/Clockicon.svg",
    title: "Popular Trends",
    key: "popular",
  },
  {
    img: "/assets/Trending up.svg",
    title: "Emerging Trends",
    key: "emerging",
  },
  {
    img: "/assets/Trending down.svg",
    title: "Declining Trends",
    key: "declining",
  },
];

function EducationalContent({ category, label, data, selectedTrend }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectTrendStatus, setSelectTrendStatus] = useState("Popular Trends");
  const navigate = useNavigate();

  const handleSelectTrendStatus = (item) => {
    setSelectTrendStatus(item);
  };
  return (
    <Stack padding={"10px 24px"}>
      <HStack justifyContent={"space-between"}>
        <Text
          fontWeight={"800"}
          fontSize={"16px"}
          color={"rgba(0, 0, 0, 1)"}
          fontFamily={"Montserrat"}
        >
          {label}
        </Text>
        <PricingWidgetsLabel arrow={"up"} value={"-4.5 %"} />
      </HStack>
      <HStack
        // ref={dropdownRef}
        onClick={() => setIsOpen(!isOpen)}
        position="relative"
      >
        <Text fontWeight={"600"} color={"rgba(0, 0, 0, 1)"} fontSize={"14px"}>
          {selectTrendStatus}
        </Text>
        <Image src="/assets/dropdownlogo.svg" alt="Trending Now" />
        <CommonDialogBox
          items={optionsOfTrendingNow}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onSelect={handleSelectTrendStatus}
          selectedItem={selectTrendStatus}
        />
      </HStack>
      <VStack w="100%" gap={"12px"}>
        {(() => {
          const selectedKey = optionsOfTrendingNow.find(
            (option) => option.title === selectTrendStatus
          )?.key;

          if (!selectedKey || !data[selectedKey]) {
            return <Text>No data available</Text>;
          }

          return data[selectedKey].map((item, index) => (
            <HStack
              key={index}
              justifyContent={"space-between"}
              padding={"8px 12px"}
              borderRadius={"6px"}
              border={"1px solid rgba(0, 0, 0, 1)"}
              width={"100%"}
              onClick={() =>
                navigate(
                  `/trendsAnalysis/${
                    item?.name
                  }?category=${category}&subCategory=${label}&trendType=${
                    optionsOfTrendingNow.find(
                      (option) => option.title === selectTrendStatus
                    )?.key
                  }&selectedTrend=${selectedTrend}&shortCode=${item?.shortcode}`
                )
              }
            >
              <HStack gap={"16px"}>
                <Text
                  fontWeight={"700"}
                  fontSize={"12px"}
                  color={"rgba(0, 0, 0, 1)"}
                >
                  #{index + 1}
                </Text>
                <Text
                  fontWeight={"700"}
                  fontSize={"12px"}
                  color={"rgba(0, 0, 0, 1)"}
                >
                  {item?.name}
                </Text>
              </HStack>
              <HStack>
                <Image
                  src={
                    item?.arrow === "up"
                      ? "/assets/uparrowicon.svg"
                      : "/assets/downarrowicon.svg"
                  }
                  alt="Up Arrow"
                  w="14px"
                  h="14px"
                />
                <Text
                  fontWeight={"700"}
                  fontSize={"12px"}
                  color={
                    item?.arrow === "up"
                      ? "rgba(0, 128, 0, 1)"
                      : "rgba(255, 0, 0, 1)"
                  }
                >
                  {item?.percentage}%
                </Text>
              </HStack>
            </HStack>
          ));
        })()}
      </VStack>
    </Stack>
  );
}

export default EducationalContent;
