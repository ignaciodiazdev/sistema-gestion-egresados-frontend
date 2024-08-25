import { CarreraList } from "./crud/CarreraList";

export const CarrerasPage = () => {
  return (
    <div>
      <h1 className="text-4xl text-indigo-700 font-bold mb-7">Carreras</h1>
      <div className="space-y-8">
        <CarreraList />
      </div>
    </div>
  );
};
