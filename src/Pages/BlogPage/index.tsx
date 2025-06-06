import Navbar from "../../components/Navbar/Navbar";
import Blog from "../../assets/images/blog.png";
import BlogSlider from "../../components/BlogComponent/BlogsSlider";
import Footer from "../../components/Footer/Footer";

const BlogPage = () => {
    return (
        <div className="flex flex-col items-center w-full">

            <div className="w-full px-4 sm:px-0">
                <Navbar />
            </div>

            <div className="w-full max-w-[82rem] px-4 sm:px-8">

                {/* Title and Description */}
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 text-left mt-8">
                    <p className="w-full sm:w-[35rem] text-[#0A0A0A] text-[2rem] xs:text-[1.75rem] sm:text-[3rem] font-medium leading-[1.15]">
                        Blog
                    </p>

                    <p className="text-[#5C5C5E] text-[1rem] xs:text-[0.9rem] sm:w-[35rem] sm:text-[1.25rem] text-justify sm:mt-0">
                        Deep cleaning removes hidden dirt, allergens, and bacteria, promoting a healthier, safer home.
                    </p>
                </div>

                {/* Main Blog Box */}
                <div className="flex flex-col sm:flex-row border border-[#E6E6E6] mt-[40px] rounded-xl overflow-hidden h-auto sm:h-[411px]">
                    <div className="flex flex-col sm:flex-row items-start justify-between w-full p-[20px] sm:p-[30px] gap-4">
                        {/* Text Content */}
                        <div className="w-full sm:w-[430px]">
                            <p className="text-[14px] text-[#474749]">Insight</p>
                            <h2 className="text-[20px] sm:text-[26px] text-[#0A0A0A] mt-[8px] leading-[1.3]">
                                The Importance of Regular Deep Cleaning for Your Health
                            </h2>
                            <p className="text-[14px] text-[#474749] mt-[8px] h-auto sm:h-[58px]">
                                Deep cleaning removes hidden dirt and germs, improving air quality and reducing health risks for a safer, healthier home.
                            </p>
                            <p className="text-[14px] text-[#474749] mt-[20px] sm:mt-[50px]">
                                Dec 14, 2024
                            </p>
                        </div>

                        {/* Image */}
                        <div className="w-full sm:w-auto mt-4 sm:mt-0">
                            <img
                                src={Blog}
                                alt="Blog"
                                className="w-full max-w-[100%] sm:w-auto object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </div>

                {/* Second Blog Title */}
                <div className="text-left mt-12">
                    <p className="w-full sm:w-[35rem] text-[#0A0A0A] text-[1.75rem] sm:text-[3rem] font-medium leading-[1.15]">
                        <span className="text-[#0F42FF]">Eco-Friendly</span> Practices for a Healthier Home
                    </p>
                </div>

                {/* Blog Slider */}
                <BlogSlider />
            </div>

            <Footer />
        </div>
    );
};

export default BlogPage;
