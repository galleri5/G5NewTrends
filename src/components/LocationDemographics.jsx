import { Stack, Text } from "@chakra-ui/react";
import ReactApexChart from "react-apexcharts";
import { useState, useEffect } from "react";

function LocationDemographics({ data }) {
  const topFive = data.slice(0, 5);

  const [state, setState] = useState({
    series: topFive.map((item) => item.percentage),
    options: {
      chart: {
        width: "100%",
        type: "pie",
      },
      labels: topFive.map((item) => item.name),
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: "100%",
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  return (
    <Stack>
      <Text fontWeight="700" fontSize="16px" color="rgba(0, 0, 0, 1)">
        Location Demographics
      </Text>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="pie"
        width="100%"
      />
    </Stack>
  );
}

export default LocationDemographics;
