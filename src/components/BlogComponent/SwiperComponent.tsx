import BlogComp from "../../assets/images/blog-comp.svg"

const SwiperComponent = () => {
    return (
        <div className="box-border gap-[12px] w-full sm:w-[912px] border border-[#E6E6E6] rounded-xl px-4 sm:px-[30px] py-[25px] flex flex-col sm:flex-row justify-between">
            <div className="flex flex-col text-left w-full sm:w-[430px]">
                <p className="text-[14px] text-[#474749]">Insight</p>
                <h2 className="text-[20px] sm:text-[26px] text-[#0A0A0A] mt-[8px] leading-[1.3]">
                    What’s New in Professional Cleaning Services?
                </h2>
                <p className="text-[14px] text-[#474749] mt-[8px]">
                    Explore eco-friendly products and innovative advanced technologies shaping modern cleaning services.
                </p>
                <p className="text-[14px] text-[#474749] mt-[20px] sm:mt-[50px]">Dec 14, 2024</p>
            </div>

            <div className="w-full sm:w-auto mt-4 sm:mt-0">
                <img src={BlogComp} alt="Blog" className="w-full sm:w-auto rounded-lg object-cover" />
            </div>
        </div>
    )
}

export default SwiperComponent
