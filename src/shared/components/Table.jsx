import React from "react";

export const Table = ({ columns, data, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto rounded-lg  shadow-md">
      <table className="min-w-full">
        <thead className="text-left text-white divide-y divide-gray-400 bg-primary">
          <tr>
            {columns.map((column) => (
              <th
                key={column.accessor}
                className="py-2 px-6 font-semibold text-left"
              >
                {column.header}
              </th>
            ))}
            <th className="font-semibold">Acciones</th>
          </tr>
        </thead>
        <tbody className="text-left text-yellow divide-y divide-gray-200">
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length + 1}
                className="h-52 px-6 text-center text-gray-400 font-semibold bg-white bg-opacity-85"
              >
                No hay resultados
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-100"}
              >
                {columns.map((column) => (
                  <td
                    key={column.accessor}
                    className={
                      column.minWidth
                        ? `py-2 px-6 text-sm truncate ${column.minWidth}`
                        : "py-2 px-6 text-sm truncate"
                    }
                  >
                    {column.Cell
                      ? column.Cell(row[column.accessor])
                      : row[column.accessor] || "No registrado"}
                  </td>
                ))}
                <td className="p-2 flex gap-8">
                  <button
                    onClick={() => onEdit(row)}
                    className="text-blue-600 hover:text-blue-900 mr-2"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => onDelete(row)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
