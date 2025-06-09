import Navbar from "../../components/Navbar/Navbar"
import AboutUsPic from "../../assets/images/about-us-pic.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import FaqPic from '../../assets/images/faq-pic.png';
import Partners from "../../components/Partners/Partners";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import Footer from "../../components/Footer/Footer";



const imageList = [
  FaqPic,
  FaqPic,
  FaqPic,
  FaqPic
];

const AboutUsPage = () => {
  return (

    <div className="flex flex-col items-center w-full">
      <div className="max-w-[81.25rem] w-[90%] sm:w-[95%] md:w-[90%] lg:w-[90%] min-h-screen relative">
        <Navbar />
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 text-left mt-[55px]">
          <p className="w-full sm:w-[39rem] text-[#0A0A0A] text-4xl sm:text-[3rem] font-medium leading-[1.15] text-[22px]">
            Transforming Spaces with <span className="text-[#0F42FF]">Professional Cleaning</span>
          </p>

          <p className="text-[#5C5C5E] sm:w-[36rem] font-medium sm:text-[18px] sm:pl-7 sm:mt-0 text-[12px]">
            As a leading cleaning service provider in Baku, we specialize in professional cleaning for homes, offices, hotels, and more, with a strong reputation for high-quality service.
          </p>
        </div>

        <img
          src={AboutUsPic}
          className="w-full h-auto sm:h-[656px] rounded-3xl object-cover mt-[22px]"
        />

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start w-full mt-[58px] sm:mt-[91px] gap-6">
          <p className="text-[#0F42FF] max-w-[240px] sm:text-[20px] text-[15px]">
            We offer a wide range of Cleaning Services
          </p>
          <h2 className="sm:text-[42px] text-[#474749] w-full sm:w-[720px] text-justify tracking-tight text-[18px]">
            Home, apartment, office, hotel, window, facade, and exterior cleaning services. <span className="text-[#0F42FF]">Our professionals</span> is ready to meet the needs of individuals, office owners, and large institutions.
          </h2>
        </div>


        <div className="mt-[58px] sm:mt-[194px] sm:text-[46px] text-[#000] sm:w-[556px] w-[267px] text-[22px] font-medium">
          <h2>Our Skilled Team <span className="text-[#0F42FF]">Committed to Excellence</span></h2>
        </div>


        <div className="mt-6  sm:px-0">
          <Swiper
            spaceBetween={34}
            loop={false}
            grabCursor={true}
            breakpoints={{
              320: {
                slidesPerView: 1.2,
              },
              640: {
                slidesPerView: 2.2,
              },
              1024: {
                slidesPerView: 3.2,
              },
            }}
            onSlideChange={() => console.log('Slayd dəyişdi')}
            onSwiper={(swiper) => console.log(swiper)}
            className="cursor-grab active:cursor-grabbing"
          >
            {imageList.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="flex">
                  <img
                    src={src}
                    alt={`Şəkil ${index + 1}`}
                    className="rounded-xl"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-[15px] sm:mt-[42px]">
          <p className="w-full sm:w-[775px] text-[14px] sm:text-[20px] text-[#000]">
            While professional cleaning services are available from multiple companies in Baku, our company stands out for its wide range of services, exceptional quality, and a commitment to customer satisfaction.
          </p>
        </div>


        <div className="mt-[58px] sm:mt-[194px] w-[267px] sm:w-[600px] font-medium sm:px-0">
          <h1 className="sm:text-[46px] text-[24px]">
            The Reliable Partners Who Support <span className="text-[#0F42FF]">Our Mission</span>
          </h1>
        </div>


        <div className="">
          <Partners />
        </div>

        <div className="">
          <HowItWorks />
        </div>
      </div>

      <Footer />
    </div>

  )
}

export default AboutUsPage
