interface ISelect {
  options: { value: string; text: string }[];
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
}
export default function Select({ options, value, onChange }: ISelect) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="rounded-lg border border-yellow-200 p-3 text-center text-2xl outline-none duration-300 focus:border-yellow-400"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  );
}
