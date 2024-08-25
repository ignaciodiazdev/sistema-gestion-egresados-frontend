import { GradoAcademicoList } from "./crud/GradoAcademicoList";

export const GradosAcademicosPage = () => {
  return (
    <div>
      <h1 className="text-4xl text-indigo-700 font-bold mb-7">
        Grados Academicos
      </h1>
      <div className="space-y-8">
        <GradoAcademicoList />
      </div>
    </div>
  );
};
