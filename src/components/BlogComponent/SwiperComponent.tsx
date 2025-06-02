import Blog from "../../assets/images/blog.png"

const SwiperComponent = () => {
    return (
        <div className="box-border gap-[12px] w-[912px] border border-[#E6E6E6] rounded-xl px-[30px] py-[30px] flex justify-between">
            <div className="flex flex-col text-left">
                <div>
                    <p className="text-[14px] text-[#474749]">Insight</p>
                    <h2 className="text-[26px] text-[#0A0A0A] mt-[8px] leading-[33.28px] w-[336px]">
                        What’s New in Professional Cleaning Services?
                    </h2>
                    <p className="text-[14px] text-[#474749] mt-[8px] w-[336px]">
                        Explore eco-friendly products and innovative advanced technologies shaping modern cleaning services.
                    </p>
                </div>
                <p className="text-[14px] text-[#474749] mt-[50px]">Dec 14, 2024</p>
            </div>
            <div>
                {/* Şəkil əlavə olunacaqsa buraya qoy */}
                <img src={Blog} alt="Blog" className=" rounded-lg" />
            </div>
        </div>
    )
}



export default SwiperComponent
