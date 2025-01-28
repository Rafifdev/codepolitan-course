import { useState } from "react";

function App() {
  const listItems = [
    { id: 0, title: "Apel", done: true },
    { id: 1, title: "Pisang", done: false },
    { id: 2, title: "Jeruk", done: true },
  ];

  return (
    <div className="app">
      <Logo />
      <Form />
      <div className="list">
        <ul>
          <Items data={listItems} />
        </ul>
      </div>
      <Footer data={listItems} />
    </div>
  );
}

function Logo() {
  return <div className="logo">📝 Simple Todo List ✅</div>;
}

function Form() {
  const [title, setTitle] = useState("");
  
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Ada yang mau di catet kah abangku?🧐</h3>
      <input
        type="text"
        placeholder="Stroberi..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>Catat</button>
    </form>
  );
}

function Items(props) {

  return props.data.map( list => (
    <li key={list.id}>
      <input type="checkbox" defaultChecked={list.done}/>
      <span style={{textDecoration: list.done ? "line-through": ""}}>{list.title}</span>
      <button style={{ padding: "0px" }}>❌</button>
    </li>
  ));
}

function Footer(props) {
  const checklist = Object.values(props.data).filter(item => item.done).length
  return (
    <footer className="stats">
      📝 Kamu memiliki {props.data.length} catatan dan baru {checklist} yang di checklist ✅
    </footer>
  );
}

export default App;
