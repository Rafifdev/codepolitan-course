import { useState } from "react";

export default function FormSplitBill({ friend, onSplitBill }) {

  const [amount, setAmount] = useState("");
  const [myBill, setMyBill] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user")
  
  const friendBill = amount ? amount - myBill : "";

  function handleSubmit(e){
    e.preventDefault()
    onSplitBill(whoIsPaying === "user" ? friendBill : -myBill)
  }
  

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Patungan bareng si {friend.name}</h2>

      <label htmlFor="">💵 Total biaya</label>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <label htmlFor="">🙎‍♂️ Tagihan kamu</label>
      <input
        type="number"
        value={myBill}
        onChange={(e) => setMyBill(e.target.value)}
      />

      <label htmlFor="">🙎 Tagihan {friend.name}</label>
      <input type="number" disabled value={friendBill} />

      <label htmlFor="">🤑 Siapa yang bayar?</label>

      <select onClick={(e) => setWhoIsPaying(e.target.value)}>
        <option value="user">Kamu</option>
        <option value={friend.name}>{friend.name}</option>
      </select>

      {/* Button tambah */}
      <button className="button">Tambah</button>
    </form>
  );
}
