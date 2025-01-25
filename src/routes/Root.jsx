import { Route, Routes } from 'react-router-dom'
import Home from '../screens/Home'
import TrendsAnalysis from '../screens/TrendsAnalysis'
import Trends from '@/screens/Trends'

function Root() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trends/:category" element={<Trends />} />
            <Route path="/trendsAnalysis/:trend" element={<TrendsAnalysis />} />
            {/* <Route path='/trends/:selectedtrend/:trending' element={<Trends />} /> */}
        </Routes>
    )
}

export default Root