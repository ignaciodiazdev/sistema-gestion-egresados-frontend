import { GestionGradoList } from "./crud/GestionGradoList";

export const GestionGradosPage = () => {
  return (
    <div>
      <h1 className="text-4xl text-indigo-700 font-bold mb-7">
        Gestion de Grados
      </h1>
      <div className="space-y-8">
        <GestionGradoList />
      </div>
    </div>
  );
};
