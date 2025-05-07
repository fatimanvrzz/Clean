import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import ImageCard from "../ServiceGif/ImageCard";
import imageData from "../ServiceGif/ImageData.json";
import Gif1 from "../../assets/images/gif1.svg";
import Gif2 from "../../assets/images/gif2.svg";
import Gif3 from "../../assets/images/gif3.svg";

const imageMapping: Record<string, string> = {
    "/images/gif1.svg": Gif1,
    "/images/gif2.svg": Gif2,
    "/images/gif3.svg": Gif3,
};


const ServiceGif = () => {
    return (
        <div className="w-full max-w-[90.25rem] mx-auto bg-[#EFEFEF] sm:bg-transparent py-[5.0625rem] px-4 md:px-[4.375rem] sm:mb-0">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-left space-y-4 sm:space-y-0">
                <p className="w-full sm:w-[25rem] text-[#0A0A0A] text-4xl sm:text-[3rem] font-medium leading-[1.15]">
                    Deep <span className="text-[#0F42FF]">Cleaning</span> Spotless Results
                </p>
                
                <p className="text-[#5C5C5E] w-full sm:w-[32.125rem] text-base sm:text-[1.25rem] mt-4  mb-[1.5rem] sm:mt-0">
                    Our company offers modern cleaning technologies and environmentally safe solutions.
                </p>
            </div>

            <div className="sm:hidden mt-6">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    onSlideChange={() => console.log('Slayd dəyişdi')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {imageData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex justify-center">
                                <ImageCard
                                    staticSrc={imageMapping[item.staticSrc] || item.staticSrc}
                                    gifSrc={item.gifSrc}
                                    title={item.title}
                                    description={item.description}
                                    buttonText={item.buttonText}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-[1.5rem] place-items-center mt-16 sm:mt-[3.75rem]">
                {imageData.map((item, index) => (
                    <ImageCard
                        key={index}
                        staticSrc={imageMapping[item.staticSrc] || item.staticSrc}
                        gifSrc={item.gifSrc}
                        title={item.title}
                        description={item.description}
                        buttonText={item.buttonText}
                    />
                ))}
            </div>
        </div>
    );
};

export default ServiceGif;