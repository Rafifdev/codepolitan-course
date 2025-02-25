import { useState } from "react";
import Items from "../Items"

// component list
export default function List({ listItem, handleDeleteItem, handleChecklist, handleClear }) {
  const [sortBy, setSortBy] = useState("input");

  function sortLists() {
    switch (sortBy) {
      case "abjad":
        return listItem.slice().sort((a, b) => a.text - b.text);
      case "status":
        return listItem
          .slice()
          .sort((a, b) => b.chechklist - a.chechklist);
      case "input":
      default:
        return listItem;
    }
  }

  const sortedLists = sortLists();

  return (
    <div className="list">
      <ul>
        <Items
          listItem={sortedLists}
          handleDeleteItem={handleDeleteItem}
          handleChecklist={handleChecklist}
        />
      </ul>
      <div className="actions">
        <select
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
        >
          <option value="input">Urutkan berdasarkan terakhir di buat</option>
          <option value="abjad">Urutkan berdasarkan abjad (a-z)</option>
          <option value="status">Urutkan berdasarkan status</option>
        </select>
        <button onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
}