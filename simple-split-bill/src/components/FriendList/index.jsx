import Friend from "../Friend";

export default function FriendList({ friends }) {
  return(
    <ul>
      {friends.map((friend, index) => (
        <Friend friends={friend} key={index}/>
      ))}
    </ul>
  )
}
