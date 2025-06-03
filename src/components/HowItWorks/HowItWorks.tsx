import { BsArrowRight } from "react-icons/bs";

const howItWorksData = [
  {
    caption: "Get a Quote",
    title: "Easily request a quote before booking your cleaning service",
    description:
      "You can request a quote before booking your service. While the quote provides an estimated cost, you can choose to be contacted by our team for an exact price after receiving it.",
    link: "#",
  },
  {
    caption: "Book a Service",
    title: "Book a service by filling in the necessary details",
    description:
      "You can book a service after receiving a quote, or skip the quote and directly book the service. Our team will contact you to finalize the details.",
    link: "#",
  },
  {
    caption: "Contact Us",
    title: "Schedule Your Service by Providing the Required Details",
    description:
      "If you prefer not to book online, you can reach us by phone, provide your details, and our team will assist you promptly.",
    link: "#",
  },
];

const HowItWorks = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start w-full lg:w-[81.25rem] mt-[5.125rem] px-4 lg:px-0 gap-12">
      <p className="text-[1.5rem] font-medium w-full lg:w-[15rem]">How it Works</p>

      <div className="w-full lg:w-[903px] flex flex-col gap-[1rem]">
        {howItWorksData.map((item, index) => (
          <div key={index} className="flex flex-col">
            <div className="flex flex-col lg:flex-row justify-between pb-5">
              <div className="flex flex-col lg:flex-row items-start w-full gap-5">
                <p className="text-[1.625rem] text-[#0F42FF] w-full lg:w-[15.375rem] flex-shrink-0">
                  {item.caption}
                </p>
                <div className="flex flex-col lg:flex-row items-center w-full">
                  <div className="flex flex-col w-full gap-5">
                    <div className="flex items-center justify-between w-full">
                      <p className="text-[1.25rem] font-medium text-[#0A0A0A] opacity-80">
                        {item.title}
                      </p>
                      <div className="ml-4 text-[#0F42FF]">
                        <BsArrowRight />
                      </div>
                    </div>
                    <p className="w-full text-[1rem] text-[#6A6161]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {index !== howItWorksData.length - 4 && (
              <div className="w-full h-[1px] bg-[#E6E6E6]" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
