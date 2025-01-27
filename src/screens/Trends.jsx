import { useParams } from "react-router-dom";
import { Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import TrendsNameHeadingLabel from "@/components/TrendsNameHeadingLabel";
import ListOfTrends from "@/components/ListOfMethodsInTrends";
import TransformationContent from "@/components/TransformationContent";
import PersonalNarratives from "@/components/PersonalNarratives";
import EducationalContent from "@/components/EducationalContent";
import LifeCycleDocumentation from "@/components/LifeCycleDocumentation";
import { Beauty, Fashion, Home } from "../../public/constants";

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
    switch (category) {
      case "Fashion":
        return setData(Fashion);
      case "Beauty":
        return setData(Beauty);
      case "Home":
        return setData(Home);
      case "fitness":
        return Fashion;
      default:
        return Fashion;
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

          <TransformationContent
            category={category}
            selectedTrend={selectedTrend}
            label={Object.keys(data[selectedTrend])[0]}
            data={data[selectedTrend][Object.keys(data[selectedTrend])[0]]}
          />
          <PersonalNarratives
            category={category}
            selectedTrend={selectedTrend}
            label={Object.keys(data[selectedTrend])[1]}
            data={data[selectedTrend][Object.keys(data[selectedTrend])[1]]}
          />
          <EducationalContent
            category={category}
            selectedTrend={selectedTrend}
            label={Object.keys(data[selectedTrend])[2]}
            data={data[selectedTrend][Object.keys(data[selectedTrend])[2]]}
          />
          <LifeCycleDocumentation
            category={category}
            selectedTrend={selectedTrend}
            label={Object.keys(data[selectedTrend])[3]}
            data={data[selectedTrend][Object.keys(data[selectedTrend])[3]]}
          />
        </>
      )}
    </Stack>
  );
}

export default Trends;
