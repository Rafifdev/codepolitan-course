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
      setInputChage("");
    }
  }

  function handleDeleteItem(id) {
    const updateItem = item.filter((item) => item.id !== id);
    setItem(updateItem);
  }

  function handleChecklist(id) {
    setItem((prevItem) => {
      return prevItem.map((item) => {
        if (item.id == id) {
          return {
            ...item,
            chechklist: !item.chechklist,
          };
        }
        return item;
      });
    });
  }

  return (
    <div className="app">
      <div className="logo">Simple Todo List📝</div>
      <Form
        value={inputChage}
        handleInputChange={handleInputChange}
        handleAddItem={handleAddItem}
      />
      <List
        listItem={item}
        handleDeleteItem={handleDeleteItem}
        handleChecklist={handleChecklist}
      />
      <Stats listItem={item} />
    </div>
  );
}

// component form (input data)
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

// component list
function List({ listItem, handleDeleteItem, handleChecklist }) {
  return (
    <div className="list">
      <ul>
        <Items
          listItem={listItem}
          handleDeleteItem={handleDeleteItem}
          handleChecklist={handleChecklist}
        />
      </ul>
    </div>
  );
}

// component item
function Items({ listItem, handleDeleteItem, handleChecklist }) {
  return listItem.map((data) => (
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
  ));
}

// component stats
function Stats({ listItem }) {
  return <div className="stats" style={{position: "fixed", bottom: 0, width : "100%"}}>Anda memiliki {listItem.length} catatan 📝</div>;
}

export default App;
