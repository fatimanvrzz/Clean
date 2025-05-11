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

    <div className="page-wrapper">
      <div className="page-container">
        <Navbar />

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 text-left">
          <p className="w-full sm:w-[39rem] text-[#0A0A0A] text-4xl sm:text-[3rem] font-medium leading-[1.15] pt-[3.5rem]">
            Transforming Spaces with <span className="text-[#0F42FF]">Professional Cleaning</span>
          </p>

          <p className="text-[#5C5C5E] sm:w-[36rem] text-base sm:text-[1.25rem] text-justify pl-7 sm:mt-0">
            As a leading cleaning service provider in Baku, we specialize in professional cleaning for homes, offices, hotels, and more, with a strong reputation for high-quality service.
          </p>
        </div>

        <div className="mt-[24px]">
          <img src={AboutUsPic} className="w-full h-[656px] rounded-3xl" />
        </div>

        <div className="flex justify-between items-start w-full mt-[91px]">
          <p className="text-[#0F42FF] w-[232px] text-[20px]">
            We offer a wide range of Cleaning Services
          </p>
          <h2 className="text-[#474749] w-[720px] text-[42px] text-justify tracking-tight">Home, apartment, office, hotel, window, facade, and exterior cleaning services. <span className="text-[#0F42FF]">Our professionals</span> is ready to meet the needs of individuals, office owners, and large institutions.</h2>
        </div>

        <div className="mt-[194px] text-[46px] text-[#000] w-[556px]">
          <h2>Our Skilled Team <span className="text-[#0F42FF]">Committed to Excellence</span></h2>
        </div>

        {/* burda error var */}
        <div className="mt-6 px-4 sm:px-0">
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

        <div className="mt-[42px]">
          <p className="w-[775px] text-[20px] text-[#000]">While professional cleaning services are available from multiple companies in Baku, our company stands out for its wide range of services, exceptional quality, and a commitment to customer satisfaction.</p>
        </div>

        <div className="mt-[194px] w-[550px] h-[116px]">
          <h1 className="text-[46px]">The Reliable Partners Who Support <span className="text-[#0F42FF]">Our Mission</span></h1>
        </div>

        <div className="mt-[78px]">
          <Partners />
        </div>

        <div className="mt-[213px]">
          <HowItWorks/>
        </div>
      </div>
      
      <Footer/>
    </div>

  )
}

export default AboutUsPage
