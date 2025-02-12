import { useState } from "react";

function App() {
  const [inputChage, setInputChage] = useState("");
  const [item, setItem] = useState([]);

  function handleInputChange(event) {
    setInputChage(event.target.value);
  }

  function handleAddItem() {
    if (inputChage.trim() !== "") {
      const newitem = {
        id: new Date().getTime(),
        text: inputChage,
        chechklist: false,
      };
      setItem((prevItem) => [...prevItem, newitem]);
      setInputChage("")
    }
  }

  function handleDeleteItem(id){
    const updateItem = item.filter((item) => item.id !== id)
    setItem(updateItem)
  }

  return (
    <div className="app">
      <div className="logo">Simple Todo List📝</div>
      <Form
        value={inputChage}
        handleInputChange={handleInputChange}
        handleAddItem={handleAddItem}
        />
      <List listItem={item} handleDeleteItem={handleDeleteItem}/>
      <Stats />
    </div>
  );
}

function Form({ handleInputChange, value, handleAddItem }) {
  return (
    <form className="add-form" onSubmit={(event) => event.preventDefault()}>
      <input
        type="text"
        placeholder="Add notes here..."
        value={value}
        onChange={handleInputChange}
      />
      <button onClick={handleAddItem}>Add</button>
    </form>
  );
}

function List({ listItem, handleDeleteItem }) {
  return (
    <div className="list">
      <ul>
        <Items listItem={listItem} handleDeleteItem={handleDeleteItem}/>
      </ul>
    </div>
  );
}

function Items({ listItem, handleDeleteItem }) {
  return listItem.map((data) => (
    <li key={data.id}>
      <input type="checkbox" /> {data.text} <button onClick={() => handleDeleteItem(data.id)}>❌</button>
    </li>
  ));
}

function Stats() {
  return <div className="stats">Anda memiliki X catatan 📝</div>;
}

export default App;
