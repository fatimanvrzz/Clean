// pages/ContactPage.tsx
import Navbar from "../../components/Navbar/Navbar";
import ServiceFilter from "../../components/ServiceFilter/ServiceFilter";
import PriceSummary from "../../components/PriceSummary/PriceSummary";
import { useState } from "react";

export type Service = {
  room: string;
  name: string;
  price: number;
};

const ContactPage = () => {
  const [selectedServices, setSelectedServices] = useState<Service[]>([]);

  return (
    <div className="flex flex-col items-center w-full">
      <Navbar />
      <div className="w-full max-w-[82rem]">
        <h1 className="text-2xl font-bold mb-6">Select Your Services</h1>

        <ServiceFilter
          selected={selectedServices}
          setSelected={setSelectedServices}
        />

        <PriceSummary selected={selectedServices} />
      </div>
    </div>
  );
};

export default ContactPage;
