import Navbar from "../../components/Navbar/Navbar"
import Blog from "../../assets/images/blog.png"
import BlogSlider from "../../components/BlogComponent/BlogsSlider"
import Footer from "../../components/Footer/Footer"



const BlogPage = () => {
    return (
        <div className="flex flex-col items-center w-full">
            <Navbar />

            <div className="w-full max-w-[82rem]">

                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 text-left">
                    <p className="w-full sm:w-[35rem] text-[#0A0A0A] text-4xl sm:text-[3rem] font-medium leading-[1.15] pt-[3.5rem]">
                        Blog
                    </p>

                    <p className="text-[#5C5C5E] sm:w-[35rem] text-base sm:text-[1.25rem] text-justify sm:mt-0">
                        Deep cleaning removes hidden dirt, allergens, and bacteria, promoting a healthier, safer home.
                    </p>
                </div>

                <div className="flex border border-[#E6E6E6] mt-[40px] h-[411px] rounded-xl">
                    <div className="flex items-start justify-between w-full p-[30px]">
                        <div className="flex-row  w-[430px] h-[235px] items-center">
                            <p className="text-[14px] text-[#474749]">Insight</p>
                            <h2 className="text-[26px] text-[#0A0A0A] mt-[8px] leading-[33.28px]">The Importance of Regular Deep Cleaning for Your Health</h2>
                            <p className="text-[14px] text-[#474749] w-[336px] mt-[8px] h-[58px]">Deep cleaning removes hidden dirt and germs, improving air quality and reducing health risks for a safer, healthier home.</p>
                            <p className="text-[14px] text-[#474749] mt-[50px]">Dec 14, 2024</p>
                        </div>
                        <div className="">
                            <img src={Blog} alt="" />
                        </div>
                    </div>
                </div>


                <div className=" sm:flex-row sm:items-end text-left">
                    <p className="w-full sm:w-[35rem] text-[#0A0A0A] text-4xl sm:text-[3rem] font-medium leading-[1.15] pt-[3.5rem]">
                        <span className="text-[#0F42FF]">Eco-Friendly</span> Practices for a Healthier Home
                    </p>
                </div>
                <BlogSlider />
            </div>
            <Footer/>
        </div>
    )
}

export default BlogPage
