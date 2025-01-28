import { useParams } from "react-router-dom";
import { Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import TrendsNameHeadingLabel from "@/components/TrendsNameHeadingLabel";
import ListOfTrends from "@/components/ListOfMethodsInTrends";
import TransformationContent from "@/components/TransformationContent";
import PersonalNarratives from "@/components/PersonalNarratives";
import EducationalContent from "@/components/EducationalContent";
import LifeCycleDocumentation from "@/components/LifeCycleDocumentation";

import fashionData from "../../public/Trends/-fashion.json";
import beautyData from "../../public/Trends/-beauty.json";
import homeData from "../../public/Trends/-home.json";
import fitnessData from "../../public/Trends/-fitness.json";

import lifestyleData from "../../public/Trends/-lifestyle.json";
import petsData from "../../public/Trends/-pets.json";
import kitchenData from "../../public/Trends/-kitchen.json";
import parentingData from "../../public/Trends/-parenting.json";

function Trends() {
  const [selectedTrend, setSelectedTrend] = useState("Video Formats");
  const [data, setData] = useState();
  const { category } = useParams();

  const handleSelectTrendType = (trendType) => {
    setSelectedTrend(trendType);
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  const fetchData = () => {
    switch (category?.toLowerCase()) {
      case "fashion":
        return setData(fashionData);
      case "beauty":
        return setData(beautyData);
      case "home":
        return setData(homeData);
      case "fitness":
        return setData(fitnessData);
      case "lifestyle":
        return setData(lifestyleData);
      case "pets":
        return setData(petsData);
      case "kitchen":
        return setData(kitchenData);
      case "parenting":
        return setData(parentingData);
      default:
        return setData(fashionData);
    }
  };

  return (
    <Stack>
      {data && (
        <>
          <TrendsNameHeadingLabel heading={category} />
          <ListOfTrends
            selectedMethodOftrendType={selectedTrend}
            handleSelectTrendType={handleSelectTrendType}
          />

          {Object.keys(data[selectedTrend])[0] && (
            <TransformationContent
              category={category}
              selectedTrend={selectedTrend}
              label={Object.keys(data[selectedTrend])[0]}
              data={data[selectedTrend][Object.keys(data[selectedTrend])[0]]}
            />
          )}
          {Object.keys(data[selectedTrend])[1] && (
            <PersonalNarratives
              category={category}
              selectedTrend={selectedTrend}
              label={Object.keys(data[selectedTrend])[1]}
              data={data[selectedTrend][Object.keys(data[selectedTrend])[1]]}
            />
          )}
          {Object.keys(data[selectedTrend])[2] && (
            <EducationalContent
              category={category}
              selectedTrend={selectedTrend}
              label={Object.keys(data[selectedTrend])[2]}
              data={data[selectedTrend][Object.keys(data[selectedTrend])[2]]}
            />
          )}
          {Object.keys(data[selectedTrend])[3] && (
            <LifeCycleDocumentation
              category={category}
              selectedTrend={selectedTrend}
              label={Object.keys(data[selectedTrend])[3]}
              data={data[selectedTrend][Object.keys(data[selectedTrend])[3]]}
            />
          )}
        </>
      )}
    </Stack>
  );
}

export default Trends;
