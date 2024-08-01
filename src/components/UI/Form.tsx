import { ReactNode } from "react";
interface IProp {
  children: ReactNode;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
  type?: "split-bill" | "add-friend";
}
export default function Form({
  children,
  type = "add-friend",
  onSubmit,
}: IProp) {
  return (
    <form
      onSubmit={onSubmit}
      className={`${type === "add-friend" ? "grid-cols-add-friend p-5" : "grid-cols-split-bill px-16 py-14"} mb-6 grid items-center gap-5 rounded-md bg-yellow-50 text-2xl shadow-md`}
    >
      {children}
    </form>
  );
}
