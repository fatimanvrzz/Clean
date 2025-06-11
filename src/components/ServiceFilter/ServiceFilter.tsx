import { useState, useRef, useEffect } from "react";
import { Service } from "../../Pages/BookServicePage";

type Props = {
  selected: Service[];
  setSelected: React.Dispatch<React.SetStateAction<Service[]>>;
};

const roomCategories = ["home", "bathroom", "dining room", "kitchen"];

const detailedServicesData: { [room: string]: Service[] } = {
  "home": [
    { room: "home", name: "Deep Cleaning", price: 150 },
    { room: "home", name: "Laundry", price: 80 },
    { room: "home", name: "Carpet Washing", price: 120 },
    { room: "home", name: "Window Cleaning", price: 60 },
    { room: "home", name: "Floor Polishing", price: 70 },
    { room: "home", name: "Gardening", price: 90 },
    { room: "home", name: "Pest Control", price: 110 },
    { room: "home", name: "Electrical Repairs", price: 130 },
    { room: "home", name: "HVAC Maintenance", price: 140 },
    { room: "home", name: "Furniture Assembly", price: 250 },
    { room: "home", name: "Interior Painting", price: 300 },
    { room: "home", name: "Wall Repairs", price: 180 },
    { room: "home", name: "Curtain Installation", price: 90 },
  ],
  "bathroom": [
    { room: "bathroom", name: "Plumbing", price: 70 },
    { room: "bathroom", name: "Tiling", price: 120 },
    { room: "bathroom", name: "Window Cleaning", price: 60 },
    { room: "bathroom", name: "Floor Polishing", price: 70 },
    { room: "bathroom", name: "Gardening", price: 90 },
    { room: "bathroom", name: "Pest Control", price: 110 },
    { room: "bathroom", name: "Electrical Repairs", price: 130 },
    { room: "bathroom", name: "HVAC Maintenance", price: 140 },
    { room: "bathroom", name: "Furniture Assembly", price: 50 },
    { room: "bathroom", name: "Mold Removal", price: 160 },
    { room: "bathroom", name: "Shower Glass Cleaning", price: 75 },
    { room: "bathroom", name: "Grout Cleaning", price: 85 },
  ],
  "dining room": [
    { room: "dining room", name: "Furniture Polishing", price: 60 },
    { room: "dining room", name: "Window Cleaning", price: 50 },
    { room: "dining room", name: "Floor Polishing", price: 70 },
    { room: "dining room", name: "Gardening", price: 90 },
    { room: "dining room", name: "Pest Control", price: 110 },
    { room: "dining room", name: "Electrical Repairs", price: 130 },
    { room: "dining room", name: "HVAC Maintenance", price: 140 },
    { room: "dining room", name: "Furniture Assembly", price: 50 },
    { room: "dining room", name: "Chandelier Cleaning", price: 100 },
    { room: "dining room", name: "Wall Painting", price: 280 },
    { room: "dining room", name: "Wall Decor Installation", price: 120 },
  ],
  "kitchen": [
    { room: "kitchen", name: "Appliance Cleaning", price: 90 },
    { room: "kitchen", name: "Exhaust Hood Cleaning", price: 100 },
    { room: "kitchen", name: "Window Cleaning", price: 60 },
    { room: "kitchen", name: "Floor Polishing", price: 70 },
    { room: "kitchen", name: "Gardening", price: 90 },
    { room: "kitchen", name: "Pest Control", price: 110 },
    { room: "kitchen", name: "Electrical Repairs", price: 130 },
    { room: "kitchen", name: "HVAC Maintenance", price: 140 },
    { room: "kitchen", name: "Furniture Assembly", price: 50 },
    { room: "kitchen", name: "Pipe Descaling", price: 150 },
    { room: "kitchen", name: "Grease Removal Service", price: 110 },
    { room: "kitchen", name: "Cabinet Polishing", price: 95 },
  ],
};

const ServiceFilter = ({ selected, setSelected }: Props) => {
  const [selectedRoom, setSelectedRoom] = useState<string>("home");
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
      setSelected([...selected, { ...service, count: 1 }]);
    }
  };

  const isSelected = (service: Service) =>
    selected.some((s) => s.room === service.room && s.name === service.name);

  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // sayını artırmaq/azaltmaq üçün funksiya
  const changeCount = (service: Service, delta: number) => {
    setSelected((prev) =>
      prev.map((s) => {
        if (s.room === service.room && s.name === service.name) {
          const newCount = Math.max(1, (s.count ?? 1) + delta);
          return { ...s, count: newCount };
        }
        return s;
      })
    );
  };

  return (
    <div className="space-y-6 h-full overflow-y-auto">
      <div className="space-y-[33px] h-full overflow-hidden">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Choose your service</h2>

          <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="inline-flex justify-between items-center w-[650px] px-4 py-3 border rounded-md focus:outline-none"
            >
              <span className="capitalize">{selectedRoom}</span>
              <svg
                className={`w-5 h-5 ml-2 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>

            {dropdownOpen && (
              <div className="absolute z-10 mt-1 w-[650px] rounded-md bg-[#EFEFEF] shadow-lg ring-1 ring-black ring-opacity-5 max-h-[300px] overflow-auto">
                <div className="py-1">
                  {roomCategories.map((room) => (
                    <button
                      key={room}
                      className={`block w-full text-left px-4 py-2 text-base capitalize hover:bg-gray-100 ${room === selectedRoom ? "font-bold" : ""
                        }`}
                      onClick={() => {
                        setSelectedRoom(room);
                        setDropdownOpen(false);
                      }}
                    >
                      {room}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Detailed Services */}
        <div>
          <h3 className="text-lg font-medium mb-3">Detailed Services (optional)</h3>
          <div className="flex flex-col gap-[15px]">
            {detailedServicesData[selectedRoom].map((service) => {
              const selectedService = selected.find(
                (s) => s.room === service.room && s.name === service.name
              );

              return (
                <div
                  key={service.name}
                  className={`w-[650px] px-4 py-3 rounded-lg border text-sm transition text-left flex justify-between items-center cursor-pointer ${selectedService
                    ? "bg-[#0F42FF] text-white border-[#0F42FF]"
                    : "text-gray-700"
                    }`}
                  onClick={() => toggleService(service)}
                >
                  <span>{service.name} (₼{service.price})</span>

                  {/* Sayını seçmək üçün düymələr */}
                  {selectedService && (
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          changeCount(service, -1);
                        }}
                        className="bg-white rounded-full w-6 h-6 flex items-center justify-center text-[#0F42FF] font-bold"
                      >
                        -
                      </button>
                      <span>{selectedService.count ?? 1}</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          changeCount(service, 1);
                        }}
                        className="bg-white rounded-full w-6 h-6 flex items-center justify-center text-[#0F42FF] font-bold"
                      >
                        +
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceFilter;
