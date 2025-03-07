export default function FormSplitBill({ friend }) {
  return (
    <form className="form-split-bill">
      <h2>Patungan bareng si {friend.name}</h2>

      {/* Total biaya */}
      <label htmlFor="">💵 Total biaya</label>
      <input type="text" />

      {/* Pengeluaran kamu */}
      <label htmlFor="">🙎‍♂️ Pengeluaran kamu</label>
      <input type="text" />

      {/* Pengeluaran teman */}
      <label htmlFor="">🙎 Pengeluaran {friend.name}</label>
      <input type="text" />

      {/* Pembayaran */}
      <label htmlFor="">🤑 Siapa yang bayar?</label>

      {/* Menu teman */}
      <select>
        <option value="">Kamu</option>
        <option value="">{friend.name}</option>
      </select>

      {/* Button tambah */}
      <button className="button">Tambah</button>
    </form>
  );
}
