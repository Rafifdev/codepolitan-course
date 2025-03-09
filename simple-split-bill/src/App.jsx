import { useState } from "react";

import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import FriendList from "./components/FriendList";

const initialFriends = [
  {
    id: 118836,
    name: "Michael",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7000,
  },
  {
    id: 933372,
    name: "Sam",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20000,
  },
  {
    id: 499476,
    name: "Yoapipp",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setAddFriendStatus] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriend() {
    setAddFriendStatus((showAddFriend) => !showAddFriend);
    setSelectedFriend(null);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
  }

  function handleSelectedFriend(friend) {
    setSelectedFriend((selected) =>
      selected?.id === friend.id ? null : friend
    );
    setAddFriendStatus(false);
  }

  function splitBill(value) {
    setFriends(
      friends.map((friend) => {
        if (friend.id === selectedFriend.id) {
          if (value === 0) {
            return { ...friend, balance: 0 };
          } else {
            return {
              ...friend,
              balance: friend.balance + value,
            };
          }
        }
        return friend;
      })
    );
    setSelectedFriend(null);
  }

  return (
    <>
      <div
        className="title"
        style={{
          fontSize: "1.5rem",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        <h1>Simple Split Bill</h1>
      </div>
      <div className="app">
        <div className="sidebar">
          <FriendList
            friends={friends}
            onSelect={handleSelectedFriend}
            selectedFriend={selectedFriend}
          />
          {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
          <button className="button" onClick={handleShowAddFriend}>
            {showAddFriend ? "Tutup" : "Tambah teman"}
          </button>
        </div>
        {selectedFriend && (
          <FormSplitBill friend={selectedFriend} onSplitBill={splitBill} />
        )}
      </div>
    </>
  );
}

export default App;
