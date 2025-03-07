import Friend from "../Friend";

export default function FriendList({ friends, onSelect }) {
  return(
    <ul>
      {friends.map((friend, index) => (
        <Friend friends={friend} key={index} onSelect={onSelect}/>
      ))}
    </ul>
  )
}
