import { HStack, Stack, Text, Image } from "@chakra-ui/react";
import CommonDialogBox from "./CommonDialogBox";
import { useState } from "react";
import TrendsformationCard from "./TransformationCard";
import { useNavigate } from "react-router-dom";
import ScrollableContainer from "./ScrollableContainer";

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

function TransformationContent({ category, label, data, selectedTrend }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectTrendStatus, setSelectTrendStatus] = useState("Popular Trends");
  const navigate = useNavigate();

  const handleSelectTrendStatus = (item) => {
    setSelectTrendStatus(item);
  };

  const getCurrentTrendData = () => {
    const selectedOption = optionsOfTrendingNow.find(
      (option) => option.title === selectTrendStatus
    );
    return data[selectedOption?.key] || [];
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
      </HStack>

      <HStack onClick={() => setIsOpen(!isOpen)} position="relative">
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

      {getCurrentTrendData().length > 0 ? (
        <ScrollableContainer>
          {getCurrentTrendData().map((item, index) => (
            <TrendsformationCard
              key={index}
              item={item}
              index={index}
              type={
                optionsOfTrendingNow.find(
                  (option) => option.title === selectTrendStatus
                )?.key
              }
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
            />
          ))}
        </ScrollableContainer>
      ) : (
        <>No data found with the selected filter</>
      )}
    </Stack>
  );
}

export default TransformationContent;
