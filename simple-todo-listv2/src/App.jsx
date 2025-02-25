import Form from "./component/Form"
import Stats from "./component/Stats"
import List from "./component/List"

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
    setItem(item.filter((item) => item.id !== id));
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

  function handleClear(){
    const confirm = window.confirm("Are you sure you want to clear the list?")
    if (confirm){
      setItem([])
    }
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
        handleClear={handleClear}
        handleDeleteItem={handleDeleteItem}
        handleChecklist={handleChecklist}
      />
      <Stats listItem={item} />
    </div>
  );
}

export default App;
