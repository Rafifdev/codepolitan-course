import { useState } from "react";

import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import FriendList from "./components/FriendList";

const initialFriends = [
  {
    id: 118836,
    name: "Dummy1",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7000,
  },
  {
    id: 933372,
    name: "Dummy2",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20000,
  },
  {
    id: 499476,
    name: "Dummy3",
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
    setSelectedFriend(null)
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
  }

  function handleSelectedFriend(friend) {
    setSelectedFriend((selected) =>
      selected?.id === friend.id ? null : friend
    );
    setAddFriendStatus(false)
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
          <FriendList friends={friends} onSelect={handleSelectedFriend} />
          {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
          <button className="button" onClick={handleShowAddFriend}>
            {showAddFriend ? "Tutup" : "Tambah teman"}
          </button>
        </div>
        {selectedFriend && <FormSplitBill friend={selectedFriend} />}
      </div>
    </>
  );
}

export default App;
