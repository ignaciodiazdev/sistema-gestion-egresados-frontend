import { PeriodoList } from "./crud/PeriodoList";

export const PeriodosPage = () => {
  return (
    <div>
      <h1 className="text-4xl text-indigo-700 font-bold mb-7">Periodos</h1>
      <div className="space-y-8">
        <PeriodoList />
      </div>
    </div>
  );
};
