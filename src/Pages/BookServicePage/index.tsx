import Navbar from "../../components/Navbar/Navbar";
import ServiceFilter from "../../components/ServiceFilter/ServiceFilter";
import PriceSummary from "../../components/PriceSummary/PriceSummary";
import { useState } from "react";
import Footer from "../../components/Footer/Footer";

export type Service = {
  room: string;
  name: string;
  price: number;
  count?: number;  
};

const BookServicePage = () => {
  const [selectedServices, setSelectedServices] = useState<Service[]>([]);

  return (
    <div className="flex flex-col w-full min-h-screen">
      <Navbar />
      <div className="w-full max-w-[1300px] mx-auto mt-[55px] flex flex-col">
        <h1 className="sm:text-[48px] text-[22px] w-full max-w-[347px] leading-[60px] mb-[94px] font-semibold">
          Get a Quote <span className="text-[#0F42FF]">Book a Service</span>
        </h1>

        <div className="flex gap-8 min-h-[calc(100vh-55px-94px-100px)] pb-20">
          <div className="flex-1 overflow-y-auto pr-2">
            <ServiceFilter selected={selectedServices} setSelected={setSelectedServices} />
          </div>

          <div className="w-[400px]">
            <PriceSummary selected={selectedServices} />
          </div>
        </div>
      </div>


      <Footer />
    </div>
  );
};

export default BookServicePage;
