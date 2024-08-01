interface IInput {
  value?: string | number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
}
export default function FriendInput({
  disabled = false,
  onChange,
  value,
}: IInput) {
  return (
    <input
      value={value}
      disabled={disabled}
      onChange={onChange}
      type="text"
      className="rounded-lg border border-yellow-200 p-3 text-center text-2xl outline-none duration-300 focus:border-yellow-400"
    />
  );
}
