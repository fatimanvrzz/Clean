import Navbar from "../../components/Navbar/Navbar";
import Gif from "../../assets/images/gif.mp4"
import Quote from "../../components/Quote/Quote";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import AboutUs from "../../components/AboutUs/AboutUs";
import Partners from "../../components/Partners/Partners";
import ServiceGif from "../../components/ServiceGif/ServiceGif";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import FAQ from "../../components/FAQ/FAQ";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center w-full min-h-screen overflow-hidden">

      {/* Navbar & Header section */}
      <div className="max-w-[81.25rem] w-[90%] sm:w-[95%] md:w-[90%] lg:w-[90%] min-h-screen relative">
        <Navbar />
        <div className="h-auto items-center leading-10 lg:leading-16">
          <p className="text-[1.375rem] md:text-[3rem] leading-[2.5rem] xs:leading-[1.71875rem] sm:leading-[3.71875rem] lg:leading-[3.90625rem] mt-[3.125rem] font-medium">
            Enjoy the moments that matter <br />
            We’ll handle the <span className="text-[#0F42FF]">Cleanup</span>
          </p>
        </div>
        <div className="mt-[1.25rem] h-auto relative">
          <video
            className="rounded-xl w-full max-w-[81.25rem] h-auto xl:h-[26.75rem] sm:h-[26.75rem] md:h-[26.75rem] object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={Gif} type="video/mp4" />
            Sizin brauzeriniz bu videonu dəstəkləmir.
          </video>
          <Quote className="absolute z-10 bottom-4 mr-auto text-left md:text-right md:ml-auto md:mr-0 md:left-4 right-4" />

        </div>
        <div className="w-full flex mt-[1rem] text-[1rem] text-[#5C5C5E]">
          <p className="ml-auto text-left max-w-[30.75rem] hidden md:block">
            From top to bottom, we make your space shine, let us handle the mess while you focus on what matters.
          </p>

          <p className="mr-auto text-left w-[16rem] block md:hidden">
            We make your space shine—let us handle the mess.
          </p>
        </div>
        <div className="relative z-10 w-full">
          <ServiceCard />
        </div>
        {/* dsfadfad */}
      </div>

      {/* About Us Section */}
      <div className="relative z-10 w-full overflow-hidden mt-[5.25rem]">
        <AboutUs />
      </div>

      <Partners />
      <ServiceGif />

      <div className="w-full px-4">
        <HowItWorks />
      </div>

      <FAQ />
      <Footer />


    </div>
  );
}

export default HomePage;