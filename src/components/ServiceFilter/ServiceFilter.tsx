// components/ServiceFilter/ServiceFilter.tsx
import { useState } from "react";
import { Service } from "../../Pages/ContactPage";

type Props = {
  selected: Service[];
  setSelected: React.Dispatch<React.SetStateAction<Service[]>>;
};

const servicesData: { [key: string]: Service[] } = {
  home: [
    { room: "home", name: "Cleaning", price: 50 },
    { room: "home", name: "Painting", price: 100 },
  ],
  bathroom: [
    { room: "bathroom", name: "Plumbing", price: 70 },
    { room: "bathroom", name: "Tiling", price: 120 },
  ],
};

const ServiceFilter = ({ selected, setSelected }: Props) => {
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);

  const toggleService = (service: Service) => {
    const exists = selected.some(
      (s) => s.room === service.room && s.name === service.name
    );
    if (exists) {
      setSelected(
        selected.filter(
          (s) => !(s.room === service.room && s.name === service.name)
        )
      );
    } else {
      setSelected([...selected, service]);
    }
  };

  const isSelected = (service: Service) =>
    selected.some(
      (s) => s.room === service.room && s.name === service.name
    );

  return (
    <div className="space-y-6">
      {/* ROOM FILTER */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Select Room</h2>
        <div className="flex gap-2 flex-wrap">
          {Object.keys(servicesData).map((room) => (
            <button
              key={room}
              className={`px-4 py-2 rounded border capitalize ${
                selectedRoom === room
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 border-gray-300"
              }`}
              onClick={() =>
                setSelectedRoom(selectedRoom === room ? null : room)
              }
            >
              {room}
            </button>
          ))}
        </div>
      </div>

      {/* SERVICES FILTER */}
      {selectedRoom && (
        <div>
          <h3 className="text-lg font-medium mb-2">
            Services in <span className="capitalize">{selectedRoom}</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {servicesData[selectedRoom].map((service) => (
              <button
                key={service.name}
                onClick={() => toggleService(service)}
                className={`px-4 py-2 rounded border ${
                  isSelected(service)
                    ? "bg-green-500 text-white"
                    : "bg-white text-gray-700 border-gray-300"
                }`}
              >
                {service.name} (${service.price})
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceFilter;
