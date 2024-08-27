export const Card = ({ icono, titulo, cantidad }) => {
  return (
    <article className="rounded-sm border border-stroke bg-white px-7 py-7 shadow-sm">
      <div className="flex items-center gap-5">
        <div className="flex items-center justify-center rounded-full bg-[#eff2f7] text-primary text-[50px] p-3">
          {icono}
        </div>
        <div>
          <h4 className="text-4xl font-bold text-black">{cantidad}</h4>
          <span className="text-sm font-medium text-gray-600">{titulo}</span>
        </div>
      </div>
    </article>
  );
};
