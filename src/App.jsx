import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TrendsListPage from "./TrendsListPage";
import TrendDetailsPage from "./TrendDetailsPage";
import NotFoundPage from "./page-not-found";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TrendsListPage />} />
        <Route path="/trend/:trendName" element={<TrendDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
