// components/PriceSummary/PriceSummary.tsx
import { Service } from "../../Pages/ContactPage";

type Props = {
  selected: Service[];
};

const PriceSummary = ({ selected }: Props) => {
  const total = selected.reduce((sum, s) => sum + s.price, 0);

  return (
    <div className="mt-8 p-4 bg-white rounded shadow">
      <h3 className="text-lg font-semibold mb-2">Selected Services</h3>
      {selected.length === 0 ? (
        <p className="text-gray-500">No services selected yet.</p>
      ) : (
        <>
          <ul className="list-disc pl-6 space-y-1">
            {selected.map((s, idx) => (
              <li key={idx}>
                <span className="capitalize">{s.room}</span> - {s.name}: ${s.price}
              </li>
            ))}
          </ul>
          <p className="mt-4 font-bold text-xl">Total: ${total}</p>
        </>
      )}
    </div>
  );
};

export default PriceSummary;
