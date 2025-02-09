import Item from "../Item";

export default function List({ getList }) {
  return (
    <div className="list">
      <ul>
        {getList.map((data) => (
          <Item key={data.id} item={data}></Item>
        ))}
      </ul>
    </div>
  );
}
