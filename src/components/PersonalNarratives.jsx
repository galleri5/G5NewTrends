import { HStack, Stack, Text, Image } from "@chakra-ui/react";
import CommonDialogBox from "./CommonDialogBox";
import { useState } from "react";
import PersonalNarativesCard from "./PersonalNarativesCard";
import { useNavigate } from "react-router-dom";
import ScrollableContainer from "./ScrollableContainer";
import PropTypes from "prop-types";

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

function PersonalNarratives({ category, label, data, selectedTrend }) {
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
    <Stack padding={"20px 24px"}>
      <HStack justifyContent={"space-between"}>
        <Text
          fontWeight={"800"}
          fontSize={"16px"}
          color={"rgba(0, 0, 0, 1)"}
          fontFamily={"Poppins"}
        >
          {label}
        </Text>
      </HStack>

      <HStack
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        cursor={"pointer"}
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

      {getCurrentTrendData().length > 0 ? (
        <ScrollableContainer gap="16px">
          {getCurrentTrendData().map((item, index) => (
            <PersonalNarativesCard
              key={index}
              item={item}
              index={index}
              type={
                optionsOfTrendingNow.find(
                  (option) => option.title === selectTrendStatus
                )?.key
              }
              onClick={() => {
                const queryParams = new URLSearchParams({
                  category: category || "",
                  subCategory: label || "",
                  trendType:
                    optionsOfTrendingNow.find(
                      (option) => option.title === selectTrendStatus
                    )?.key || "",
                  selectedTrend: selectedTrend || "",
                  shortCode: item?.shortcode || "",
                });

                navigate(
                  `/trendsAnalysis/${item?.name}?${queryParams.toString()}`
                );
              }}
            />
          ))}
        </ScrollableContainer>
      ) : (
        <>No data found with the selected filter</>
      )}
    </Stack>
  );
}

PersonalNarratives.propTypes = {
  category: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  selectedTrend: PropTypes.string.isRequired,
};

export default PersonalNarratives;
