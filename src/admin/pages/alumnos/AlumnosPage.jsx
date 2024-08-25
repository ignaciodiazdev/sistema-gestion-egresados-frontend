import { AlumnoList } from "./crud/AlumnoList";

export const AlumnosPage = () => {
  return (
    <div>
      <h1 className="text-4xl text-indigo-700 font-bold mb-7">Alumnos</h1>
      <div className="space-y-8">
        <AlumnoList />
      </div>
    </div>
  );
};
