import { IFriend } from "../data/data";
import Button from "./UI/Button";
interface IProp {
  friend: IFriend;
  onSelection: (friend: IFriend) => void;
  selectedFriend: IFriend | null;
}

export default function Friend({ friend, onSelection, selectedFriend }: IProp) {
  const { name, image, balance } = friend;
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <li
      className={`${isSelected ? "bg-yellow-100" : ""} grid-cols-friend grid items-center gap-6 rounded-lg p-5 duration-500 hover:bg-yellow-100`}
    >
      <img src={image} alt={name} className="row-span-2 w-full rounded-full" />
      <h3 className="col-span-2 row-span-1">{name}</h3>
      {balance < 0 && (
        <p className="text-red-500">
          You owe {name} ${Math.abs(balance)}
        </p>
      )}
      {balance > 0 && (
        <p className="text-green-500">
          {name} owes you ${balance}
        </p>
      )}
      {balance === 0 && <p>You and {name} are even!</p>}
      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "Close" : "Selected"}
      </Button>
    </li>
  );
}

/**


 * / */
