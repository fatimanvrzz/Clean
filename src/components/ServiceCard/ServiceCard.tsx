import { useState } from "react";
import ServiceMap from "./ServiceMap";

import deepCleaning from "../../assets/images/deep-cleaning.svg";
import dailyCleaning from "../../assets/images/daily-cleaning.svg";
import laundry from "../../assets/images/laundry.svg";
import carpetWashing from "../../assets/images/carpet-washing.svg";

const services = [
  {
    id: 1,
    img: deepCleaning,
    title: "Deep Cleaning",
    description:
      "A comprehensive cleaning service designed to tackle dirt, grime, and hidden dust in every corner, leaving your refreshed.",
  },
  {
    id: 2,
    img: dailyCleaning,
    title: "Daily Cleaning",
    description:
      "Keep your home or office tidy and welcoming with regular cleaning services tailored to your everyday needs.",
  },
  {
    id: 3,
    img: laundry,
    title: "Laundry",
    description:
      "Get fresh, clean clothes with our professional laundry services, including washing, drying, and folding to save you time effort.",
  },
  {
    id: 4,
    img: carpetWashing,
    title: "Carpet Washing",
    description:
      "Restore the beauty and freshness of your carpets with deep-cleaning services that remove dirt, stains, and odors effectively.",
  },
];

const ServiceCard = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="w-full mt-[55px]">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="text-[2.5rem] font-medium text-left mb-[2rem]">
          Services
        </div>
        <div className="block sm:hidden mb-[3.125rem]">
          <ServiceMap />
        </div>
        <div className="hidden sm:block">
          <ServiceMap />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2.25rem] mt-[2rem]">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-[#F8F8FF] border-2 border-[#EFEFEF] rounded-lg p-[1.875rem] hover:bg-[#EFEFEF] cursor-pointer flex flex-col items-center sm:items-start sm:text-left"
            onClick={() => setIsClicked(!isClicked)}
          >
            <img
              src={service.img}
              alt={service.title}
              className="h-[2.5rem] object-cover mb-4"
            />
            <h3 className="text-[1.625rem] font-normal mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-[0.875rem] w-[14rem] line-clamp-4">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;