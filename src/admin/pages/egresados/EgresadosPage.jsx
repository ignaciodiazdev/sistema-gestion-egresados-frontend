import { EgresadoList } from "./crud/EgresadoList";

export const EgresadosPage = () => {
  return (
    <div>
      <h1 className="text-4xl text-indigo-700 font-bold mb-7">Egresados</h1>
      <div className="space-y-8">
        <EgresadoList />
      </div>
    </div>
  );
};
