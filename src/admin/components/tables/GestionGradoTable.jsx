import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete, MdEditSquare } from "react-icons/md";

export const GestionGradoTable = ({ filteredData, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto rounded-lg  shadow-md">
      <table className="min-w-full">
        <thead className="text-left text-white divide-y divide-gray-400 bg-primary">
          <tr>
            <th className="py-2 px-6 font-semibold text-left">
              Código Modular
            </th>
            <th className="py-2 px-6 font-semibold text-left">Código</th>
            <th className="py-2 px-6 font-semibold text-left">Alumno</th>
            <th className="py-2 px-6 font-semibold text-left min-w-48">
              Grado Académico
            </th>
            <th className="py-2 px-6 font-semibold text-left min-w-48">
              Fecha de Registro
            </th>
            <th className="font-semibold text-left">Acciones</th>
          </tr>
        </thead>
        <tbody className="text-left text-yellow divide-y divide-gray-200">
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <tr
                key={item.id}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
              >
                <td className="py-2 px-6 text-sm truncate">
                  {item.codigo_modular}
                </td>
                <td className="py-2 px-6 text-sm truncate">
                  {item.alumno_data.codigo}
                </td>
                <td className="py-2 px-6 text-sm truncate">
                  {item.alumno_data.nombre}
                </td>
                <td className="py-2 px-6 text-sm truncate">
                  {item.grado_academico_data.nombre}
                </td>
                <td className="py-2 px-6 text-sm truncate">
                  {item.fecha_registro}
                </td>
                <td className="p-2 flex gap-2">
                  <button
                    onClick={() => onEdit(item)}
                    className="text-green-600 hover:text-green-800 mr-2 text-xl"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => onDelete(item)}
                    className="text-red-600 hover:text-red-700 text-xl"
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="6"
                className="h-52 px-6 text-center text-gray-400 font-semibold bg-white bg-opacity-85"
              >
                No se encontraron resultados
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
