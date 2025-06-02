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

const ServiceSelector = ({ selected, setSelected }: Props) => {
  const toggleService = (service: Service) => {
    const exists = selected.some(
      (s) => s.room === service.room && s.name === service.name
    );
    if (exists) {
      setSelected(selected.filter(
        (s) => !(s.room === service.room && s.name === service.name)
      ));
    } else {
      setSelected([...selected, service]);
    }
  };

  return (
    <div className="space-y-4">
      {Object.entries(servicesData).map(([room, services]) => (
        <div key={room}>
          <h2 className="text-xl font-semibold capitalize">{room}</h2>
          <div className="flex flex-wrap gap-2">
            {services.map((service) => {
              const isSelected = selected.some(
                (s) => s.room === service.room && s.name === service.name
              );
              return (
                <button
                  key={service.name}
                  className={`px-4 py-2 rounded border ${
                    isSelected
                      ? "bg-green-500 text-white"
                      : "bg-white text-gray-700 border-gray-300"
                  }`}
                  onClick={() => toggleService(service)}
                >
                  {service.name} (${service.price})
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceSelector;
