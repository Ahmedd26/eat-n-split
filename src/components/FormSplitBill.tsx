import { ChangeEvent, useState } from "react";
import { IFriend } from "../data/data";
import Button from "./UI/Button";
import Form from "./UI/Form";
import FriendInput from "./UI/FriendInput";
import IconLabel from "./UI/IconLabel";
import Select from "./UI/Select";

interface IProp {
  selectedFriend: IFriend;
  onSplitBill: (value: number) => void;
}

export default function FormSplitBill({ selectedFriend, onSplitBill }: IProp) {
  const [bill, setBill] = useState<number>(0);
  const [paidByUser, setPaidByUser] = useState<number>(0);
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const { name } = selectedFriend;

  const handleBillChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) setBill(Number(value));
  };
  const handleExpenseChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value))
      setPaidByUser(Number(value) > bill ? paidByUser : Number(value));
  };
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!bill || !paidByUser) return;
    onSplitBill(whoIsPaying === "user" ? +paidByFriend : -paidByUser);
  }
  return (
    <Form type="split-bill" onSubmit={handleSubmit}>
      <h2 className="col-span-full mb-6 text-4xl font-bold uppercase tracking-[-0.5px]">
        Split a bill with {name}
      </h2>
      <IconLabel labelText="Bill value" labelIcon="💰" />
      <FriendInput value={bill} onChange={handleBillChange} />
      <IconLabel labelText="Your expense" labelIcon="🧍🏻" />
      <FriendInput value={paidByUser} onChange={handleExpenseChange} />
      <IconLabel labelText={`${name}'s expense`} labelIcon="👫🏻" />
      <FriendInput disabled value={paidByFriend} />
      <IconLabel labelText="Who is paying the bill" labelIcon="🤑" />
      <Select
        value={whoIsPaying}
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          setWhoIsPaying(e.target.value)
        }
        options={[
          { value: "user", text: "you" },
          { value: "friend", text: name },
        ]}
      ></Select>
      <Button className="col-start-2">Split Bill</Button>
    </Form>
  );
}
