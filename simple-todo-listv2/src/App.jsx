import Form from "./components/Form";
import List from "./components/List";
import { useState } from "react";

function App() {
  const [inputList, setInputList] = useState("");
  const [list, setList] = useState([]);

  function handleInputChange(event) {
    setInputList(event.target.value);
  }

  function handleAddList() {
    if (inputList.trim() !== "") {
      const newList = {
        id: new Date().getTime(),
        list: inputList,
        status: false,
      };
      setList((listItems) => [...listItems, newList]);
    }
  }

  return (
    <div className="app">
      <div className="logo">Simple Todo List📝</div>
      <Form
        value={inputList}
        handleInputChange={handleInputChange}
        handleAddList={handleAddList}
      ></Form>
      <List getList={list}/>
      <div className="stats">
        📝Kamu punya 100 catatan, dan baru 100 yang di checklist✅
      </div>
    </div>
  );
}

export default App;
