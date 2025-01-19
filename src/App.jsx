import { BrowserRouter as Router } from "react-router-dom";
import Root from "./routes/Root";

function App() {

  return (
    <>
      <Router>
        <div className="main-wrapper">
          <Root />
        </div>
      </Router>
    </>
  )
}

export default App
