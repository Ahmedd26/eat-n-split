import { useState } from "react";
import Button from "./UI/Button";
import Form from "./UI/Form";
import FriendInput from "./UI/FriendInput";
import IconLabel from "./UI/IconLabel";
import { IFriend } from "../data/data";

export default function FormAddFriend({
  onAddFriend,
}: {
  onAddFriend: (friend: IFriend) => void;
}) {
  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<string>("https://i.pravatar.cc/48");

  function handleSubmission(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!name || !image) return;
    const id = crypto.randomUUID();
    const newFriend: IFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };
    onAddFriend(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48");
  }
  return (
    <Form onSubmit={handleSubmission}>
      <IconLabel labelText="Friend name" labelIcon="👫🏻" />
      <FriendInput value={name} onChange={(e) => setName(e.target.value)} />
      <IconLabel labelText="Image URL" labelIcon="🌄" />
      <FriendInput value={image} onChange={(e) => setImage(e.target.value)} />
      <Button className="col-start-2 mt-3">Add</Button>
    </Form>
  );
}
