import { Routes, Route } from "react-router-dom";
import AboutUsPage from "./Pages/AboutUsPage";
import HomePage from "./Pages/HomePage"


const App: React.FC = () => {
  return (

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
    </Routes>

  );
};

export default App;
