import { useState } from "react";

export default function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState(`https://i.pravatar.cc/48`);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();

    const newObj = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    onAddFriend(newObj);
    setName("");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      {/* Form nama */}
      <label htmlFor="">📝 Nama</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {/* Form gmbar */}
      <label htmlFor="">🖼️ Gambar</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      {/* Button tambah */}
      <button className="button">
        Tambah
      </button>
    </form>
  );
}
