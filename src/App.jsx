import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TrendsListPage from "./TrendsListPage";
import TrendDetailsPage from "./TrendDetailsPage";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TrendsListPage />} />
        <Route path="/trend/:trendName" element={<TrendDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
