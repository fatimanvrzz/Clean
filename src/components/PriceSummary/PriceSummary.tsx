import { Service } from "../../Pages/BookServicePage";

type Props = {
  selected: Service[];
};

const PriceSummary = ({ selected }: Props) => {
  const total = selected.reduce((sum, s) => sum + s.price, 0);

  return (
    <div className="rounded-3xl px-[60px] py-[57px] bg-[#EFEFEF] flex flex-col h-full overflow-y-auto">
      <h3 className="text-[30px] font-semibold mb-2">Booking Summary</h3>
      {selected.length === 0 ? (
        <p className="text-gray-500">No services selected yet.</p>
      ) : (
        <>
          <ul className="list-disc pl-6 space-y-1">
            {selected.map((s, idx) => (
              <li key={idx}>
                <span className="capitalize">{s.room}</span> - {s.name}:  ₼{s.price}
              </li>
            ))}
          </ul>
          <p className="mt-4 font-bold text-xl">Total: ₼{total}</p>
        </>
      )}
    </div>
  );
};

export default PriceSummary;
