import { HStack, Stack, Text } from "@chakra-ui/react"
import ReactApexChart from "react-apexcharts"
import { useState } from "react"
import PropTypes from "prop-types";

const listOfXaxix = ["All", "Day", "Week", "Month", "Year"]

function InterestGraph({ onSelectGraphDates, selectedGraphDates }) {
    const [state, setState] = useState({

        series: [{
            name: "Desktops",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }],
        options: {
            chart: {
                height: 350,
                type: 'line',
                zoom: {
                    enabled: false
                },
                toolbar: {
                    show: true,
                    tools: {
                        download: false // <== line to add
                    }
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },

            grid: {
                row: {
                    colors: ['white', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                },
            },
            xaxis: {
                show: false
            }

        },


    });

    return (
        <Stack>
            <Text fontWeight={"700"} fontSize={"16px"} color={"rgba(0, 0, 0, 1)"}>Interest Graph</Text>
            <ReactApexChart options={state.options} series={state.series} type="line" height={350} />
            <HStack w={"100%"} alignItems={"center"} justifyContent={"space-between"}>
                {listOfXaxix.map((item, index) => {
                    return (
                        <Text key={index} onClick={() => onSelectGraphDates(item)} padding={"9px"} border={"1px solid black"} borderRadius={"128px"} background={item == selectedGraphDates ? "rgba(251, 221, 107, 1)" : ""} color={"rgba(0, 0, 0, 1)"} fontWeight={"600"} fontSize={"12px"}>{item}</Text>
                    )
                })}
            </HStack>

        </Stack>
    )
}

InterestGraph.propTypes = {
    onSelectGraphDates: PropTypes.func.isRequired,
    selectedGraphDates: PropTypes.string
};

export default InterestGraph