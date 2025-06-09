import { Routes, Route } from "react-router-dom";
import AboutUsPage from "./Pages/AboutUsPage";
import HomePage from "./Pages/HomePage"
import BlogPage from "./Pages/BlogPage";
import ContactPage from "./Pages/ContactPage";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";


const App: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
};

export default App;
