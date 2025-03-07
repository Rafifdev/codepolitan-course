import { useState } from "react";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import FriendList from "./components/FriendList";

const initialFriends = [
  {
    id: 118836,
    name: "Budi",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sukma",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Parjo",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {

  const [addFriendStatus, setAddFriendStatus] = useState(false)
  function togle(){
    setAddFriendStatus((addFriendStatus) => !addFriendStatus)
  }

  return(
    <div className="app">
      <div className="sidebar">
        <FriendList friends={initialFriends}/>
        {addFriendStatus && <FormAddFriend/>}
        <button className="button" onClick={togle}>{addFriendStatus ? "Tutup" : "Tambah teman"}</button>
      </div>
      <FormSplitBill/>
    </div>
  );
}

export default App;
