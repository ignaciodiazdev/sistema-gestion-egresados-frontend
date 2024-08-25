import { EstadoList } from "./crud/EstadoList";

export const EstadosPage = () => {
  return (
    <div>
      <h1 className="text-4xl text-indigo-700 font-bold mb-7">Estados</h1>
      <div className="space-y-8">
        <EstadoList />
      </div>
    </div>
  );
};
