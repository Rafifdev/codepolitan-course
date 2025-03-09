import Friend from "../Friend";

export default function FriendList({ friends, onSelect, selectedFriend }) {
  return(
    <ul>
      {friends.map((friend, index) => (
        <Friend friends={friend} key={index} onSelect={onSelect} selectedFriend={selectedFriend}/>
      ))}
    </ul>
  )
}
