import ContentInspiration from '@/components/ContentInspiration';
import ListOfTrends from '@/components/ListOfTrends'
import TopTrendsComponent from '@/components/TopTrendsComponent';
import TrendingNow from '@/components/TrendingNow';
import TrendsHeading from '@/components/TrendsHeading'
import { Stack } from '@chakra-ui/react'
import { useState } from 'react'

function Home() {
    const [selectedTrend, setSelectedTrend] = useState("Fashion");
    console.log(selectedTrend);
    const [selectedTrendingNow, setSelectedTrendingNow] = useState("Trending Now");
    console.log(selectedTrendingNow);
    const [selectedContent, setSelectedContent] = useState("All");



    const handleTrendSelect = (trend) => {
        setSelectedTrend(trend);
    };

    const handleTrendingNowSelect = (trendingNow) => {
        setSelectedTrendingNow(trendingNow);
    }

    const handleSelectContent = (content) => {
        setSelectedContent(content);
    }
    return (
        <Stack>
            <TrendsHeading />
            <ListOfTrends onTrendSelect={handleTrendSelect} selectedTrend={selectedTrend} />
            <TrendingNow onSelectTrendingNow={handleTrendingNowSelect} selectedTrendingNow={selectedTrendingNow} selectedTrend={selectedTrend} />
            <TopTrendsComponent selectedTrend={selectedTrend} />
            <ContentInspiration onSelectContent={handleSelectContent} selectedContent={selectedContent} />
        </Stack>
    )
}

export default Home