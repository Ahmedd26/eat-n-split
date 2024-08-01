import { IFriend } from "../data/data";
import Friend from "./Friend";

interface IProp {
  friends: IFriend[];
  onSelection: (friend: IFriend) => void;
  selectedFriend: IFriend | null;
}
export default function FriendsList({
  friends,
  onSelection,
  selectedFriend,
}: IProp) {
  return (
    <ul className="mb-8 flex flex-col gap-2 rounded-md bg-yellow-50 text-2xl shadow-md">
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}
