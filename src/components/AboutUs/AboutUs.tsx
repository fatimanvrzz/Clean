import { BsArrowRight } from "react-icons/bs";

const AboutUs = () => {
  return (
    <div className="flex justify-center w-full h-auto md:h-[21.5rem] bg-[#EFEFEF] py-12 md:py-[5.0625rem] px-4 md:px-[4.375rem] mt-8 md:mt-[2rem]">
      <div className="flex flex-col md:flex-row items-start justify-between w-full max-w-[81.25rem] gap-6 md:gap-3">
        <h5 className="w-full md:w-[12.5rem] text-4xl md:text-[2.5rem] font-medium mb-4 md:mb-0">
          About Us
        </h5>
        
        <div className="flex flex-col w-full md:w-[36.25rem]">
          <p className="text-left text-[#474749] text-base md:text-[1rem] leading-relaxed">
            At Clean.az, we specialize in professional cleaning services across Baku. From homes to offices, we deliver top-quality results using
            <span className="text-[#0F42FF]"> advanced tools</span> and
            <span className="text-[#0F42FF]"> eco-friendly</span> products. Trust us to keep your spaces spotless and fresh!
          </p>
          
          <div className="mt-8 md:mt-14 w-full">
            <p className="flex justify-end items-center gap-2.5 text-[#000] font-medium hover:cursor-pointer">
              Learn more
              <span className="text-[#0F42FF]">
                <BsArrowRight className="text-lg md:text-base"/>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;