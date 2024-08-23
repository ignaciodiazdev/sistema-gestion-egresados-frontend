import { GoStack } from "react-icons/go";
export const Card = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-7 py-6 shadow-sm">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#eff2f7] text-primary text-2xl">
        <GoStack />
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-2xl font-bold text-black">$2.450k</h4>
          <span className="text-sm font-medium">Total Product</span>
        </div>

        <span className="flex items-center gap-1 text-sm font-medium text-meta-3">
          2.59%
        </span>
      </div>
    </div>
  );
};
