import { Routes, Route } from "react-router-dom";
import AboutUsPage from "./Pages/AboutUsPage";
import HomePage from "./Pages/HomePage"
import BlogPage from "./Pages/BlogPage";
import BookServicePage from "./Pages/BookServicePage";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Quote from "./components/Quote/Quote";


const App: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/book-a-service" element={<BookServicePage />} />
        <Route path="/book-a-service" element={<Quote/>} />
      </Routes>
    </>
  );
};

export default App;
