import { Routes, Route } from "react-router-dom";
import AboutUsPage from "./Pages/AboutUsPage";
import HomePage from "./Pages/HomePage"
import BlogPage from "./Pages/BlogPage";


const App: React.FC = () => {
  return (

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/blog" element={<BlogPage />} />
    </Routes>

  );
};

export default App;
