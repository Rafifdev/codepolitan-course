export default function FormSplitBill(){
  return(
    <form className="form-split-bill">
      <h2>Patungan bareng si X</h2>

      {/* Total biaya */}
      <label htmlFor="">💵 Total biaya</label>
      <input type="text" name="" id="" />

      {/* Pengeluaran kamu */}
      <label htmlFor="">🙎‍♂️ Pengeluaran kamu</label>
      <input type="text" name="" id="" />

      {/* Pengeluaran teman */}
      <label htmlFor="">🙎 Pengeluaran X</label>
      <input type="text" name="" id="" />

      {/* Pembayaran */}
      <label htmlFor="">🤑 Siapa yang bayar?</label>

      {/* Menu teman */}
      <select name="" id="">
        <option value="">Kamu</option>
        <option value="">X</option>
      </select>

      {/* Button tambah */}
      <button className="button">Tambah</button>
    </form>
  )
}