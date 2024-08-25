export const SelectItem = ({ options, ...props }) => {
  return (
    <select
      {...props}
      className="block w-full rounded-[.25rem] border border-primary py-4 px-5 text-gray-900 ring-inset ring-gray-300 placeholder:text-gray-400 focus:shadow-sm sm:text-sm sm:leading-6 outline-0"
    >
      {options.map((option, index) => (
        <option key={index} value={option.accessor}>
          {option.header}
        </option>
      ))}
    </select>
  );
};
