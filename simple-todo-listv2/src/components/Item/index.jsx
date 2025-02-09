export default function List({ id, item}) {
  return (
    <>
      <li key={id}>
        <input type="checkbox" value={item.status}/>
        {item.list}
        <button>❌</button>
      </li>
    </>
  );
}
