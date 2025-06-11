import { Service } from "../../Pages/BookServicePage";

type Props = {
  selected: Service[];
};

const PriceSummary = ({ selected }: Props) => {
  const total = selected.reduce((sum, s) => sum + s.price * (s.count ?? 1), 0);

  return (
    <div className="rounded-3xl px-[60px] py-[57px] bg-[#EFEFEF] sticky top-[25px] h-[500px] flex flex-col">
      <h3 className="text-[30px] font-semibold mb-6">Booking Summary</h3>
      {selected.length === 0 ? (
        <p className="text-gray-500"></p>
      ) : (
        <>
          <ul className="list-disc pl-6 space-y-2 flex-1 overflow-y-auto">
            {selected.map((s, idx) => (
              <li key={idx} className="capitalize">
                {s.room} - {s.name}  x  {s.count ?? 1}: ₼{s.price * (s.count ?? 1)}
              </li>
            ))}
          </ul>
          <p className="mt-6 font-bold text-xl border-t pt-4">
            Total: ₼{total}
          </p>
        </>
      )}
    </div>
  );
};

export default PriceSummary;
