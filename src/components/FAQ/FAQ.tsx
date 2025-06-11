import React, { useState } from "react";
import FAQImage from "../../assets/images/faq-pic.png";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData: FAQItem[] = [
    {
      question: "Do I need to be home during the cleaning?",
      answer: "No, you do not need to be home during the cleaning. Our team is trained to work efficiently without supervision.",
    },
    {
      question: "What is your cancellation policy?",
      answer: "You can cancel or reschedule up to 24 hours before your appointment without any charge.",
    },
    {
      question: "What are your payment options?",
      answer: "We accept various payment methods including credit cards",
    },
    {
      question: "Are your cleaners insured and background-checked?",
      answer: "Yes, all our cleaners are fully insured and have passed rigorous background checks.",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row w-full max-w-[81.25rem] justify-between mt-[11.375rem] px-4 lg:px-0 mx-auto">
      <div className="w-full lg:w-1/2">
        <h2 className="text-[2.5rem] font-medium">FAQ</h2>
        <p className="w-full lg:w-[42.25rem] mt-[1.5rem] text-[#474749] text-[0.875rem]">
          Discover answers to frequently asked questions about our cleaning services, including details on scheduling, pricing, service options, and the
          <span className="text-[#0F42FF]"> eco-friendly</span> products we use.
        </p>

        <div className="mt-[2.5rem]">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-gray-200 py-4 text-[1.25rem]">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleAnswer(index)}
              >
                <h3 className="text-[1.25rem]">{item.question}</h3>
                <span className={`text-[1.5rem] transition-transform duration-300 text-[#0F42FF] ${activeIndex === index ? "rotate-45" : "rotate-0"
                  }`}>
                  +
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                  }`}
              >
                <p
                  className="mt-2 text-[#474749] text-[1rem] pt-3 pl-4 w-[260px] h-[60px] lg:w-[35.625rem] lg:h-auto lg:pl-9"
                >
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center lg:justify-end lg:ml-8">
        <img
          src={FAQImage}
          alt="FAQ"
          className="w-full max-w-[400px] lg:max-w-none"
          style={{ width: '34.8125rem', height: 'auto' }}
        />
      </div>
    </div>
  );
};

export default FAQ;