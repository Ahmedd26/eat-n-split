interface IconLabel {
  labelText: string;
  labelIcon?: string;
}

export default function IconLabel({ labelIcon = "", labelText }: IconLabel) {
  return (
    <label
      className={`${labelIcon ? "first-letter:mr-1 first-letter:inline-block first-letter:text-3xl" : ""} font-semibold`}
    >
      {labelIcon} {labelText}
    </label>
  );
}
