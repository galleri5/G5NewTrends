import { Stack, Text } from "@chakra-ui/react"
import ReactApexChart from "react-apexcharts"
import { useState } from "react"

function LocationDemographics() {
    const [state, setState] = useState({

        series: [44, 55, 13, 43, 22],
        options: {
            chart: {
                width: "100%",
                type: 'pie',
            },
            labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: "100%"
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        },


    });
    return (
        <Stack>
            <Text fontWeight={"700"} fontSize={"16px"} color={"rgba(0, 0, 0, 1)"}>Location Demographics</Text>
            <ReactApexChart options={state.options} series={state.series} type="pie" width={"100%"} />

        </Stack>
    )
}

export default LocationDemographics