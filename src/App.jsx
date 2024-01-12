import { useEffect, useState } from "react";

/* eslint-disable react/no-unescaped-entities */
const App = () => {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setDepth] = useState("");

  const [underLaymentWidth, setUnderLaymentWidth] = useState(null);
  const [underLaymentLength, setUnderLaymentLength] = useState(null);

  const [error, setError] = useState("");

  const calculate = () => {
    const pondLength = parseFloat(length);
    const pondWidth = parseFloat(width);
    const pondDepth = parseFloat(height);

    if (isNaN(pondLength) || isNaN(pondWidth) || isNaN(pondDepth)) {
      setError("Please enter valid numeric values for all dimensions.");
      return;
    }

    const underlaymentLength = 2 * pondDepth + pondLength + 1;

    // Calculate underlayment width and round up to the nearest number (10, 12, or 15)
    const rawUnderlaymentWidth = 2 * pondDepth + pondWidth + 1;
    const roundedUnderlaymentWidth = Math.min(Math.ceil(rawUnderlaymentWidth / 3) * 3, 15);

    setUnderLaymentLength(underlaymentLength);
    setUnderLaymentWidth(roundedUnderlaymentWidth);

    setError(""); // Reset error state if calculation is successful
  };

  useEffect(() => {
    if (length && width && height) {
      calculate();
    }
  }, [length, width, height]);

  return (
    <div className="bg-[#fff] min-h-screen flex items-center  text-[#333]">
      <div className="w-[50vw] h-full mx-auto my-auto">
        <h2 className="text-center text-3xl font-semibold text-[#333] mb-7">UNDERLAYMENT CALCULATOR</h2>
        <div className="card shadow-2xl bg-[#f5f5f5]  card-body">
          <p className="text-[#29a866] font-bold">Enter the largest measurement for each dimension.</p>
          <form action="">
            <div className="flex items-center gap-x-3">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-[#797979] font-medium">Pond Length</span>
                </div>
                <input
                  type="number"
                  placeholder="Pond Length"
                  className="input input-bordered w-full max-w-xs bg-[#fff]"
                  onChange={(e) => setLength(e.target.value)}
                  required />
              {error && <p className="text-red-500">{error}</p>}
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-[#797979] font-medium">Pond Width</span>
                </div>
                <input
                  type="number"
                  placeholder="Pond Width"
                  className="input input-bordered w-full max-w-xs bg-[#fff]"
                  onChange={(e) => setWidth(e.target.value)}
                  required
                />
                {error && <p className="text-red-500">{error}</p>}
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-[#797979] font-medium">Pond Depth</span>
                </div>
                <input
                  type="number"
                  placeholder="Pond Depth"
                  className="input input-bordered w-full max-w-xs bg-[#fff]"
                  onChange={(e) => setDepth(e.target.value)}
                  required />
                {error && <p className="text-red-500">{error}</p>}
              </label>

            </div>
          </form>
            <div className="mt-3">
            <h2 className="text-lg font-semibold ">Underlayment Length: <span className="text-xl text-[#29a866]">{underLaymentLength}</span></h2>
            <h2 className="text-lg font-semibold">Underlayment Width: <span className="text-xl text-[#29a866]">{underLaymentWidth}</span></h2>
            </div>

          <p className="pt-4 text-[#333]">
            Underlayment is manufactured in widths of 10, 12, or 15'. This calculator will find the best size for your pond using these available widths. If both dimensions of your pond are greater than 15', you'll get a size you can cut in half to cover the whole area.
          </p>
        </div>
     </div>
    </div>
  );
};

export default App;