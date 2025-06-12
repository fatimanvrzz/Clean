import { BsArrowRight } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const HowItWorks = () => {
  const { t } = useTranslation("howItWorks");
  const howItWorksItems = t("items", { returnObjects: true });

  return (
    <div className="flex justify-center">
      <div className="flex flex-col lg:flex-row justify-between items-start w-full lg:w-[81.25rem] sm:mt-[5.125rem] mt-[1rem] gap-12">
        <p className="sm:text-[24px] text-[20px] font-medium w-full lg:w-[15rem]">
          {t("title")}
        </p>

        <div className="w-full lg:w-[903px] flex flex-col gap-[1rem]">
          {Array.isArray(howItWorksItems) &&
            howItWorksItems.map((item, index) => (
              <div key={index} className="flex flex-col">
                <div className="flex flex-col lg:flex-row justify-between pb-5">
                  <div className="flex flex-col lg:flex-row items-start w-full gap-5">
                    <p className="text-[16px] sm:text-[24px] text-[#0F42FF] w-full lg:w-[15.375rem] flex-shrink-0">
                      {item.caption}
                    </p>
                    <div className="flex flex-col lg:flex-row items-center w-full">
                      <div className="flex flex-col w-full gap-5">
                        <div className="flex items-center justify-between w-full">
                          <p className="text-[16px] sm:text-[20px] font-medium text-[#0A0A0A] opacity-80">
                            {item.title}
                          </p>
                          <div className="ml-4 text-[#0F42FF]">
                            <BsArrowRight />
                          </div>
                        </div>
                        <p className="w-full text-[14px] sm:text-[16px] text-[#6A6161]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {index !== howItWorksItems.length - 1 && (
                  <div className="w-full h-[1px] bg-[#E6E6E6]" />
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
