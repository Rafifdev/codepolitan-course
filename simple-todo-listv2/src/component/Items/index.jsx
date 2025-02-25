// component item
export default function Items({ listItem, handleDeleteItem, handleChecklist }) {
  return listItem.map((data) => (
    <>
      <li key={data.id}>
        <input
          type="checkbox"
          onChange={() => handleChecklist(data.id)}
          checked={data.chechklist}
        />
        <span style={{ textDecoration: data.chechklist ? "line-through" : "" }}>
          {data.text}
        </span>
        <button onClick={() => handleDeleteItem(data.id)}>❌</button>
      </li>
    </>
  ));
}